import React from "react";
import Container from "../Utility/Container";
import RecentReviews from "../Components/RecentReviews";
import DiscoverFlavors from "../Components/DiscoverFlavors";
import Stat from "../Components/statistics/Stat";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Highlights from "../Components/highLight/HighLight";
import Testimonials from "../Components/Testimonials";
import Blogs from "../Components/Blogs";
import Newsletter from "../Components/Newsletter";
import CTA from "../Components/CTA";
import FaqView from "../Components/FAQ/FaqView";

const Home = () => {
  return (
    <Container>
      <main className="space-y-20 my-20 px-4 md:px-10 overflow-hidden">
        <Hero />
        <Highlights />
        <About />
        <RecentReviews />
        <Stat />
        <Testimonials />
        <Blogs />
        <Newsletter />
        <FaqView />
        <CTA />
        <DiscoverFlavors />
      </main>
    </Container>
  );
};

export default Home;
