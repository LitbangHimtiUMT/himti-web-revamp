import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();

  // Memoize the hash value to prevent unnecessary re-renders
  const hash = useMemo(() => location.hash, [location.hash]);

  useEffect(() => {
    const scrollToHash = () => {
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Use a timeout to ensure the element is rendered before scrolling
    const timeoutId = setTimeout(scrollToHash, 100);

    return () => clearTimeout(timeoutId);
  }, [hash]); // This effect runs every time the hash changes

  return null; // This component does not render anything
};

export default ScrollToHashElement;