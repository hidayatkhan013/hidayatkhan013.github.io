import React, { useEffect, useRef } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "./styles/Animations.css";
import "./styles/Home.css";

export default function Home() {
  const main = useRef(null);

  useEffect(() => {
    const scrollContainer = main.current;
    if (!scrollContainer) return;

    const revealEls = scrollContainer.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: scrollContainer, threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollContainer = main.current;
    if (!scrollContainer) return;

    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el && scrollContainer) {
          const offset = el.offsetTop - 96;
          scrollContainer.scrollTo({ top: offset, behavior: "smooth" });
          el.focus();
        }
      }, 0);
    }
  }, []);

  return (
    <main ref={main} id="main">
      <Header main={main} />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Footer/>
    </main>
  );
}
