import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./styles/Header.css";

const navItems = [
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ main }) {
  const hamburgerIcon = useRef(null);
  const [header, setHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    closeMenu();

    const main = document.getElementById("main");
    const target = href ? document.querySelector(href) : null;

    if (main && target) {
      const offset = target.getBoundingClientRect().top + main.scrollTop - 96;
      main.scrollTo({ top: offset, behavior: "smooth" });
      return;
    }

    if (main) {
      main.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const elem = main && main.current;
    if (!elem) return;

    const changeHeader = () => {
      setHeader(elem.scrollTop > 0);
    };

    elem.addEventListener("scroll", changeHeader);
    return () => elem.removeEventListener("scroll", changeHeader);
  }, [main]);

  return (
    <header className={header ? "header active" : "header"}>
      <div className="header__container">
        <Link className="header__logo fadeInDown" to="/" onClick={scrollToTop} aria-label="Home">
          <span className="header__mark">H</span>
        </Link>

        <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
          {navItems.map(({ label, href }) => (
            <a key={label} href={href} onClick={(event) => handleNavClick(event, href)}>
              {label.toUpperCase()}
            </a>
          ))}
        </nav>

        <button
          type="button"
          ref={hamburgerIcon}
          onClick={toggleMenu}
          className={`hamburger-icon fadeInDown delay2 ${menuOpen ? "active" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

const scrollToTop = () => {
  const main = document.getElementById("main");
  if (main) {
    main.scrollTo(0, 0);
  }
};
