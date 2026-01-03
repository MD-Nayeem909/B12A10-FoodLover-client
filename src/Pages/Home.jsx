import React from "react";
import Container from "../Utility/Container";
import RecentReviews from "../Components/RecentReviews";
import DiscoverFlavors from "../Components/DiscoverFlavors";
import Stat from "../Components/Stat";
import Hero from "../Components/Hero";
import About from "../Components/About";

const Home = () => {
  return (
    <Container>
      <main className="overflow-hidden">
        <Hero />
        <About />
        <RecentReviews />
        <DiscoverFlavors />
        <Stat />
      </main>
    </Container>
  );
};

export default Home;
