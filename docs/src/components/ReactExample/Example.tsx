import React from "react";
import styled, { css } from "styled-components";

import Editor from "./Editor";
import Frame from "./components/Frame";
import Board from "./components/Board";
import ViewportsRuler from "./components/ViewportsRuler";

import { Props as InitialProps } from ".";

const StyledWrapper = styled.div<{ isFullPage?: boolean }>`
  ${({ theme, isFullPage }) => css`
    display: grid;
    min-height: ${isFullPage && `100%`};
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    box-shadow: ${theme.orbit.boxShadowRaisedSubtle};
    border-radius: 12px;
  `};
`;

const StyledWrapperFrame = styled.div<{ width: number }>`
  ${({ width }) => css`
    margin: 0 auto;
    width: ${width}px;
  `}
`;

interface Props extends InitialProps {
  code: string;
  origin: string;
  isEditorOpened: boolean;
  fullPageExampleId?: string;
  isFullPage?: boolean;
  onChangeCode: (code: string) => void;
  onChangeSize: (width: number) => void;
  onOpenEditor: () => void;
  example: string;
  width: number;
}

const Example = ({
  code,
  origin,
  exampleId,
  fullPageExampleId,
  minHeight,
  maxHeight,
  background,
  isEditorOpened,
  isFullPage,
  onChangeCode,
  onChangeSize,
  onOpenEditor,
  example,
  width,
}: Props) => {
  return (
    <StyledWrapper isFullPage={isFullPage}>
      <ViewportsRuler onChangeSize={onChangeSize} />
      <StyledWrapperFrame width={width}>
        <Frame
          origin={origin}
          pageId={exampleId}
          exampleId={exampleId}
          minHeight={minHeight}
          maxHeight={maxHeight}
          background={background}
        />
      </StyledWrapperFrame>
      <Board
        exampleId={fullPageExampleId}
        isEditorOpened={isEditorOpened}
        isFullPage={isFullPage}
        onOpenEditor={onOpenEditor}
        code={code}
        origin={origin}
      />
      {isEditorOpened && <Editor isFullPage={isFullPage} onChange={onChangeCode} code={example} />}
    </StyledWrapper>
  );
};

export default Example;
