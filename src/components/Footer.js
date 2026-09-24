import React from "react";
import styled from "styled-components";

import Twitter from "../assets/svg/Twitter.svg";
import Github from "../assets/svg/Github.svg";
import Linkedin from "../assets/svg/Linkedin.svg";

export default function Footer() {
  return (
    <FooterContainer>
      <Social>
        <a href="https://github.com/hidayatkhan013" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/hidayatkhan013/" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="Linkedin" />
        </a>
        <a href="https://www.hackerrank.com/hidayatkhan013" target="_blank" rel="noopener noreferrer">
          <img src={Twitter} alt="Hackerrank" />
        </a>
      </Social>
      <p>
        <span>© Hidayat Ur Rehman {new Date().getFullYear()}</span>
        <br />
        <br />
        <span>
          Built with a systems-focused engineering mindset.
        </span>
      </p>
    </FooterContainer>
  );
}


const FooterContainer = styled.footer`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  width: 100%;

  p {
    text-align: center;
    font: 400 1.4rem/1.7 var(--font-sans);
    color: var(--text);
  }

  span {
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    padding: 20px 100px 80px;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  max-width: 180px;
  width: 100%;

  a {
    text-decoration: none;
    background: rgba(158, 192, 255, 0.06);
    border: 1px solid rgba(158, 192, 255, 0.12);
    border-radius: 50%;
    width: 42px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    img {
      width: 18px;
      opacity: 0.8;
      transition: all 0.2s ease-in-out;
      filter: brightness(1.15);
    }

    &:hover img,
    &:focus img,
    &:active img {
      opacity: 1;
      transform: scale(1.08);
    }
  }
`;
