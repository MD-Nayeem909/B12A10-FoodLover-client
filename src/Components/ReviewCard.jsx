import { ArrowRight, Heart, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../Utility/axios";
import toast from "react-hot-toast";
import { useAuth } from "../Providers/AuthContext";
import Button from "./button/Button";

const ReviewCard = ({
  review,
  handleFavoriteToggle = () => {},
  isFavorite = false,
  isFavoritePage = false,
}) => {
  const [author, setAuthor] = useState();
  const [isFavorited, setIsFavorited] = useState(isFavorite);
  const { user, setUser } = useAuth();

  const navigator = useNavigate();
  const handleFavorite = () => {
    if (!user) return navigator("/auth/login");
    setIsFavorited(!isFavorited);
    api
      .put(`/api/reviews/${review._id}/favorite`, { isFavorite: !isFavorited })
      .then(() => {
        setUser({
          ...user,
          favorites: !isFavorited
            ? [...user.favorites, review._id]
            : user.favorites.filter((id) => id !== review._id),
        });
        toast.success(`${isFavorited ? "Removed" : "Added"} from favorites`);
        handleFavoriteToggle(review._id, !isFavorited);
      });
  };

  useEffect(() => {
    if (!isFavoritePage) return;
    api(`/api/reviews/user/${review._id}`).then((response) => {
      setAuthor(response.data.user);
    });
  }, []);

  return (
    <section key={review._id}>
      <div className="card overflow-hidden group bg-base-100 shadow hover:shadow-md transition-shadow duration-300 rounded-lg">
        {/* Image */}
        <div className="relative h-60 overflow-hidden bg-gray-200">
          <img
            src={review.image || "/placeholder.svg"}
            alt={review.foodName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          <button
            onClick={handleFavorite}
            className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 opacity-70 hover:opacity-100 transition-opacity"
          >
            <Heart
              size={24}
              className={isFavorited ? "fill-black text-accent" : "text-accent"}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <section className="flex flex-col gap-1">
            <h3 className="font-bold text-lg text-text-primary line-clamp-1">
              {review.foodName}
            </h3>

            {/* Location */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-text-primary line-clamp-1">
                {review.restaurantName}
              </p>
              <p className="flex items-center gap-1 text-sm text-text-secondary">
                <MapPin size={16} />
                {review.location}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < Math.floor(review.rating)
                        ? "text-accent"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-text-primary">
                {review.rating}
              </span>
            </div>

            {/* Reviewer Name*/}
            <div className="">
              <p className="text-sm text-text-secondary">
                by {review.author?.username || author?.name || "Anonymous"}
              </p>
            </div>
          </section>

          <div className="divider"></div>

          {/* Button */}
          <Link to={`/review-details/${review._id}`} className="">
            <Button state={review} className="w-full">
              Details
              <ArrowRight className="" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;
