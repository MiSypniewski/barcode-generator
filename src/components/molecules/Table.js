import React from "react";
import Name from "../atoms/Name";
import Serial from "../atoms/Serial";
import styled from "styled-components";

const StyledRow = styled("div")`
  display: grid;
  grid-template-columns: repeat(${({ number }) => number}, 1fr);
  grid-template-rows: repeat(auto - fill, 1fr);
  border-bottom: 1px solid black;
  text-align: center;
`;

const Table = ({ list, columns }) => (
  <>
    {list.map((items) => (
      <StyledRow number={columns}>
        <Name key={items.item} title={items.title} index={items.index} />
        {items.serials.map((item) => (
          <Serial key={item} serial={item} />
        ))}
      </StyledRow>
    ))}
  </>
);

export default Table;
