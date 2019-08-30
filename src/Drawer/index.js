// @flow
import * as React from "react";
import styled from "styled-components";

import Stack from "../Stack";
import Illustration from "../Illustration";
import Heading from "../Heading";
import Text from "../Text";
import Button from "../Button";
import Separator from "../Separator";
import TextLink from "../TextLink";
import NewWindow from "../icons/NewWindow";

const StyledDrawer = styled.aside`
  display: block;
  position: fixed;
  z-index: 700;
  width: 320px;
  height: 100%;
  background: white;
`;

const Drawer = ({ children }) => <StyledDrawer>{children}</StyledDrawer>;

export default Drawer;
