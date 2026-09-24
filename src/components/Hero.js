import React, { useEffect } from "react";

import ButtonHoverLarge from "./ButtonHoverLarge";
import Section from "../components/Section";

import "./styles/Hero.css";

class TextoAnimado {
  constructor(id, objective) {
    this.text = document.getElementById(id);
    this.objective = document.getElementById(objective);
    this.letters = this.text.innerText.split("");

    this.text.innerText = "";

    this.letters.forEach((letra) => {
      let character = letra === " " ? "&nbsp;" : letra;

      this.text.innerHTML =
        this.text.innerHTML +
        `
                    <div>
                        <span>${character}</span>
                        <span class="second-line">${character}</span>
                    </div>
                `;
    });

    this.objective.addEventListener("mouseenter", () => {
      let count = 0;

      const interval = setInterval(() => {
        if (count < this.text.children.length) {
          this.text.children[count].classList.add("animated");
          count += 1;
        } else {
          clearInterval(interval);
        }
      }, 20);
    });

    this.objective.addEventListener("mouseleave", () => {
      let count = 0;

      const interval = setInterval(() => {
        if (count < this.text.children.length) {
          this.text.children[count].classList.remove("animated");
          count += 1;
        } else {
          clearInterval(interval);
        }
      }, 20);
    });
  }
}

export default function Hero() {
  useEffect(() => {
    new TextoAnimado("name", "hero--text");
  }, []);
  return (
    <Section>
      <div className="hero fadeInLeft delay10">
        <div id="hero--text">
          <h1 className="hero--title">Hi! My name is</h1>
          <div className="hero--presentation">
            <div id="name" className="hero--animated-name">
              Hidayat Ur Rehman
            </div>
            <p className="size1">Embedded Systems & C++ Engineer</p>
          </div>
          <p className="hero--info">
            I am an <span className="hero--info-career">Embedded Systems & C++ Software Engineer</span> specializing in Modern C++ (C++11/14/17/20), Linux and POSIX systems programming, low-level storage architectures, and resource-constrained embedded platforms.
          </p>
        </div>
        <div className="hero--buttons">
          <ButtonHoverLarge
            external={true}
            href="/Resume.pdf"
          >
            Resume
          </ButtonHoverLarge>
          <ButtonHoverLarge href="#contact">Contact</ButtonHoverLarge>
        </div>
      </div>
    </Section>
  );
}


