// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";
import type { Props } from "./Pages";
import Button from "../../Button";
import PageButtonLink from "./PageButtonLink";

const StyledButton = styled.div`
  &:hover,
  &:active,
  &:focus {
    background: ${({ theme }) => theme.orbit.backgroundButtonSecondary};
    color: ${({ theme }) => theme.orbit.colorTextButtonSecondary};
    transform: none;
    cursor: default;
  }
`;

StyledButton.defaultProps = {
  theme: defaultTokens,
};

const ActiveButton = ({ children }) => (
  <Button type="secondary" component={props => <StyledButton {...props} type={undefined} />}>
    {children}
  </Button>
);

const Pages = ({ pageCount, selectedPage, onPageChange, enlargement = 1 }: Props) => {
  const children: React.Node = Array(...Array(pageCount)).map((_, index) => {
    const key = index + enlargement;
    return selectedPage === key ? (
      <ActiveButton type="secondary">{key}</ActiveButton>
    ) : (
      <PageButtonLink onPageChange={onPageChange}>{key}</PageButtonLink>
    );
  });
  return children;
};

export default Pages;
