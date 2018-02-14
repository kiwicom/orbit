/* @flow */
import * as React from "react";
import styled from "styled-components";

const Container = styled.button`
  background-color: dodgerblue;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px;
  font-size: 16px;
`;

type Props = {};

const Button = (props: Props) => <Container {...props}>Click</Container>;

export default Button;
