import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className={
        theme === "light"
          ? "flex items-center justify-center text-white w-10 h-10 rounded-full focus:outline-none focus:shadow-outline"
          : "flex items-center justify-center text-black w-10 h-10 rounded-full focus:outline-none focus:shadow-outline"
      }
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <div>🌗</div>
    </button>
  );
}
