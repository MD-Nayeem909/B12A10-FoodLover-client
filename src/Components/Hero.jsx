import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import image1 from "../assets/food-menu-1.jpg";
import image2 from "../assets/food-menu-2.jpg";
import image3 from "../assets/food-menu-3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./button/Button";
import { MoveRight } from "lucide-react";

const slides = [
  {
    image: image1,
    badge: "BEYOND CHICKEN",
    title: "CRISPY, JUICY &",
    subtitle: "SIMPLY SATISFYING.",
  },
  {
    image: image2,
    badge: "SPECIAL MENU",
    title: "FRESH & TASTY",
    subtitle: "EVERY BITE COUNTS.",
  },
  {
    image: image3,
    badge: "CHEF CHOICE",
    title: "MADE FOR",
    subtitle: "FOOD LOVERS.",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-base-200 text-white relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className=""
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="mx-auto px-4 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full gap-10">
                {/* LEFT IMAGE */}
                <motion.div
                  key={`img-${activeIndex}`}
                  initial={{ opacity: 0, y: -80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <img
                    src={slide.image}
                    alt=""
                    className="w-full h-80 sm:h-[420px] lg:h-[520px] object-cover"
                  />
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                  key={`text-${activeIndex}`}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.15 }}
                  className="flex flex-col gap-4"
                >
                    <span className="w-fit bg-secondary text-xs px-3 py-1 rounded-full tracking-wide">
                      {slide.badge}
                    </span>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
                      {slide.title} <br />
                      <span className="text-secondary">{slide.subtitle}</span>
                    </h1>

                  <div className="flex gap-4 pt-4">
                    <Button className="btn-secondary text-secondary-content px-6">
                      Product Details
                      <MoveRight />
                    </Button>
                    <Button className="btn-outline btn-secondary px-6">
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrow Position Fix */}
      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            top: 50%;
            transform: translateY(-50%);
            color: #4ade80;
          }

          .swiper-button-prev {
            left: 30px;
          }

          .swiper-button-next {
            right: 30px;
          }

          .swiper-pagination-bullet {
            background: #86efac;
            opacity: 0.5;
          }

          .swiper-pagination-bullet-active {
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
