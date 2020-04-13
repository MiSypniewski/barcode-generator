import React from "react";
import styled from "styled-components";

const StyledSerial = styled.div`
  font-family: "Libre Barcode 39 Text";
  font-size: 29px;
  padding: 9px 0px;
`;

const Serial = ({ serial }) => {
  const tmpSerial = serial.replace("ZONKZONKZONK", " ");
  return <StyledSerial>{`*${tmpSerial}*`}</StyledSerial>;
};

export default Serial;
