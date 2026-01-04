import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-base-100 text-white text-center rounded-4xl">
      <h2 className="text-3xl text-primary font-semibold mb-4">
        Ready to Share Your Food Experience?
      </h2>
      <p className="text-neutral mb-6">
        Join thousands of food lovers discovering and reviewing local flavors.
      </p>
      <Link to="/">
        <button className="btn btn-primary rounded-lg font-medium">
          Get Started
        </button>
      </Link>
    </section>
  );
};

export default CTA;
