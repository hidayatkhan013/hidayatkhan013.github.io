import React from "react";
import styled from "styled-components";

const ButtonActive = ({ children, className, disabled, id }) => {
  return (
    <Button id={id} className={className} disabled={disabled} type="submit">
      {children}
    </Button>
  );
};

const Button = styled.button`
  align-items: center;
  background: rgba(158, 192, 255, 0.08);
  border: 1px solid rgba(158, 192, 255, 0.22);
  border-radius: 8px;
  outline: none;
  color: var(--light-text);
  cursor: pointer;
  display: flex;
  font: 600 1.4rem/1 var(--font-sans);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: 20px auto 0;
  padding: 14px 28px;
  position: relative;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover,
  &:focus,
  &:active {
    transform: translateY(-2px);
    border-color: rgba(158, 192, 255, 0.48);
    background: rgba(158, 192, 255, 0.12);
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.24);
  }
`;

export default ButtonActive;
