import React from "react";
import styled from "styled-components";

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

const StyledTitle = styled.h2`
  margin-bottom: 20px;
  color: var(--special-text);
  font: 600 2.8rem/1.2 var(--font-sans);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;
