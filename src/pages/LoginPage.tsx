import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/styles/main.css";

interface LoginForm {
  email: string;
  password: string;
}

function LoginPage() {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      // TODO: Implement API integration
      console.log("Form submitted:", form);
    } catch (err) {
      setError("Failed to login. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#161616]">
      <Header />
      <motion.div
        className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-b from-[#161616] to-[#111111] max-w-md w-full rounded-2xl px-8 py-10 border border-[#222222]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-center secFont text-[#7b1926] mb-8">
              Sign In
            </h2>

            {error && (
              <div className="mb-4 p-3 text-sm text-red-500 bg-red-100/10 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                placeholder="Your Email"
              />

              <div>
                <div>
                  <div>
                    <Link
                      to="/forgot-password"
                      className="text-sm font-semibold flex justify-between text-[#7b1926] hover:text-[#530101]"
                    >
                      <label htmlFor="" className="text-gray-300">
                        Password
                      </label>
                      Forgot password?
                    </Link>
                  </div>
                  <div className=" items-center justify-between mb-2">
                    <Input
                      type="password"
                      label=""
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      required
                      placeholder="Your password"
                    />
                  </div>
                </div>
                <p className="mt-2 text-xs text-[#ffffff28] text-center">
                  Use at least 8 characters, one uppercase, one lowercase and
                  one number.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Button type="submit" variant="primary" fullWidth>
                  Login
                </Button>

                <Button
                  type="button"
                  variant="secondary"
                  fullWidth
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/login/oauth/authorize")
                  }
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sign in with Github
                </Button>
              </div>

              <p className="text-sm text-gray-400 text-center">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-[#7b1926] hover:text-[#530101]"
                >
                  Register here
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default LoginPage;
