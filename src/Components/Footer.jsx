import React from "react";
import Container from "../Utility/Container";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const service = ["Branding", "Design", "Marketing", "Advertisement"];
  const support = [
    "About us",
    "Our Stores",
    "Refund & Return",
    "Delivery Information",
  ];
  const info = ["FAQ", "Terms & Conditions", "Contact Us", "Our Partners"];
  return (
    <section className="bg-base-200 text-base-content">
      <Container>
        <footer className="footer sm:footer-horizontal p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            {service.map((item, index) => (
              <Link key={index} className="link link-hover">
                {item}
              </Link>
            ))}
          </nav>
          <nav>
            <h6 className="footer-title">Support</h6>
            {support.map((item, index) => (
              <Link key={index} className="link link-hover">
                {item}
              </Link>
            ))}
          </nav>
          <nav>
            <h6 className="footer-title">Info</h6>
            {info.map((item, index) => (
              <Link key={index} className="link link-hover">
                {item}
              </Link>
            ))}
          </nav>
          <form>
            <h6 className="footer-title">Subscribe Our Newsletter</h6>
            <fieldset className="w-80">
              <div className="join">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 rounded-l-full join-item"
                />
                <button className="btn btn-primary join-item rounded-r-full">
                  Subscribe
                </button>
              </div>
            </fieldset>
            <p className="text-accent">
              Subscribe to get special offers, free giveaways, <br /> and
              once-in-a-lifetime deals.
            </p>
          </form>
        </footer>
        <hr className=" text-gray-300" />
        <div className="grid grid-cols-12 gap-4 py-4 md:py-6">
          <p className="text-sm grid col-span-12 md:col-span-6 place-content-center">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
          <p className="grid col-span-12 md:col-span-6 place-content-center">
            <span className="flex gap-2">
              <Link to="#" className="hover:text-primary">
                <FaFacebookF size={20} />
              </Link>
              <Link to="#" className="hover:text-primary">
                <FaPinterestP size={20} />
              </Link>
              <Link to="#" className="hover:text-primary">
                <FaInstagram size={20} />
              </Link>
              <Link to="#" className="hover:text-primary">
                <FaXTwitter size={20} />
              </Link>
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
