import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  min-width: 50px;
  height: 24px;
  cursor: pointer;
  margin: 10px;
  padding: 0 10px;
  color: #fff;
  border-color: transparent;
  background-color: #3273dc;
  border-radius: 4px;
  font-size: 1rem;
  height: 2.5em;
  line-height: 1.5;
  padding-left: 1em;
  padding-right: 1em;
`;

const Button = ({ children, fn }) => <StyledButton onClick={fn}>{children}</StyledButton>;

export default Button;
