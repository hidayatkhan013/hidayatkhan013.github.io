import React from "react";
import styled from "styled-components";

const ButtonHover = ({ children, href, external }) => {
  return (
    <Button as="a" href={href} target={external ? "_blank" : null} rel={external ? "noopener noreferrer" : null}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  align-items: center;
  background: rgba(158, 192, 255, 0.08);
  border: 1px solid rgba(158, 192, 255, 0.22);
  border-radius: 10px;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.18);
  color: var(--light-text);
  cursor: pointer;
  display: inline-flex;
  font: 600 1.5rem/1 var(--font-sans);
  letter-spacing: 0.08em;
  margin: 0 auto;
  padding: 15px 24px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  width: fit-content;

  &:hover,
  &:focus,
  &:active {
    transform: translateY(-2px);
    border-color: rgba(158, 192, 255, 0.48);
    background: rgba(158, 192, 255, 0.12);
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.24);
  }
`;

export default ButtonHover;
