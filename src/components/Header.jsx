import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme == "dark") {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` ${
        isScrolled ? "bg-slate-50" : "bg-white"
      } flex flex-wrap justify-center fixed w-full gap-5 border border-transparent shadow py-5 px-[10%] z-30 md:justify-between md:gap-0 dark:bg-[#2b3743] dark:text-white`}
    >
      <h1 className=" self-center text-2xl font-bold">Where in the world ? 🌍</h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className=" font-semibold self-center flex justify-center gap-2 items-center"
      >
        {darkMode ? (
          <Sun size={30} strokeWidth={1.2} />
        ) : (
          <Moon size={30} strokeWidth={1.2} />
        )}
        <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
      </button>
    </header>
  );
}
