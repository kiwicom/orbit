import React from "react";
import { Stack, ButtonLink, Tooltip } from "@kiwicom/orbit-components";
import { ChevronUp, ChevronDown } from "@kiwicom/orbit-components/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import Copy from "../../images/copy.svg";
import { copyTimeout } from "../../utils/common";

const StyledBoard = styled.div`
  ${({ theme }) => `
    margin-top: 0 !important;
    padding: ${theme.orbit.spaceXSmall};
    background: ${theme.orbit.paletteCloudLight};
  `};
`;

interface Props {
  code: string;
  isEditorOpened: boolean;
  onOpenEditor: () => void;
}

const Board = ({ code, isEditorOpened, onOpenEditor }: Props) => {
  const [isCopied, setCopied] = React.useState(false);

  React.useEffect(() => {
    copyTimeout(isCopied, setCopied);
  }, [isCopied, setCopied]);

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
            Code
          </ButtonLink>
          <ButtonLink
            onClick={onOpenEditor}
            type="secondary"
            ariaExpanded={isEditorOpened}
            iconRight={isEditorOpened ? <ChevronUp /> : <ChevronDown />}
          >
            Playground
          </ButtonLink>
        </Stack>
        <Stack inline justify="end" align="center">
          <CopyToClipboard text={code}>
            <Tooltip
              preferredPosition="top"
              preferredAlign="center"
              content={isCopied ? "copied" : "copy to clipboard"}
            >
              <ButtonLink
                onClick={() => setCopied(true)}
                type="secondary"
                ariaLabelledby="copy to clipboard"
              >
                <Copy />
              </ButtonLink>
            </Tooltip>
          </CopyToClipboard>
        </Stack>
      </Stack>
    </StyledBoard>
  );
};

export default Board;
