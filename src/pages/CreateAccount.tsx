import { useState } from "react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/styles/main.css";

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
    <div>
      <Header />
      <div className="flex items-center justify-center pt-5 pb-10 bg-[#161616] min-h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <div className="bg-gradient-to-b from-[#161616] to-[#111111] w-130 rounded-4xl px-9 py-10 flex flex-col items-center border border-[#222222]">
            <div className="p-6 space-y-4 w-full">
              <h1 className="text-3xl font-bold items-center align-middle secFont tracking-tight text-[#7b1926]">
                Create account
              </h1>

              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}

              <form
                className="space-y-4 text-white md:space-y-6"
                onSubmit={handleSubmit}
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

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      checked={form.terms}
                      onChange={handleChange}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ml-3 text-sm font-light text-gray-400"
                  >
                    I accept the{" "}
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={isDisabled}
                  fullWidth
                >
                  Create an account
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
                    className="w-4 h-4 me-2"
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

                <p className="text-sm font-light text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateAccount;
