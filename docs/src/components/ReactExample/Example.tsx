import React from "react";
import styled, { css } from "styled-components";

import Editor from "./components/Editor";
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
    max-width: ${width}px;
    width: 100%;
  `}
`;

interface Props extends InitialProps {
  code: string;
  origin: string;
  fullPageExampleId?: string;
  isFullPage?: boolean;
  onChangeCode: (code: string) => void;
  example: string;
}

const Example = ({
  code,
  origin,
  exampleId,
  fullPageExampleId,
  minHeight,
  maxHeight,
  background,
  isFullPage,
  onChangeCode,
  example,
}: Props) => {
  const [isEditorOpened, setOpenEditor] = React.useState(false);
  const [width, setPreviewWidth] = React.useState(0);
  const handleChangeRulerSize = React.useCallback(size => setPreviewWidth(size), []);

  return (
    <StyledWrapper isFullPage={isFullPage}>
      <ViewportsRuler onChangeSize={handleChangeRulerSize} />
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
        onOpenEditor={() => setOpenEditor(prev => !prev)}
        code={code}
        origin={origin}
      />
      {isEditorOpened && <Editor isFullPage={isFullPage} onChange={onChangeCode} code={example} />}
    </StyledWrapper>
  );
};

export default Example;
