import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/food-menu-1.jpg";
import image2 from "../assets/food-menu-2.jpg";
import image3 from "../assets/food-menu-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="">
            <div className="w-full overflow-hidden">
              <img
                src={image1}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="rounded-lg ">
            <div className="w-full">
              <img
                src={image2}
                alt=""
                className="object-cover overflow-hidden w-full"
              />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="rounded-lg ">
            <div className="w-full">
              <img
                src={image3}
                alt=""
                className="object-cover overflow-hidden w-full"
              />
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
