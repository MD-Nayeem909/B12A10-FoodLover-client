import React from "react";
import { motion } from "motion/react";
import image from "../assets/error-404.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PageNotFound = () => {
  return (
    <section>
      <header>
        <Navbar />
      </header>
      <main className="">
        <div className="flex flex-col items-center justify-center text-center p-4 min-h-[calc(100vh-365px)]">
          {/* Animated Illustration */}
          <motion.div
            className="w-72 h-72 mb-6"
            initial={{ y: -10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <img
              src={image}
              alt="Oops, page not found!"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Oops, page not found!
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-600 max-w-md mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The page you are looking for is not available.
          </motion.p>

          {/* Animated Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(147, 51, 234, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Go Back!
          </motion.button>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default PageNotFound;
