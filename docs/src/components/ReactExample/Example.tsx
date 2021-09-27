import React from "react";
import styled, { css } from "styled-components";

import Editor from "./components/Editor";
import Frame from "./components/Frame";
import Board from "./components/Board";
import Playground from "./components/Playground";
import ViewportsRuler from "./components/ViewportsRuler";
import { transform } from "./helpers";

import { BgType, Props as InitialProps } from ".";

const StyledWrapper = styled.div<{ isFullPage?: boolean }>`
  ${({ theme, isFullPage }) => css`
    display: grid;
    min-height: ${isFullPage && `100%`};
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    border-radius: 12px;
    border: 1px solid ${theme.orbit.paletteCloudDark};
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

export interface Variant {
  name: string;
  code: string;
}

interface Props extends InitialProps {
  code: string;
  example: string;
  fullPageExampleId?: string;
  isFullPage?: boolean;
  exampleKnobs: ExampleKnob[];
  exampleVariants: Variant[];
  onChangeCode: (code: string) => void;
  origin: string;
}

const Example = ({
  code,
  origin,
  exampleId,
  exampleKnobs,
  exampleVariants,
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
  const [isVariantsOpened, setVariantsOpened] = React.useState(false);
  const [currentVariant, setCurrentVariant] = React.useState<string | null>(
    exampleVariants[0]?.name ?? null,
  );
  const [selectedBackground, setSelectedBackground] = React.useState<BgType>("white");
  const [width, setPreviewWidth] = React.useState(0);
  const handleChangeRulerSize = React.useCallback(size => setPreviewWidth(size), []);

  React.useEffect(() => {
    if (background) setSelectedBackground(background);
  }, [background, setSelectedBackground]);

  return (
    <StyledWrapper isFullPage={isFullPage}>
      <ViewportsRuler onChangeSize={handleChangeRulerSize} />
      <StyledWrapperFrame width={width}>
        <Frame
          origin={origin}
          pageId={exampleId}
          fullHeight={isFullPage}
          exampleId={exampleId}
          minHeight={minHeight}
          maxHeight={maxHeight}
          background={selectedBackground}
        />
      </StyledWrapperFrame>
      <Board
        background={selectedBackground}
        exampleId={fullPageExampleId}
        isEditorOpened={isEditorOpened}
        isPlaygroundOpened={isPlaygroundOpened}
        isFullPage={isFullPage}
        isVariantsOpened={isVariantsOpened}
        onSelectBackground={value => setSelectedBackground(value)}
        onOpenEditor={() => {
          setOpenEditor(prev => !prev);
          setPlaygroundOpened(false);
          setVariantsOpened(false);
        }}
        onOpenPlayground={() => {
          setOpenEditor(false);
          setPlaygroundOpened(prev => !prev);
        }}
        knobs={exampleKnobs.length > 0}
        variants={exampleVariants}
        currentVariant={currentVariant}
        onChangeVariant={variant => {
          setCurrentVariant(variant);
          const variantCode = exampleVariants.find(({ name }) => name === variant)?.code;
          if (variantCode) onChangeCode(variantCode);
        }}
        code={code}
        origin={origin}
      />
      {isEditorOpened && <Editor isFullPage={isFullPage} onChange={onChangeCode} code={example} />}
      {isPlaygroundOpened && exampleKnobs && exampleKnobs.length > 0 && (
        <Playground
          onChange={knob => onChangeCode(transform(example, knob))}
          exampleKnobs={exampleKnobs}
        />
      )}
    </StyledWrapper>
  );
};

export default Example;
