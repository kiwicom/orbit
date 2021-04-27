// @flow
import * as React from "react";
import styled from "styled-components";

import HorizontalScroll from "./index";

export default {
  title: "HorizontalScroll",
};

const CustomDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  width: 150px;
  background: grey;
  height: 50px;
`;

export const Playground = (): React.Node => {
  return (
    <HorizontalScroll>
      {Array(...Array(10)).map((_, key) => (
        // eslint-disable-next-line
        <CustomDiv key={key}>{key}</CustomDiv>
      ))}
    </HorizontalScroll>
  );
};
