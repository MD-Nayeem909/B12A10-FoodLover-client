import React from "react";
import Container from "../Utility/Container";
import Hero from "../Components/Hero";
import RecentReviews from "../Components/RecentReviews";
import DiscoverFlavors from "../Components/DiscoverFlavors";
import Stat from "../Components/Stat";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero />
        <RecentReviews />
        <DiscoverFlavors />
        <Stat />
      </Container>
    </div>
  );
};

export default Home;
