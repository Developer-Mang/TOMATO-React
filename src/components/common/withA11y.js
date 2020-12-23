import React from "react";
import styled from "styled-components";

const A11y = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0, 0);
  clip-path: polygon(0, 0);
  overflow: hidden;
`;

export default withA11y = ({ children }) => () => {
  return <A11y>{children}</A11y>;
};
