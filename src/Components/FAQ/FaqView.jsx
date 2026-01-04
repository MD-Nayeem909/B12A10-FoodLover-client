import React from "react";
import { FAQ } from "./FAQ";

const sampleFaqs = [
  {
    index: 1,
    question: "Is Local Food Lovers Network free to use?",
    answer:
      "Yes. Browsing reviews and creating an account are completely free. You can explore local food experiences, share reviews, and save favorites without any cost.",
  },
  {
    index: 2,
    question: "Who can post reviews on the platform?",
    answer:
      "Any registered user can post reviews. We encourage users to share honest experiences based on real visits to restaurants, street food stalls, or home-based food businesses.",
  },
  {
    index: 3,
    question: "Can I edit or delete my reviews later?",
    answer:
      "Absolutely. You have full control over your reviews. You can update or remove any review you’ve posted from your dashboard at any time.",
  },
  {
    index: 4,
    question: "How do favorites work?",
    answer:
      "When you add a review to your favorites, it’s saved to your personal favorites list. This helps you quickly revisit food places you liked or want to try later.",
  },
];

const FaqView = () => {
  return (
    <div id="FAQ" className="md:py-10 bg-base-100 rounded-2xl">
      {/* Accordion View */}
      <div>
        <FAQ faqs={sampleFaqs} colorScheme="blue" searchable />
      </div>
    </div>
  );
};

export default FaqView;
