import React, { useState } from "react";
import { Link } from "react-router";
import SearchBar from "./searchBar/SearchBar";

const DiscoverFlavors = () => {
  
  return (
    <section className="hero bg-base-100 lg:p-10 rounded-2xl">
      <div className="flex flex-col justify-between items-center gap-4 lg:gap-8 py-10 px-5">
        <div className="text-center space-y-4">
          <h2 className="text-3xl text-gradient font-bold ">
            Discover Local Flavors!
          </h2>
          <p className="text-neutral ">
            Join our community of food enthusiasts exploring amazing local
            restaurants and street food!
          </p>
        </div>
        <SearchBar />
        <div className="gap-4 flex flex-col md:flex-row">
          <Link to="all-reviews" className="btn btn-primary">
            Explore Reviews
          </Link>
          <Link to="create-review" className="btn btn-outline btn-primary">
            Share Your Meal
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverFlavors;
