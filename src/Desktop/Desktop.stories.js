// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import Desktop from "./index";

const Component = styled.div`
  height: 150px;
  width: 150px;
  background: red;
  color: #fff;
  display: flex;
  align-items: center;
  direction: column;
  justify-content: center;
`;

storiesOf("Desktop", module).add(
  "Default",
  () => {
    return (
      <Desktop>
        <Component>Desktop</Component>
      </Desktop>
    );
  },
  {
    info: "Visible only on mq.desktop and mq.largeDesktop.",
  },
);
