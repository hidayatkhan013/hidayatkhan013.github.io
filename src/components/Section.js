import React from "react";

import styled from "styled-components";

export default function Section({ children, id }) {
  return <StyledSection id={id}>{children}</StyledSection>;
}

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 1300px;
  padding: 10px 20px 20px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 10px 100px 80px;
  }
`;
