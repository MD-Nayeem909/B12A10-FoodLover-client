import React, { useState } from "react";
import Container from "../Utility/Container";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import api from "../Utility/axios";
import toast from "react-hot-toast";
import CustomRatingSelect from "../Components/CustomRatingSelect";

const CreateReview = () => {
  const [formData, setFormData] = useState({
    foodName: "",
    image: "",
    restaurantName: "",
    location: "",
    rating: 5,
    reviewText: "",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api({
      method: "post",
      url: "/api/reviews",
      data: formData,
    })
      .then((response) => {
        toast.success("Review created successfully!");
        setFormData({
          foodName: "",
          image: "",
          restaurantName: "",
          location: "",
          rating: 5,
          reviewText: "",
          tags: [],
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <div className="my-10">
        <div className="max-w-3xl mx-auto px-2 md:px-0">
          <Link
            to="/"
            className="font-medium text-xl flex items-center gap-2 mb-4"
          >
            <ArrowLeft className="text-primary" /> Back to Reviews
          </Link>
          <h2 className="text-3xl font-bold mb-2">
            Share Your Food Experience
          </h2>
          <p className="text-neutral mb-8">
            Share your food experience with the community.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-base-100 gap-7 py-8 px-3 md:px-8 rounded-2xl shadow-sm flex flex-col"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label mb-2">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                name="foodName"
                value={formData.foodName}
                placeholder="Product Name"
                onChange={handleChange}
                className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 border-base-300 bg-base-200"
              />
            </div>
            <div className="flex flex-col">
              <label className="label mb-2">
                <span className="label-text">Restaurant Name</span>
              </label>
              <input
                name="restaurantName"
                onChange={handleChange}
                value={formData.restaurantName}
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 border-base-300 bg-base-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1">
            <div>
              <label className="label mb-2">
                <span className="label-text">Location of Restaurant</span>
              </label>
              <input
                name="location"
                onChange={handleChange}
                value={formData.location}
                type="text"
                placeholder="e.g. 18.5"
                className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 border-base-300 bg-base-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1">
            <label className="label mb-2">
              <span className="label-text">Food Image URL</span>
            </label>
            <input
              name="image"
              onChange={handleChange}
              value={formData.image}
              type="text"
              placeholder="https://...Image URL"
              className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 border-base-300 bg-base-200"
            />
          </div>

          <div className="grid grid-cols-1">
            <label className="label mb-2">
              <span className="label-text">Rating</span>
            </label>
            <CustomRatingSelect
              value={formData.rating}
              onChange={(val) =>
                setFormData((prev) => ({ ...prev, rating: val }))
              }
            />
          </div>

          <div className="grid grid-cols-1">
            <label className="label mb-2">
              <span className="label-text">Your Review</span>
            </label>
            <textarea
              name="reviewText"
              onChange={handleChange}
              value={formData.reviewText}
              rows={6}
              className="textarea textarea-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 border-base-300 bg-base-200"
              placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough..... "
            ></textarea>
          </div>

          <div className="grid grid-cols-1">
            <label className="label mb-2">
              <span className="label-text">Tags (comma-separated)</span>
            </label>
            <input
              name="tags"
              onChange={handleChange}
              value={formData.tags}
              type="text"
              placeholder="e.g. spicy, vegan, dessert"
              className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 border-base-300 bg-base-200"
            />
          </div>

          <div className="flex gap-4 w-full justify-end mt-6">
            <button className="btn btn-primary flex-1">Submit Review</button>
            <Link
              to={"/my-reviews"}
              className="btn btn-outline border-gray-300 flex-1"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default CreateReview;
