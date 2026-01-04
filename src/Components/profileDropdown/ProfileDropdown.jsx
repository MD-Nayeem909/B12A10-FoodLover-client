import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";

const ProfileDropdown = ({ user, handleLogout }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Avatar Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative focus:outline-none"
        aria-label="Profile Menu"
      >
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
            <img
              src={user?.photoURL || user?.photoUrl}
              alt={user?.displayName || "Profile"}
            />
          </div>
        </div>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-3 w-52 origin-top-right rounded-xl bg-base-100 shadow-lg border border-base-200
        transition-all duration-200 ease-out z-10
        ${
          open
            ? "scale-100 opacity-100 visible"
            : "scale-95 opacity-0 invisible"
        }`}
      >
        <ul className="py-2 text-sm">
          <li>
            <NavLink
              to="/my-reviews"
              className="block px-4 py-2 hover:bg-primary/10 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              My Reviews
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/create-review"
              className="block px-4 py-2 hover:bg-primary/10 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Add Review
            </NavLink>
          </li>

          <li className="border-t border-base-300 mt-2 pt-2">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-500/10"
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
