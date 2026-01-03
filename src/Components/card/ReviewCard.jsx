import { Star, Heart, ArrowRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../../Utility/axios";
import toast from "react-hot-toast";
import { useAuth } from "../../Providers/AuthContext";
import Button from "../button/Button";

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
    <div className="relative w-full  bg-base-100 rounded-box shadow-sm hover:shadow-lg p-6 pt-12 mt-16 text-center group cursor-pointer transform transition-all duration-300 hover:-translate-y-3 ease-in-out">
      {/* Large Screen View */}
      <div className="hidden md:block absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-[6px] border-base-200 shadow-lg overflow-hidden bg-base-100">
        <img
          src={review.image || "/placeholder.svg"}
          alt={review.foodName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      {/* Mobile Screen View */}
      <div className="md:hidden absolute -top-8 left-1/2 -translate-x-1/2 w-[60vw] rounded-4xl h-40 border-[6px] border-base-200 shadow-lg overflow-hidden bg-base-100">
        <img
          src={review.image || "/placeholder.svg"}
          alt={review.foodName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex justify-between items-start mb-10 px-2">
        <div className="flex flex-col items-center gap-1">
          <Star size={20} className="fill-yellow-400 text-yellow-400" />
          <span className="font-bold text-gray-800">{review.rating}</span>
        </div>
        <button
          onClick={handleFavorite}
          className="flex flex-col items-center gap-1 transition-transform active:scale-90"
        >
          <Heart
            size={22}
            className={`${
              isFavorited ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
          <span className="text-xs font-semibold text-gray-500">1.5k</span>
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl line-clamp-1 font-extrabold">
          {review.foodName}
        </h3>

        <section className="flex flex-col gap-2 items-center justify-between line-clamp-1">
          <div className="flex justify-between gap-2">
            <div className="text-sm font-semibold text-text-primary line-clamp-1">
              {review.restaurantName}
            </div>
            <div className="flex items-center gap-1 text-sm text-text-secondary">
              <span>
                <MapPin size={16} className="" />
              </span>
              <span className="line-clamp-1">{review.location}</span>
            </div>
          </div>
          <div className="text-sm text-text-secondary">
            by {review.author?.username || author?.name || "Anonymous"}
          </div>
        </section>

        <section className="flex flex-col items-center gap-2 justify-center">
          <Link to={`/review-details/${review._id}`}>
            <button className="flex btn rounded-lg hover:shadow-sm hover:bg-primary/20 hover:text-primary transition-all duration-300">
              Details
              <ArrowRight size={20} className="ml-2" />
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ReviewCard;
