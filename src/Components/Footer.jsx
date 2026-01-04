import React from "react";
import Logo from "./logo/Logo";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=" bg-base-100 py-12 px-4 border-t border-base-300">
      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        <div className="space-y-4 md:w-2/3">
          <Logo />
          <p className="text-sm leading-relaxed text-neutral">
            Local Food Lovers Network is a community-driven platform that
            connects people who love exploring great food. We aim to provide a
            platform where people can share their experiences, discover new food
            spots, and connect with like-minded individuals. Our mission is to
            make local food discovery easy and enjoyable for everyone.
          </p>
          <div className="flex space-x-5 pt-2">
            <a
              href="https://github.com/MD-Nayeem909"
              className="text-neutral hover:text-secondary transition-transform transform hover:scale-110"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://x.com/md_nayeem98"
              className="text-neutral hover:text-secondary transition-transform transform hover:scale-110"
            >
              <FaXTwitter size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-nayeem98/"
              className="text-neutral hover:text-secondary transition-transform transform hover:scale-110"
            >
              <FaLinkedinIn size={28} />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-between w-full">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-secondary transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="text-neutral hover:text-secondary transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/all-reviews"
                  className="text-neutral hover:text-secondary transition-colors duration-300"
                >
                  Reviews
                </a>
              </li>

              <li>
                <a
                  href="/blog"
                  className="text-neutral hover:text-secondary transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-secondary transition-colors duration-300"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-secondary transition-colors duration-300"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-neutral hover:text-secondary transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-secondary transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-secondary transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="text-neutral">
              123 Tech Avenue, Innovation City, 98765
            </p>
            <p className="text-neutral">Email: info@yourbrand.com</p>
            <p className="text-neutral">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
      <div className="text-center text-neutral text-sm pt-10 mt-10 border-t border-base-300">
        <p className="text-neutral font-medium">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-primary">FoodLover</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
