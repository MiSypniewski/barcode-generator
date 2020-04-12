import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import StyledInput from "../atoms/Input";

const StyledNumberInput = styled(StyledInput)`
  width: 60px;
  margin-left: 10px;
`;

const Wrapper = styled.div`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  border-bottom: 2px solid #3273dc;
`;

const StyledLabel = styled.label`
  margin-left: 40px;
`;

const Inputer = ({ changeFn, hideFn, addFn, exceptions, text, title, columns, ...props }) => (
  <Wrapper disabled={props.off ? true : false}>
    <StyledInput placeholder="Device name" name="title" onChange={changeFn} value={title} />
    <StyledInput placeholder="Serial numbers" name="text" type="text" onChange={changeFn} value={text} />
    <StyledInput
      placeholder="Do not divide after (min 2 chars)"
      name="exceptions"
      onChange={changeFn}
      value={exceptions}
    />
    <StyledLabel>
      Columns:
      <StyledNumberInput type="number" min="2" max="9" name="columns" onChange={changeFn} value={columns} />
    </StyledLabel>
    <Button fn={addFn}>Add</Button>
    <Button fn={hideFn}>Hide bar and print!</Button>
  </Wrapper>
);

export default Inputer;
