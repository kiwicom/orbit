import React from "react";
import styled, { css } from "styled-components";

import Editor from "./components/Editor";
import Frame from "./components/Frame";
import Board from "./components/Board";
import Playground from "./components/Playground";
import ViewportsRuler from "./components/ViewportsRuler";
import { transform } from "./helpers";

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

export interface Knob {
  defaultValue: string;
  name: string;
  type: string;
  options?: string[];
}

export interface ExampleKnob {
  component: string;
  knobs: Knob[];
}

interface Props extends InitialProps {
  code: string;
  example: string;
  fullPageExampleId?: string;
  isFullPage?: boolean;
  exampleKnobs: ExampleKnob[];
  onChangeCode: (code: string) => void;
  origin: string;
}

const Example = ({
  code,
  origin,
  exampleId,
  exampleKnobs,
  fullPageExampleId,
  minHeight,
  maxHeight,
  background,
  isFullPage,
  onChangeCode,
  example,
}: Props) => {
  const [isEditorOpened, setOpenEditor] = React.useState(false);
  const [isPlaygroundOpened, setPlaygroundOpened] = React.useState(false);
  const [width, setPreviewWidth] = React.useState(0);
  const handleChangeRulerSize = React.useCallback(size => setPreviewWidth(size), []);

  const handleKnobChange = React.useCallback(
    knob => {
      onChangeCode(transform(example, knob));
    },
    [example, onChangeCode],
  );

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
        isPlaygroundOpened={isPlaygroundOpened}
        isFullPage={isFullPage}
        onOpenEditor={() => {
          setOpenEditor(prev => !prev);
          setPlaygroundOpened(false);
        }}
        onOpenPlayground={() => {
          setOpenEditor(false);
          setPlaygroundOpened(prev => !prev);
        }}
        knobs={!!exampleKnobs}
        code={code}
        origin={origin}
      />
      {isEditorOpened && <Editor isFullPage={isFullPage} onChange={onChangeCode} code={example} />}
      {isPlaygroundOpened && exampleKnobs && exampleKnobs.length > 0 && (
        <Playground onChange={handleKnobChange} exampleKnobs={exampleKnobs} />
      )}
    </StyledWrapper>
  );
};

export default Example;
