import review1 from "/review1.jpg";
import review2 from "/review2.jpg";
import review4 from "/review4.jpg";

const Highlights = () => {
 
  return (
    <section className="space-y-4 ">
      <h2 className="text-3xl font-semibold text-primary text-center mb-10">
        Why Food Lovers Choose Us
      </h2>

      <div
        className="grid gap-4
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-11 lg:grid-rows-6
            auto-rows-[200px] h-200"
      >
        <div className="relative sm:col-span-2 lg:col-span-3 lg:row-span-6">
          <img
            src={review1}
            alt="Food review"
            className="w-full object-cover rounded-4xl group-hover:scale-110 h-full transition-transform duration-500"
          />
          <div className="absolute bottom-0 z-10 rounded-b-4xl m-4">
            <span></span>
            <h3 className="text-center font-medium text-lg md:text-2xl text-white">
              “Sometimes the best conversations happen between you and a great
              plate of food.”
            </h3>
            <p></p>
          </div>
          <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(0deg,rgba(255,91,91,1)_-10%,rgba(255,184,0,0)_64%)]" />
        </div>
        <div className="relative sm:col-span-2 lg:col-span-8 lg:row-span-3 lg:col-start-4">
          <img
            src={review2}
            alt="Food rating"
            className="w-full h-full object-cover rounded-4xl group-hover:scale-110 transition-transform duration-500"
          />
          <div className="flex justify-center">
            <span></span>
            <h3></h3>
            <p className="z-10 text-center absolute bottom-0 font-medium text-lg md:text-2xl px-4 m-4 text-white">
              “When food looks this good, it deserves five stars.”
            </p>
          </div>
          <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(0deg,rgba(255,91,91,1)_-10%,rgba(255,184,0,0)_64%)]" />
        </div>
        <div className="relative sm:col-span-1 lg:col-span-3 lg:row-span-3 lg:col-start-4 lg:row-start-4">
          <div className="mx-auto bg-[linear-gradient(0deg,rgba(255,91,91,1)_-10%,rgba(255,184,0,0)_64%)] h-full rounded-3xl px-4  text-center shadow-sm flex flex-col items-center justify-center gap-4 lg:gap-10">
            <p className="text-center font-medium text-lg lg:text-2xl">
              “Every dish has a story. This one was delicious.”
            </p>

            <div className="flex flex-row lg:flex-col items-center justify-center gap-4">
              <img
                src="https://i.pravatar.cc/150?img=47"
                alt="Sarah K."
                className="w-20 lg:w-32 rounded-full border-4 border-base-100 object-cover"
              />
              <p className="flex flex-col">
                <span className="font-semibold text-lg">Sarah K.</span>
                <span className="text-md">Marketing Director</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative sm:col-span-1 lg:col-span-5 lg:row-span-3 lg:col-start-7 lg:row-start-4">
          <img
            src={review4}
            alt=""
            className="w-full h-full object-cover rounded-4xl group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-0 z-10 rounded-b-4xl m-4">
            <span></span>
            <h3></h3>
            <p className="text-center font-medium text-lg md:text-2xl text-white">
              “Good food tastes even better when shared with good people.”
            </p>
          </div>
          <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(0deg,rgba(255,91,91,1)_-10%,rgba(255,184,0,0)_64%)]" />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
