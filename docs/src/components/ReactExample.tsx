import React from "react";
import styled from "styled-components";

interface Props {
  exampleId: string;
  maxHeight?: number;
}

const StyledIframe = styled.iframe<Omit<Props, "exampleId">>`
  ${({ theme, maxHeight }) => `
    box-shadow: ${theme.orbit.boxShadowRaised};
    height: 100%;
    max-height: ${maxHeight};
    width: 100%;
    border-radius: ${theme.orbit.borderRadiusLarge};
  `}
`;

const ReactExample = ({ exampleId, maxHeight = 300 }: Props) => {
  return (
    <StyledIframe
      maxHeight={maxHeight}
      src={`${window.location.origin}/examples/${exampleId.toLowerCase()}`}
    />
  );
};

export default ReactExample;
