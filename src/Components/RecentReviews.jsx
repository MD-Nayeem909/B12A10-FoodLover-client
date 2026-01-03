import React from "react";
import { Link } from "react-router";
import useService from "../Hooks/useService";
import Loading from "../Utility/Loading";
import { useAuth } from "../Providers/AuthContext";
import ReviewCard from "./card/ReviewCard";
import Button from "./button/Button";
import { MoveRight } from "lucide-react";

const RecentReviews = () => {
  const { user } = useAuth();
  const { data, loading } = useService(
    `${import.meta.env.VITE_API_URL}/api/reviews`
  );

  const reviews =
    (data.data &&
      data.data
        .filter((r) => r.rating == 5)
        .slice(0, 4)
        .sort(() => Math.random() - 0.5)) ||
    [];

    console.log(reviews);
    

  return (
    <div className="my-10 px-2 md:px-0">
      <div className="text-center">
        <h2 className="text-3xl md:text-[1.9rem] font-bold mb-2">
          Featured Reviews
        </h2>
        <p className="text-accent animate-bounce">
          Top-rated food experiences from our community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 rounded-xl">
        {!loading ? (
          reviews.map((review) => {
            const isFavorite = user && user.favorites.includes(review._id);
            return (
              <ReviewCard
                key={review._id}
                review={review}
                isFavorite={isFavorite}
              />
            );
          })
        ) : (
          <div className="mx-auto col-span-12">
            <Loading />
          </div>
        )}
      </div>
      <Link to="/all-reviews" className="flex justify-center">
        <Button className="btn-primary btn-outline md:btn-lg">Show All Reviews
          <MoveRight/>
        </Button>
      </Link>
    </div>
  );
};

export default RecentReviews;
