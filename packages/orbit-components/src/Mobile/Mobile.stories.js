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

storiesOf("Mobile", module).add(
  "Default",
  () => {
    return (
      <Desktop>
        <Component>Mobile</Component>
      </Desktop>
    );
  },
  {
    info: "Visible only on mq.smallMobile, mq.mediumMobile, mq.largeMobile, mq.tablet",
  },
);
