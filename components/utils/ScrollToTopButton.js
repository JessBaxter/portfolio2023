import Link from "next/link";
import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 50
    ) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      // Mobile view, the button stays where it is
      // Desktop view, the button makes way for social media icons in Footer
      className={`fixed ${
        isBottom ? "bottom-4 md:bottom-20" : "bottom-4"
      } right-4`}>
      {isVisible && (
        <Link href="#top" alt="Back to the top of the page">
          <button className="p-2 bg-primary/50 rounded-full text-white drop-shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        </Link>
      )}
    </div>
  );
}

export default ScrollToTopButton;
