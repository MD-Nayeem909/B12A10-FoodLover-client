import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPinCheck,
  Star,
  UserRoundPen,
} from "lucide-react";
const people = [
  {
    id: 1,
    name: "Rahim Uddin",
    role: "Street Food Explorer",
    location: "Dhaka",
    rating: 5,
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "This platform helped me discover hidden street food gems I would’ve never found on Google. The reviews feel honest and community-driven.",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Home Chef & Food Blogger",
    location: "Chattogram",
    rating: 4.5,
    profile: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "I love how real people share real food experiences here. Posting my own reviews was super easy and the UI feels premium.",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    role: "Cafe Hopper",
    location: "Khulna",
    rating: 5,
    profile: "https://randomuser.me/api/portraits/men/65.jpg",
    message:
      "Finally a food review platform that focuses on local flavors instead of sponsored hype. This feels built for food lovers.",
  },
  {
    id: 4,
    name: "Farzana Akter",
    role: "Dessert Lover",
    location: "Sylhet",
    rating: 4,
    profile: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "The dessert recommendations here are amazing. I’ve tried three new local bakeries already and loved every visit.",
  },
  {
    id: 5,
    name: "Mehedi Hasan",
    role: "University Student",
    location: "Rajshahi",
    rating: 4.5,
    profile: "https://randomuser.me/api/portraits/men/41.jpg",
    message:
      "As a student, I always look for affordable food spots. This platform makes it super easy to find budget-friendly local food.",
  },
  {
    id: 6,
    name: "Sadia Rahman",
    role: "Weekend Foodie",
    location: "Barishal",
    rating: 5,
    profile: "https://randomuser.me/api/portraits/women/22.jpg",
    message:
      "I usually eat out on weekends, and this app has become my go-to guide. The community reviews feel genuine and helpful.",
  },
  {
    id: 7,
    name: "Arif Hossain",
    role: "Office Professional",
    location: "Gazipur",
    rating: 4,
    profile: "https://randomuser.me/api/portraits/men/58.jpg",
    message:
      "I like how clean and simple the interface is. Finding good lunch spots near my office has never been easier.",
  },
  {
    id: 8,
    name: "Mim Chowdhury",
    role: "Food Photography Enthusiast",
    location: "Cumilla",
    rating: 5,
    profile: "https://randomuser.me/api/portraits/women/12.jpg",
    message:
      "Sharing food photos and reviews here feels rewarding. It’s great to be part of a community that appreciates local flavors.",
  },
];

const safeImage = (e) => {
  const target = e.target;
  target.src = "https://placehold.co/100x100/E0E7FF/4338CA?text=Error";
};
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const checkScreenSize = () => setIsMobile(window.innerWidth < breakpoint);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);
  return isMobile;
};
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const isMobile = useIsMobile();
  const containerRadius = isMobile ? 130 : 200;
  const profileSize = isMobile ? 60 : 80;
  const containerSize = containerRadius * 2 + 100;
  const getRotation = React.useCallback(
    (index) => (index - activeIndex) * (360 / people.length),
    [activeIndex]
  );
  const next = () => setActiveIndex((i) => (i + 1) % people.length);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + people.length) % people.length);
  const handleProfileClick = React.useCallback(
    (index) => {
      if (index === activeIndex) return;
      setActiveIndex(index);
    },
    [activeIndex]
  );
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") prev();
      else if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  React.useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);
  return (
    <div
      className="flex flex-col items-center p-4 relative transition-colors duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          width: containerSize,
          height: containerSize,
        }}
      >
        {}
        <AnimatePresence mode="wait">
          <motion.div
            key={people[activeIndex].id}
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: -20,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="z-100 bg-base-100 backdrop-blur-lg shadow-xl rounded-xl p-3 md:p-4 w-full md:w-200 text-center "
          >
            <motion.img
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.1,
              }}
              src={people[activeIndex].profile}
              alt={people[activeIndex].name}
              onError={safeImage}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto -mt-10 md:-mt-12 border-4 border-base-200 object-cover shadow-md hidden"
            />
            <motion.div
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
                delay: 0.15,
              }}
            >
              <h2 className="mt-2 text-primary md:text-lg font-bold">
                {people[activeIndex].name}
              </h2>
              <div className="flex items-center justify-center text-xs text-neutral md:text-sm mt-1">
                <UserRoundPen size={12} className="mr-1" />
                <span className="truncate">{people[activeIndex].role}</span>
              </div>
              <div className="flex items-center justify-center text-xs gap-4 text-neutral mt-0.5">
                <div className="flex items-center justify-center">
                  <MapPinCheck size={12} className="mr-1" />
                  <span className="truncate">
                    {people[activeIndex].location}
                  </span>
                </div>{" "}
                |
                <div className="flex items-center justify-center">
                  <span>{people[activeIndex].rating}</span>
                  <Star size={12} className="ml-1 text-primary" />
                </div>
              </div>
              <div className="flex items-center justify-center text-xs text-neutral mt-0.5">
                <span className="">{people[activeIndex].message}</span>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.2,
              }}
              className="flex justify-center items-center mt-3 space-x-2"
            >
              <button
                onClick={prev}
                className="p-1.5 rounded-full bg-primary/20 hover:bg-primary transition-colors"
              >
                <ChevronLeft
                  size={16}
                  className="text-primary hover:text-primary-content"
                />
              </button>
              <button
                onClick={next}
                className="p-1.5 rounded-full bg-primary/20 hover:bg-primary transition-colors"
              >
                <ChevronRight
                  size={16}
                  className="text-primary hover:text-primary-content"
                />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {}
        {people.map((p, i) => {
          const rotation = getRotation(i);
          const isActive = i === activeIndex;
          return (
            <motion.div
              key={p.id}
              animate={{
                transform: `rotate(${rotation}deg) translateY(-${containerRadius}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: isActive ? 0 : Math.abs(i - activeIndex) * 0.05,
              }}
              style={{
                width: profileSize,
                height: profileSize,
                position: "absolute",
                top: `calc(50% - ${profileSize / 2}px)`,
                left: `calc(50% - ${profileSize / 2}px)`,
                zIndex: isActive ? 20 : 10,
              }}
            >
              {}
              <motion.div
                animate={{
                  rotate: -rotation,
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                }}
                className="w-full h-full"
              >
                <motion.img
                  src={p.profile}
                  alt={p.name}
                  onError={safeImage}
                  onClick={() => handleProfileClick(i)}
                  whileHover={{
                    scale: 1.15,
                    boxShadow:
                      "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`w-full h-full object-cover rounded-full cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "border-4 border-primary shadow-lg"
                      : "border-2 border-base-300 hover:border-primary"
                  }`}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {}
      <div className="flex justify-center mt-6 space-x-2">
        {people.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === activeIndex ? "bg-primary" : "bg-base-300"
            }`}
            whileHover={{
              scale: 1.3,
            }}
            whileTap={{
              scale: 0.9,
            }}
          />
        ))}
      </div>
    </div>
  );
}
