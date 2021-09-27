import React from "react";
import {
  Stack,
  ButtonLink,
  Tooltip,
  useMediaQuery,
  Popover,
  Radio,
} from "@kiwicom/orbit-components";
import { ChevronUp, ChevronDown } from "@kiwicom/orbit-components/icons";
import styled, { css } from "styled-components";

import Variants from "./Variants";
import DarkMode from "../../../images/darkmode.svg";
import NewWindow from "../../../images/new-window.svg";
import Copy from "../../../images/copy.svg";
import useCopyToClipboard from "../../../hooks/useCopyToClipboard";
import { BgType } from "..";
import { Variant } from "../Example";

const StyledBoard = styled.div<{ isOpened: boolean }>`
  ${({ theme, isOpened }) => css`
    margin-top: 0;
    border-radius: ${!isOpened && `0 0 12px 12px`};
    padding: ${theme.orbit.spaceXSmall};
    border-top: 1px solid ${theme.orbit.paletteCloudDark};
    background: ${theme.orbit.paletteCloudLight};
  `};
`;

interface Props {
  exampleId?: string;
  code: string;
  origin?: string;
  isFullPage?: boolean;
  isPlaygroundOpened: boolean;
  isEditorOpened: boolean;
  currentVariant: string | null;
  isVariantsOpened: boolean;
  knobs: boolean;
  variants: Variant[];
  background: BgType;
  onSelectBackground: (value: BgType) => void;
  onOpenPlayground: () => void;
  onChangeVariant: (variant: string) => void;
  onOpenEditor: () => void;
}

const Board = ({
  isFullPage,
  exampleId,
  background,
  code,
  variants,
  currentVariant,
  isVariantsOpened,
  isEditorOpened,
  isPlaygroundOpened,
  onOpenPlayground,
  onChangeVariant,
  onOpenEditor,
  onSelectBackground,
  knobs,
  origin,
}: Props) => {
  const [isCopied, copy] = useCopyToClipboard();
  const { isLargeMobile } = useMediaQuery();

  const defaultValues = {
    white: false,
    dark: false,
    grid: false,
  };

  const [active, setActive] = React.useState(defaultValues);

  React.useEffect(() => {
    setActive(prev => ({ ...prev, [background]: true }));
  }, [background, setActive]);

  const handleBackground = ev => {
    const { name, value } = ev.target;
    setActive({ ...defaultValues, [name]: value });
    onSelectBackground(ev.target.name);
  };

  return (
    <StyledBoard isOpened={isEditorOpened || isPlaygroundOpened}>
      <Stack flex justify="between" align="center">
        <Stack inline>
          <ButtonLink
            onClick={onOpenEditor}
            type="secondary"
            ariaExpanded={isEditorOpened}
            iconRight={isEditorOpened ? <ChevronUp /> : <ChevronDown />}
          >
            Code editor
          </ButtonLink>
          {knobs && (
            <ButtonLink
              onClick={onOpenPlayground}
              type="secondary"
              ariaExpanded={isPlaygroundOpened}
              iconRight={isPlaygroundOpened ? <ChevronUp /> : <ChevronDown />}
            >
              Playground
            </ButtonLink>
          )}
          {variants.length > 0 && (
            <Popover
              noFlip
              renderInPortal={false}
              content={
                <Variants
                  exampleVariants={variants}
                  currentVariant={currentVariant}
                  onChange={onChangeVariant}
                />
              }
            >
              <ButtonLink
                type="secondary"
                asComponent="button"
                ariaExpanded={isVariantsOpened}
                iconRight={isVariantsOpened ? <ChevronUp /> : <ChevronDown />}
              >
                Variants
              </ButtonLink>
            </Popover>
          )}
        </Stack>
        <Stack inline justify="end" align="center" spacing="none">
          <Tooltip
            preferredPosition="top"
            preferredAlign="center"
            content={isCopied ? "copied" : "Copy to clipboard"}
          >
            <ButtonLink onClick={() => copy(code)} type="secondary" title="Copy to clipboard">
              <Copy />
            </ButtonLink>
          </Tooltip>
          <Popover
            content={
              <Stack>
                <Radio
                  name="white"
                  checked={active.white}
                  label="white"
                  value="white"
                  onChange={handleBackground}
                />
                <Radio
                  name="dark"
                  checked={active.dark}
                  value="dark"
                  label="dark"
                  onChange={handleBackground}
                />
                <Radio
                  name="grid"
                  checked={active.grid}
                  value="grid"
                  label="grid"
                  onChange={handleBackground}
                />
              </Stack>
            }
          >
            <ButtonLink type="secondary">
              <DarkMode />
            </ButtonLink>
          </Popover>
          {exampleId &&
            !isFullPage &&
            (isLargeMobile ? (
              <Tooltip preferredPosition="top" preferredAlign="center" content="Open in a new tab">
                <ButtonLink
                  type="secondary"
                  external
                  href={`${origin}/examples/${exampleId?.toLowerCase()}`}
                >
                  <NewWindow />
                </ButtonLink>
              </Tooltip>
            ) : (
              <ButtonLink
                type="secondary"
                external
                href={`${origin}/examples/${exampleId?.toLowerCase()}`}
              >
                <NewWindow />
              </ButtonLink>
            ))}
        </Stack>
      </Stack>
    </StyledBoard>
  );
};

export default Board;
