
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="badge badge-success mb-3">About Us</span>
          <h2 className="text-3xl font-bold text-green-800">
            Cultivating Wellness with Fresh Living
          </h2>
          <p className="mt-4 text-gray-600">
            We focus on healthy ingredients, clean preparation, and sustainable
            living.
          </p>
        </div>

        <img
          src="/assets/images/about-salad.png"
          alt=""
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
