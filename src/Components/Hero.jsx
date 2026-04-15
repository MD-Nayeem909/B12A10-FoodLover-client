import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import image1 from "../assets/food-menu-1.jpg";
import image2 from "../assets/food-menu-2.jpg";
import image3 from "../assets/food-menu-3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden rounded-2xl">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full group"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Image with animated scale */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ scale: 1.1 }}
              animate={{ scale: activeIndex === index ? 1 : 1.1 }}
              transition={{ duration: 6, ease: "linear" }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto px-6 md:px-16 h-full flex items-center">
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div
                    key={`content-${index}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl bg-black/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <span className="inline-block bg-primary text-primary-content text-xs font-bold px-4 py-1.5 rounded-full tracking-widest mb-6 shadow-lg shadow-primary/30">
                        {slide.badge}
                      </span>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
                    >
                      {slide.title} <br />
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        {slide.subtitle}
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-gray-300 text-sm md:text-base mb-8 max-w-lg leading-relaxed"
                    >
                      Experience the finest culinary journey. Handcrafted with passion, bringing you flavors that dance on your palate and memories that last a lifetime.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex flex-wrap gap-4"
                    >
                      <Button className="btn-primary text-primary-content px-8 rounded-full shadow-lg shadow-primary/40 hover:-translate-y-1 transition-transform">
                        Order Now
                        <MoveRight className="ml-2" />
                      </Button>
                      <Button className="btn-outline text-white hover:bg-white hover:text-black border-white/30 px-8 rounded-full transition-all">
                        View Menu
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Elegant Custom Swiper Styles */}
      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            color: white !important;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            border-radius: 50%;
            width: 50px !important;
            height: 50px !important;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            opacity: 0;
          }
          
          .group:hover .swiper-button-prev,
          .group:hover .swiper-button-next {
            opacity: 1;
          }

          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 20px !important;
            font-weight: bold;
          }

          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
          }

          .swiper-button-prev {
            left: 30px !important;
          }

          .swiper-button-next {
            right: 30px !important;
          }

          .swiper-pagination-bullet {
            background: white !important;
            opacity: 0.4;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            opacity: 1 !important;
            width: 24px !important;
            border-radius: 10px !important;
            background: var(--color-primary, #ff5b5b) !important;
          }

          @media (max-width: 768px) {
            .swiper-button-prev,
            .swiper-button-next {
              display: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
