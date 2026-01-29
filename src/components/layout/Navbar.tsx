import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true); // Track visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Auto-Hide Logic
      // If scrolling DOWN and past the top area -> Hide
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        // If scrolling UP -> Show
        setVisible(true);
      }
      setLastScrollY(currentScrollY);

      // 2. Background Transparency Logic
      // If moved from top -> Make background translucent
      if (currentScrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, [lastScrollY]); // Add lastScrollY dependency

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 transition-all duration-500 transform ${
        // Hiding Animation: Slide up if not visible
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        // Background Logic: Transparent at top, Glassmorphism when scrolled
        scrolled
          ? "bg-[#050505]/70 backdrop-blur-md border-b border-[#d2ff00]/10 shadow-lg" // Translucent + Blur
          : "bg-transparent" // Fully Transparent
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <img
              src={logo}
              alt="logo"
              className="h-9 w-9 object-contain drop-shadow-[0_0_15px_rgba(210,255,0,0.8)] group-hover:drop-shadow-[0_0_25px_rgba(210,255,0,1)] transition-all duration-300"
            />
            <div className="absolute inset-0 bg-[#d2ff00] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          <p className="flex cursor-pointer text-[18px] font-bold text-white tracking-wider relative group-hover:text-[#d2ff00] transition-colors duration-300">
            {config.html.title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d2ff00] to-[#ff0055] group-hover:w-full transition-all duration-300"></span>
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li key={nav.id} className="relative group">
              <a
                href={`#${nav.id}`}
                className={`${
                  active === nav.id
                    ? "text-[#d2ff00] drop-shadow-[0_0_10px_rgba(210,255,0,0.8)]"
                    : "text-gray-300"
                } cursor-pointer text-[18px] font-medium hover:text-[#d2ff00] transition-all duration-300 relative block uppercase tracking-widest text-sm`}
              >
                {nav.title}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#d2ff00] via-[#ff0055] to-[#00f3ff] transition-all duration-300 ${
                    active === nav.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="relative h-10 w-10 flex items-center justify-center rounded-lg border border-[#d2ff00]/30 bg-[#0a0118]/80 backdrop-blur-sm hover:border-[#d2ff00] hover:shadow-[0_0_20px_rgba(210,255,0,0.3)] transition-all duration-300"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="h-[20px] w-[20px] object-contain"
            />
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute right-0 top-20 z-10 mx-4 my-2 min-w-[200px] rounded-2xl bg-[#0a0118]/95 backdrop-blur-xl border border-[#d2ff00]/30 p-6 shadow-[0_20px_60px_-15px_rgba(210,255,0,0.3)] animate-in slide-in-from-top-5 duration-300`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="w-full"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a
                    href={`#${nav.id}`}
                    className={`font-poppins cursor-pointer text-[16px] font-medium uppercase tracking-widest block py-2 px-3 rounded-lg transition-all duration-300 ${
                      active === nav.id
                        ? "text-[#d2ff00] bg-[#d2ff00]/10 shadow-[0_0_15px_rgba(210,255,0,0.2)]"
                        : "text-gray-300 hover:text-[#d2ff00] hover:bg-[#d2ff00]/5"
                    }`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;