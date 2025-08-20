import { useState } from "react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/styles/main.css";
import { motion } from "framer-motion";

function CreateAccount() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!form.terms) {
      setError("You must accept the Terms and Conditions.");
      return;
    }

    console.log("Form data:", form);
    // Aqui vai a lógica de integração com backend/API
  };

  const isDisabled =
    !form.email || !form.password || !form.confirmPassword || !form.terms;

  return (
    <div className="flex flex-col bg-[#161616]">
      <Header />

      <motion.div
        className="flex flex-1 items-center min-h-screen justify-center py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] w-full max-w-md rounded-3xl px-10 py-12 flex flex-col items-center border border-[#2a2a2a] shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-bold text-center secFont tracking-tight text-[#7b1926] mb-6">
            Create account
          </h1>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-red-500 text-sm font-medium mb-4 text-center"
            >
              {error}
            </motion.p>
          )}

          <motion.form
            className="space-y-6 w-full text-white"
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Input
                label="Your email"
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="name@company.com"
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Input
                label="Password"
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="••••••••"
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Input
                label="Confirm password"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="••••••••"
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={form.terms}
                    onChange={handleChange}
                    className="w-4 h-4 border-0 rounded bg-gray-50 focus:ring-2 focus:ring-[#7b1926]"
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="ml-3 text-sm font-light text-gray-400"
                >
                  I accept the{" "}
                  <a
                    href="#"
                    className="font-medium text-[#7b1926] hover:text-[#530101] transition-colors"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Button
                type="submit"
                variant="primary"
                disabled={isDisabled}
                fullWidth
              >
                Create an account
              </Button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
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
            </motion.div>

            <motion.p
              className="text-sm font-light text-gray-400 text-center"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-[#7b1926] hover:text-[#530101] transition-colors"
              >
                Login here
              </a>
            </motion.p>
          </motion.form>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}

export default CreateAccount;
