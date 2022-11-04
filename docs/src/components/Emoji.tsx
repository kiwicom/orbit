import React from "react";
import styled from "styled-components";

// fixing the macOS Chrome bug with emoji spacing on non-retina screens
// https://bugs.chromium.org/p/chromium/issues/detail?id=596223&q=596223&can=2

interface Props {
  children: React.ReactNode;
}

// https://stackoverflow.com/a/44145771/1247274
// https://stackoverflow.com/a/31578187/1247274

const StyledContainer = styled.span`
  @media not screen and (-webkit-min-device-pixel-ratio: 2),
    not screen and (-o-min-device-pixel-ratio: 2/1),
    not screen and (min-resolution: 192dpi),
    not screen and (min-resolution: 2dppx) {
    margin-right: 5px;
  }
`;

export default function Emoji({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>;
}
