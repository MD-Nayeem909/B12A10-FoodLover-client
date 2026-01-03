import { Link, NavLink } from "react-router";
import Container from "../../Utility/Container";
import { Heart, LogIn, UserRoundPlus, Menu, X } from "lucide-react";
import { useTheme } from "../../Providers/ThemeProvider";
import { useAuth } from "../../Providers/AuthContext";
import Logo from "../logo/Logo";
import { useState } from "react";

const Navbar = () => {
  const { user, setUser, logoutUser, loading } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logoutUser();
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";
  };

  const NavItem = ({ to, icon, text, className = "", onClick }) => (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `
        relative flex items-center gap-2
        text-sm font-medium transition-colors
        after:absolute after:-bottom-0.5 after:left-0 after:h-0.5
        after:bg-secondary after:transition-all after:duration-300
        ${
          isActive
            ? "text-secondary lg:after:w-full"
            : "after:w-0 hover:text-secondary lg:hover:after:w-full"
        }
        ${className}
        `
        }
      >
        {icon && icon}
        {text}
      </NavLink>
    </li>
  );

  const navLinks = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/all-reviews",
      text: "All Reviews",
    },
    {
      to: "/my-reviews",
      text: "My Reviews",
    },
    {
      to: "/create-review",
      text: "Create Review",
    },
    {
      to: "/favorites",
      text: "Favorites",
      icon: <Heart size={18} className="text-accent" />,
    },
  ];

  const authLinks = [
    {
      to: "/auth/login",
      text: "Login",
      icon: <LogIn size={18} className="text-accent" />,
    },
    {
      to: "/auth/register",
      text: "Register",
      icon: <UserRoundPlus size={18} className="text-accent" />,
    },
  ];

  return (
    <div className="bg-base-100 shadow-sm">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-md transition-colors hover:bg-base-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <Logo />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-4">
              {navLinks.map((link) => (
                <NavItem key={link.to} {...link} />
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <div className="mr-4">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                  className="theme-controller"
                />

                {/* sun icon */}
                <svg
                  className="swap-off h-7 w-7 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on h-7 w-7 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            {!loading && user ? (
              <div className="flex items-center gap-5 dropdown-end">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} className=" m-1">
                    <Link
                      to="/profile"
                      className="tooltip tooltip-left"
                      data-tip={user?.displayName || user.username || "Profile"}
                    >
                      <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                          <img src={user.photoURL || user.photoUrl} />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <NavLink to="/my-reviews">My Reviews</NavLink>
                    </li>
                    <li>
                      <NavLink to="/create-review">Add Review</NavLink>
                    </li>
                    <li
                      className="hover:bg-red-100 hover:text-red-600"
                      onClick={handleLogout}
                    >
                      <a>LogOut</a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="md:flex items-center hidden font-semibold space-x-2">
                <NavLink
                  to="/auth/login"
                  className="btn btn-soft btn-secondary text-xs lg:text-sm font-medium transition-all duration-300 shadow-none ease-in-out overflow-hidden"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/auth/register"
                  className="btn btn-primary hover:scale-105 text-xs lg:text-sm font-medium transition-all duration-300 shadow-none ease-in-out overflow-hidden"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-base-300 py-4">
            <ul className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavItem
                  key={link.to}
                  {...link}
                  className="px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}

              {!user && (
                <>
                  <div className="divider my-2" />
                  {authLinks.map((link) => (
                    <NavItem
                      key={link.to}
                      {...link}
                      className="px-3 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    />
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
