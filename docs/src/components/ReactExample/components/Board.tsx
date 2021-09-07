import React from "react";
import { Stack, ButtonLink, Tooltip, useMediaQuery } from "@kiwicom/orbit-components";
import { ChevronUp, ChevronDown } from "@kiwicom/orbit-components/icons";
import styled from "styled-components";

import NewWindow from "../../../images/new-window.svg";
import Copy from "../../../images/copy.svg";
import useCopyToClipboard from "../../../hooks/useCopyToClipboard";

const StyledBoard = styled.div`
  ${({ theme }) => `
    margin-top: 0;
    border-radius: 0 0 12px 12px;
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
  knobs: boolean;
  onOpenPlayground: () => void;
  onOpenEditor: () => void;
}

const Board = ({
  isFullPage,
  exampleId,
  code,
  isEditorOpened,
  isPlaygroundOpened,
  onOpenPlayground,
  onOpenEditor,
  knobs,
  origin,
}: Props) => {
  const [isCopied, copy] = useCopyToClipboard();
  const { isLargeMobile } = useMediaQuery();

  return (
    <StyledBoard>
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
