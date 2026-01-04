import { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const validationEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validationEmail(email)) {
      return toast.error("Please enter a valid email address.");
    }
    toast.success("Thanks for subscribing!");
  };

  return (
    <section className="py-20 bg-base-100 text-center rounded-2xl">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl text-primary font-semibold mb-4">
          Stay Updated With Local Food Trends
        </h2>
        <p className="mb-6 text-neutral">
          Get new reviews and food discoveries directly in your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex justify-center">
          <fieldset className="w-full">
            <div className="join w-full">
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Your email address"
                className="input w-full input-bordered rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 border-base-300 rounded-l-full join-item"
              />
              <button
                type="submit"
                className="btn btn-primary join-item rounded-r-full"
              >
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
