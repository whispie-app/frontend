import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.documentElement;
      const bottom = element.scrollHeight - element.clientHeight;
      const scrollPosition = window.scrollY;

      setShowFooter(scrollPosition > bottom - 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showFooter;
}
