// src/components/home/Hero.jsx
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import foodImage from "../assets/banner-food.jpg";

const Hero2 = () => {
  return (
    <section className="bg-[#f6f9ef] min-h-[70vh] flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={foodImage}
            alt="Salad"
            className="w-[380px] drop-shadow-xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-secondary py-2 px-4 text-secondary-content tracking-wide">
            Welcome to Saladz
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
            Savor The Goodness,
            <br /> Embrace the Freshness.
          </h1>

          <p className="mt-4 text-gray-600 max-w-md">
            Fresh, healthy, and delicious salads crafted with love and care.
          </p>

          <button className="btn btn-success mt-6 px-8">
            Book Here
          </button>

          {/* Social */}
          <div className="flex gap-4 mt-8 text-green-700">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero2;
