import { Edit2, Trash2 } from "lucide-react";
import { Link } from "react-router";
import DeleteModal from "../Utility/DeleteModal";
import api from "../Utility/axios";
import formatDateForWeb from "../Utility/formatDateForWeb";

const MyReviewCard = ({ review, myFavoriteDelete }) => {
  const handleRemoveReview = (id) => {
    DeleteModal(function () {
      api
        .delete(`/api/reviews/${id}`)
        .then((response) => {
          if (myFavoriteDelete) {
            myFavoriteDelete(id);
          }
        })
        .catch((error) => {
          console.error("Error deleting review:", error);
        });
    });
  };
  return (
    <div
      key={review.id}
      className=" group bg-base-100 overflow-hidden border-base-300 shadow-sm"
    >
      <div className="md:flex items-center">
        {/* Image */}
        <div className="md:w-40 h-55 border-base-300 shadow-lg overflow-hidden">
          <img
            src={review.image || "/placeholder.svg"}
            alt={review.foodName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <div>
            <Link
              to={`/review/${review.id}`}
              className="block hover:text-primary mb-1"
            >
              <h3 className="font-bold text-lg text-primary">
                {review.foodName}
              </h3>
            </Link>
            <p className="text-sm font-semibold text-text-primary">
              {review.restaurantName}
            </p>
            <p className="text-sm text-neutral">{review.location}</p>
          </div>

          {/* Rating and Date */}
          <div className="mt-2 mb-4">
            <div className="flex gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-sm ${
                    i < Math.floor(review.rating)
                      ? "text-accent"
                      : "text-neutral"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-xs text-neutral">
              {formatDateForWeb(review.createdAt)}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-2 border-t border-base-300 pt-3">
            <Link
              to={`/edit-review/${review._id}`}
              state={review}
              className="btn flex-1 flex items-center justify-center gap-2 text-primary border-base-300 rounded font-medium"
            >
              <Edit2 size={16} />
              Edit
            </Link>
            <button
              onClick={() => handleRemoveReview(review._id)}
              className="btn flex-1 flex items-center justify-center gap-2 bg-primary/30 text-primary rounded font-medium"
            >
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
