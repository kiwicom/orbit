// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import Button from "../../Button";
import PageButtonLink from "./PageButtonLink";
import type { Props } from "./Pages";

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
  theme: defaultTheme,
};

const ActiveButton = ({ children }: { children: React.Node }) => (
  <Button type="secondary" component={props => <StyledButton {...props} type={undefined} />}>
    {children}
  </Button>
);

const Pages = ({ pageCount, selectedPage, onPageChange, enlargement = 1 }: Props): React$Node =>
  Array(...Array(pageCount)).map((_, index) => {
    const key = index + enlargement;
    return selectedPage === key ? (
      <ActiveButton type="secondary">{key}</ActiveButton>
    ) : (
      <PageButtonLink onPageChange={onPageChange}>{key}</PageButtonLink>
    );
  });

export default Pages;
