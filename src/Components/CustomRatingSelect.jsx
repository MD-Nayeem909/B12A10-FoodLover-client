import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const RATINGS = [
  { value: 5, label: "5 Stars – Excellent" },
  { value: 4.5, label: "4.5 Stars" },
  { value: 4, label: "4 Stars – Very Good" },
  { value: 3.5, label: "3.5 Stars" },
  { value: 3, label: "3 Stars – Good" },
  { value: 2.5, label: "2.5 Stars" },
  { value: 2, label: "2 Stars – Fair" },
  { value: 1.5, label: "1.5 Stars" },
  { value: 1, label: "1 Star – Poor" },
];

const CustomRatingSelect = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = RATINGS.find((r) => r.value === value);

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full px-4 py-3
          bg-base-200 border border-base-300
          rounded-lg
          flex items-center justify-between
          focus:outline-none focus:ring-2 focus:ring-primary/40
        "
      >
        <span className="text-sm">
          {selected ? selected.label : "Select rating"}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          className="
          absolute z-20 mt-2 w-full
          bg-base-100 border border-base-300
          rounded-lg shadow-lg
          max-h-60 overflow-y-auto
        "
        >
          {RATINGS.map((rating) => (
            <li
              key={rating.value}
              onClick={() => {
                onChange(rating.value);
                setOpen(false);
              }}
              className="
                px-4 py-3 text-sm
                cursor-pointer
                hover:bg-primary/10
                transition
              "
            >
              {rating.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomRatingSelect;
