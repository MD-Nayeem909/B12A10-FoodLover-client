import salad from "../assets/salad.png";
const About = () => {
  return (
    <section className="py-20 bg-base-100 rounded-2xl">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="badge badge-success mb-3">About Us</span>
          <h2 className="text-3xl font-bold">
            Cultivating Wellness with
            <span className="text-primary "> Fresh Living</span>
          </h2>
          <p className="mt-4 text-neutral">
            We focus on healthy ingredients, clean preparation, and sustainable
            living.
          </p>
        </div>

        <img src={salad} alt="" className="" />
      </div>
    </section>
  );
};

export default About;
