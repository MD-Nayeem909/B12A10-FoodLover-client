import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import api from "../Utility/axios";
import toast from "react-hot-toast";
const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset
      } = useForm(
        {
          defaultValues: {
            name: "",
            email: "",
            message: "",
          },
        }
      );
    
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await api.post("/api/contact", data);
            toast.success("Message sent successfully!");
            reset();
        } catch (error) {
            toast.error("Failed to send message");
        } finally {
            setLoading(false);
        }
      };
  return (
    <div className="p-6 md:p-12">
      <div className="container mx-auto">
        <motion.aside
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-base-100 rounded-4xl shadow-sm p-6 md:p-10"
          aria-labelledby="contact-title"
        >
          <header className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-content font-semibold text-lg">
              C
            </div>
            <div>
              <h2 id="contact-title" className="text-2xl font-semibold">
                Contact Us
              </h2>
              <p className="text-sm text-gray-500">
                We'd love to hear from you — questions, feedback or
                partnerships.
              </p>
            </div>
          </header>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm font-medium">Headquarters</div>
                <div className="text-xs text-neutral">
                  Chittagong, Bangladesh.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm font-medium">Email</div>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=mdnayeemuddin909@gmail.com&subject=Website inquiry from MD Nayeemuddin909@gmail.com"
                  target="_blank"
                  className="text-xs text-primary hover:underline"
                >
                  mdnayeemuddin909@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm font-medium">Office Hours</div>
                <div className="text-xs text-neutral">
                  Mon — Fri • 9:00 AM — 6:00 PM (BD)
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-sm font-medium mb-2">Follow us</div>
              <div className="flex gap-3 items-center">
                <a
                  href="https://x.com/md_nayeem98"
                  target="_blank"
                  className="hover:text-primary/80"
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-nayeem98/"
                  target="_blank"
                  className="hover:text-primary/80"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/MD-Nayeem909"
                  target="_blank"
                  className="hover:text-primary/80"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <form
            className="mt-6 grid gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("name", { required: true })}
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-base-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />

            <input
              {...register("email", { required: true })}
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg border border-base-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />

            <textarea
              {...register("message", { required: true })}
              name="message"
              rows={4}
              placeholder="How can we help?"
              className="w-full rounded-lg border border-base-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />

            <div className="flex items-center justify-between mt-2">
              <div className="text-xs text-gray-500">
                We'll reply within 1–2 business days.
              </div>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.aside>
      </div>
    </div>
  );
};



export default ContactUs;
