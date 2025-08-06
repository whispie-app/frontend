import Header from "../components/Header";
import Footer from "../components/Footer";

function LoginPage() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-200 bg-[#161616]">
        <div className="bg-gradient-to-b from-[#161616] to-[#111111] max-w-3xl rounded-4xl px-8  py-10 flex flex-col items-center border-1  border-[#222222]">
          <h2 className="text-5xl font-semibold italic font-[Georgia] text-[#7b1926] mb-6 text-center">
            Sign In
          </h2>
          <form className="w-100">
            <div className="mb-8 mt-8 ">
              <div className="mb-2">
                <label htmlFor="" className="font-semibold text-gray-500">
                  Email
                </label>
              </div>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-[#0d0a0783] placeholder:text-gray-500 text-slate-600 text-sm rounded-xl transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                required
                placeholder="Your Email"
              />
            </div>
            <div className="mb-8 mt-8 ">
              <div className="text-sm flex justify-between mb-2">
                <label
                  htmlFor="password"
                  className="font-semibold text-gray-500"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                className="w-full p-3 bg-[#0d0a0783] placeholder:text-gray-500 text-slate-600 text-sm rounded-xl transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Your password"
              />
              <div className="flex align-middle justify-center">
                <p className="flex items-start mt-2 text-xs text-[#ffffff28]">
                  <span className="w-60 text-center ">
                    Use at least 8 characters, one uppercase, one lowercase and
                    one number.
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <button
                type="submit"
                className="text-white w-full bg-[#7b1926] focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Login
              </button>
              <button
                type="button"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Sign in with Github
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
