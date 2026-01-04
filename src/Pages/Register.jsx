import { useState } from "react";
import Container from "../Utility/Container";
import { NavLink, useNavigate, useLocation } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../Providers/AuthContext";
import api from "../Utility/axios";
import toast from "react-hot-toast";

const Register = () => {
  const { googleSignIn, setLoading, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    username: "",
    photoURL: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [show, setShow] = useState({
    password: false,
    confirm: false,
  });

  const currentLocation = location.state?.from?.pathname || "/";

  // Generic input handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      await api.post("/auth/signup", form);
      const res = await api.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      const token = res.data.token;
      if (token) {
        localStorage.setItem("token", token);
        setUser(res.data.user);
      } else toast.error("No token received");

      navigate(currentLocation, { replace: true });
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Container>
      <div className="card bg-base-100 border border-base-300 w-full max-w-md shadow-sm p-4 mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold mt-6 mb-3">Register Now!</h2>
          <span className="text-neutral">
            Already have an account?{" "}
            <NavLink to="/auth/login" className="font-semibold hover:text-primary">
              Login Now
            </NavLink>
          </span>
        </div>

        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <div>
              <label className="label mb-2">Name</label>
              <input
                type="text"
                name="username"
                className="input w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 border-base-300 bg-base-200"
                placeholder="Your Name"
                onChange={handleChange}
                value={form.username}
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label mb-2">Image-URL</label>
              <input
                type="text"
                name="photoURL"
                className="input w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 border-base-300 bg-base-200"
                placeholder="Image URL..."
                onChange={handleChange}
                value={form.photoURL}
              />
            </div>

            {/* Email */}
            <div>
              <label className="label mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 border-base-300 bg-base-200"
                placeholder="Enter your email"
                onChange={handleChange}
                value={form.email}
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label mb-2">Password</label>
              <input
                type={show.password ? "text" : "password"}
                name="password"
                className="input w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 border-base-300 bg-base-200"
                placeholder="Enter your password"
                onChange={handleChange}
                value={form.password}
                required
              />
              <button
                type="button"
                className="absolute text-neutral/80 hover:text-neutral z-1 right-3 top-9"
                onClick={() => setShow({ ...show, password: !show.password })}
              >
                {show.password ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="label mb-2">Confirm Password</label>
              <input
                type={show.confirm ? "text" : "password"}
                name="confirmPassword"
                className="input w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 border-base-300 bg-base-200"
                placeholder="Confirm your password"
                onChange={handleChange}
                value={form.confirmPassword}
                required
              />
              <button
                type="button"
                className="absolute text-neutral/80 hover:text-neutral z-1 right-3 top-9"
                onClick={() => setShow({ ...show, confirm: !show.confirm })}
              >
                {show.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button className="btn btn-primary mt-4">Register</button>
          </fieldset>

          <div className="flex items-center gap-2 mt-4">
            <span className="w-[45%] h-px bg-base-300"></span>
            <span className="font-semibold text-neutral">OR</span>
            <span className="w-[45%] h-px bg-base-300"></span>
          </div>

          <button onClick={handleGoogleSignIn} className="btn mt-4">
            <FcGoogle size={25} /> Sign In With Google
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Register;
