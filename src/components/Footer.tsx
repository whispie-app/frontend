import { FaGithub, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import "../components/styles/main.css";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Footer() {
  return (
    <motion.footer
      className="w-full bg-[#161616] border-t border-[#222222]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start py-8 px-6">
        {/* Branding & Contact */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-2xl font-semibold italic font-[Georgia] text-white mb-2">
            Whispie
          </span>
          <span className="text-sm text-gray-300">
            Your voice, your space.
            <br />
            Modern voice chat for creative people.
          </span>
          <span className="text-sm text-gray-300 mt-2">
            <a
              href="mailto:contact@whispie.com"
              className="underline hover:text-[#7b1926] transition-colors"
            >
              contact@whispie.com
            </a>
          </span>
        </motion.div>

        {/* Links */}
        <motion.div
          className="flex flex-col gap-2 items-center md:items-start"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-white font-semibold mb-2">Links</span>
          {["Terms of Service", "Privacy Policy", "About", "Help"].map(
            (link, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-300 hover:text-[#7b1926] text-sm transition-colors"
              >
                {link}
              </a>
            )
          )}
        </motion.div>

        {/* Social & Top */}
        <motion.div
          className="flex flex-col gap-4 items-center md:items-end"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex gap-4 mb-2">
            {[FaGithub, FaTwitter, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#7b1926] text-2xl transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-[#7b1926] hover:bg-[#530101] text-white rounded-xl text-sm shadow transition-colors"
            aria-label="Back to top"
          >
            <FaArrowUp /> Back to top
          </button>
          <span className="text-xs text-gray-300 mt-2">
            © {new Date().getFullYear()} Whispie
          </span>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
