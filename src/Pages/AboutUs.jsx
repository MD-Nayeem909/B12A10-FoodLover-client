import React from "react";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <div className="p-6 md:p-12">
      <div className="container mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-base-100 rounded-4xl shadow-sm p-8 md:p-10"
          aria-labelledby="about-title"
        >
          <header className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-content font-semibold text-lg">
              H
            </div>
            <div>
              <h2 id="about-title" className="text-2xl font-semibold">
                About Us
              </h2>
              <p className="text-sm text-neutral">
                Discover local restaurants & hidden food gems
              </p>
            </div>
          </header>

          <p className="text-neutral leading-relaxed mb-4">
            <strong>Food Lovers Network</strong> is a modern MERN-based community platform where food enthusiasts can explore local restaurants, street food, and home-cooked meals. Users can share their food experiences, post reviews with photos, and discover what others are enjoying nearby. This frontend is built using React + Vite, styled with TailwindCSS v4, and powered by Firebase Authentication & Axios API integration.
          </p>

          <ul className="grid gap-2 sm:grid-cols-2 mt-6">
            <li className="flex gap-3 items-start">
              <div className="mt-1 w-3 h-3 rounded-full bg-primary" />
              <div>
                <h4 className="text-sm font-medium">
                  Innovation & Performance
                </h4>
                <p className="text-xs text-neutral">
                  Modern stack and fast runtime for real-world apps.
                </p>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <div className="mt-1 w-3 h-3 rounded-full bg-violet-500" />
              <div>
                <h4 className="text-sm font-medium">Simplicity</h4>
                <p className="text-xs text-neutral">
                  Clear APIs and UI so teams ship features, not config.
                </p>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <div className="mt-1 w-3 h-3 rounded-full bg-emerald-500" />
              <div>
                <h4 className="text-sm font-medium">Security & Reliability</h4>
                <p className="text-xs text-neutral">
                  Built-in best practices to keep your users safe.
                </p>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <div className="mt-1 w-3 h-3 rounded-full bg-yellow-500" />
              <div>
                <h4 className="text-sm font-medium">Community</h4>
                <p className="text-xs text-neutral">
                  Collaboration, examples and friendly documentation.
                </p>
              </div>
            </li>
          </ul>

          <footer className="mt-6 border-t border-base-300 pt-4 text-sm text-neutral">
            <strong>Our mission:</strong> Make web development accessible to
            everyone — so teams can focus on innovation while we handle the
            complexity behind the scenes.
          </footer>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUs;