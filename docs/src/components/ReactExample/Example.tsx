import React from "react";
import styled, { css } from "styled-components";

import { StyledAnchor } from "../HeadingWithLink";
import Editor from "./components/Editor";
import Frame, { StyledFrame } from "./components/Frame";
import Board from "./components/Board";
import Playground from "./components/Playground";
import ViewportsRuler from "./components/ViewportsRuler";
import { transform } from "./transform";

import { BgType, Props as InitialProps } from ".";

const StyledWrapper = styled.div<{ isFullPage?: boolean }>`
  ${({ theme, isFullPage }) => css`
    resize: vertical;
    display: grid;
    min-height: ${isFullPage && `100%`};
    grid-template-rows: auto 1fr min-content;
    grid-template-columns: 1fr;
    border-radius: ${!isFullPage && `12px`};
    border: ${!isFullPage && `1px solid ${theme.orbit.paletteCloudNormal}`};
    overflow: hidden;
    overflow-y: auto;

    ${StyledAnchor} + & {
      margin-top: ${theme.orbit.spaceMedium} !important;
    }
    & + ${StyledAnchor} {
      margin-top: ${theme.orbit.spaceXLarge} !important;
    }
    & + :not(${StyledAnchor}) {
      margin-top: ${theme.orbit.spaceLarge} !important;
    }

    &[style*="height"] ${StyledFrame} {
      height: 100%;
    }
  `};
`;

const StyledWrapperFrame = styled.div<{ width: number | string; responsive: boolean }>`
  ${({ width, responsive }) => css`
    margin: 0 auto;
    width: 100%;
    ${responsive
      ? css`
          max-width: ${typeof width === "number" ? `${width}px` : width};
        `
      : css`
          padding: 0 14px;
        `};
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
  responsive?: boolean;
  code: string;
  example: string;
  fullPageExampleId?: string;
  isFullPage?: boolean;
  exampleName: string;
  exampleKnobs: ExampleKnob[];
  exampleVariants: Variant[];
  onChangeCode: (code: string) => void;
  origin: string;
}

const Example = ({
  responsive = true,
  code,
  origin,
  exampleId,
  exampleKnobs,
  exampleName,
  exampleVariants,
  fullPageExampleId,
  height,
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
  const [width, setPreviewWidth] = React.useState<number | string>(0);
  const handleChangeRulerSize = React.useCallback(size => setPreviewWidth(size), []);

  React.useEffect(() => {
    if (background) setSelectedBackground(background);
  }, [background, setSelectedBackground]);

  return (
    <StyledWrapper isFullPage={isFullPage}>
      {responsive && <ViewportsRuler onChangeSize={handleChangeRulerSize} />}
      <StyledWrapperFrame width={width} responsive={responsive}>
        <Frame
          origin={origin}
          pageId={exampleId}
          exampleId={exampleId}
          height={height}
          isFullPage={isFullPage}
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
          onChange={knob => onChangeCode(transform(exampleName, example, knob))}
          exampleKnobs={exampleKnobs}
        />
      )}
    </StyledWrapper>
  );
};

export default Example;
