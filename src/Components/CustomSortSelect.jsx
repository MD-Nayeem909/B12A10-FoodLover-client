import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const SORT_OPTIONS = [
  { value: "recent", label: "Most Recent" },
  { value: "rating", label: "Highest Rating" },
  { value: "oldest", label: "Oldest First" },
];

const CustomSortSelect = ({ value, onChange }) => {
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

  const selected = SORT_OPTIONS.find((opt) => opt.value === value);

  return (
    <div ref={ref} className="relative w-max min-w-[180px]">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full px-4 py-2
          bg-base-100 border border-base-300
          rounded-md
          flex items-center justify-between gap-2
          focus:outline-none focus:ring-2 focus:ring-primary/40
        "
      >
        <span className="text-sm">{selected ? selected.label : "Sort By"}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          className="
            absolute z-20 mt-2 w-full
            bg-base-100 border border-base-300
            rounded-md shadow-lg
            overflow-hidden
          "
        >
          {SORT_OPTIONS.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`
                px-4 py-2 text-sm cursor-pointer
                hover:bg-primary/10 transition
                ${value === opt.value ? "bg-primary/10 font-medium" : ""}
              `}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSortSelect;
