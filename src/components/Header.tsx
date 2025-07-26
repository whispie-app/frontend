import { FaUserCircle } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [fixedDownload, setFixedDownload] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Fix Download button on scroll
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 80) {
        setFixedDownload(true);
      } else {
        setFixedDownload(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-[#0d0a07] border-b border-[#d83018] shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-3 px-6">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-extrabold text-[#d83018] tracking-tight">
            Whispie
          </span>
        </div>
        <nav className="flex gap-15 items-center">
          <a
            href="#"
            className="text-[#fdfcce] text-base font-medium hover:text-[#d83018] transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#fdfcce] text-base font-medium hover:text-[#d83018] transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-[#fdfcce] text-base font-medium hover:text-[#d83018] transition-colors"
          >
            Help
          </a>
        </nav>
        {/* CTA Buttons */}
        <div className="flex gap-4 items-center relative" ref={dropdownRef}>
          <button
            className={`bg-[#d83018] hover:bg-[#f07848] text-white font-semibold rounded-full px-6 py-2 border-none shadow transition-colors
              ${fixedDownload ? "fixed top-6 z-50 animate-download-move" : ""}
            `}
            style={
              fixedDownload
                ? { right: "2rem", boxShadow: "0 4px 24px #d83018" }
                : {}
            }
          >
            <a href="" className="block w-full h-full">
              Download
            </a>
          </button>
          <button
            className="rounded-full p-0 border-none bg-transparent transition-colors hover:ring-2 hover:ring-[#d83018] relative"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Profile"
          >
            <FaUserCircle
              size={40}
              className="text-[#d83018] bg-transparent rounded-full"
            />
          </button>
          {open && (
            <div className="absolute right-0 top-14 mt-2 w-48 bg-[#1a1817] border border-[#d83018] rounded-xl shadow-lg z-50">
              <ul className="flex flex-col py-2">
                <li>
                  <a
                    href="#"
                    className="block px-6 py-2 text-[#fdfcce] hover:bg-[#d83018] hover:text-white transition-colors rounded-t-xl"
                  >
                    My Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-6 py-2 text-[#fdfcce] hover:bg-[#d83018] hover:text-white transition-colors"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-6 py-2 text-[#fdfcce] hover:bg-[#d83018] hover:text-white transition-colors"
                  >
                    Public Rooms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-6 py-2 text-[#fdfcce] hover:bg-[#d83018] hover:text-white transition-colors rounded-b-xl"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Animation keyframes for Download button */}
      <style>
        {`
          @keyframes download-move {
            from {
              right: 1rem;
              opacity: 0.7;
              transform: translateY(-10px);
            }
            to {
              right: 2rem;
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-download-move {
            animation: download-move 0.5s cubic-bezier(0.4,0,0.2,1);
          }
        `}
      </style>
    </header>
  );
}

export default Header;
