import { FaGithub, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";
import "../components/styles/main.css";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Footer() {
  return (
    <footer className="w-full  pt-10 pb-6 px-4 bg-[#7b1926] ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Branding & Contact */}
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-semibold italic font-[Georgia] text-[#fdfcce] mb-2">
            Whispie
          </span>
          <span className="text-sm text-[#fdfcce]">
            Your voice, your space.
            <br />
            Modern voice chat for creative people.
          </span>
          <span className="text-sm text-[#fdfcce] mt-2">
            <a
              href="mailto:contact@whispie.com"
              className="underline hover:text-[#f07848] transition-colors"
            >
              contact@whispie.com
            </a>
          </span>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <span className="text-[#fdfcce] font-semibold mb-2">Links</span>
          <a
            href="#"
            className="text-[#fdfcce] hover:text-[#ff6e6e] text-sm transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-[#fdfcce] hover:text-[#f07848] text-sm transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-[#fdfcce] hover:text-[#f07848] text-sm transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-[#fdfcce] hover:text-[#f07848] text-sm transition-colors"
          >
            Help
          </a>
        </div>
        {/* Social & Top */}
        <div className="flex flex-col gap-4 items-center md:items-end">
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fdfcce] hover:text-[#f07848] text-2xl transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fdfcce] hover:text-[#f07848] text-2xl transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fdfcce] hover:text-[#f07848] text-2xl transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-[#f07848] hover:bg-[#7b1926] text-white rounded-xl text-sm shadow transition-colors"
            aria-label="Back to top"
          >
            <FaArrowUp /> Back to top
          </button>
          <span className="text-xs text-[#fdfcce] mt-2">
            © {new Date().getFullYear()} Whispie
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
