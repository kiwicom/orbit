import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  ButtonLink,
  Card,
  CardSection,
  Coupon,
  Heading,
  InputField,
  Stack,
  Text,
  Tile,
} from "@kiwicom/orbit-components";
import { Link as LinkIcon, Search } from "@kiwicom/orbit-components/icons";

import { IllustrationObjectShape } from "./IllustrationList";
import { IconObjectShape } from "./IconList";
import { CodeBlock } from "./Code";
import { copyTimeout } from "../utils/common";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: ${({ theme }) => theme.orbit.spaceXSmall};
`;

const StyledAnchorWrapper = styled.div`
  svg {
    visibility: hidden;
  }

  &:hover svg {
    visibility: visible;
  }
`;

type VisualObjectShape = IllustrationObjectShape | IconObjectShape;

interface ObjectActions {
  actions(
    VisualObjectShape,
    copied?: boolean,
    setCopied?: React.Dispatch<React.SetStateAction<boolean>>,
  ): React.ReactNode;
  getImgSource(VisualObjectShape): string;
  exampleCode(string): string;
}

interface VisualProps extends VisualListProps {
  visualName: string;
  opened: boolean;
  setOpenedVisual: React.Dispatch<React.SetStateAction<string>>;
}

const Visual = ({
  actions,
  exampleCode,
  getImgSource,
  list,
  opened,
  setOpenedVisual,
  visualName,
}: VisualProps) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    copyTimeout(copied, setCopied);
  }, [copied, setCopied]);

  const visualObject: VisualObjectShape = list[visualName];

  return (
    <div id={visualName}>
      <Tile onClick={() => setOpenedVisual(opened ? "" : visualName)}>
        <Stack justify="between">
          <img src={getImgSource(visualObject)} alt="" />
          {"character" in visualObject && <Coupon>{visualObject.character}</Coupon>}
        </Stack>
        <Text type="secondary">{visualName}</Text>
      </Tile>
      {opened && (
        <Card>
          <CardSection>
            <Stack>
              <StyledAnchorWrapper>
                <Stack flex spacing="XXXSmall" align="center">
                  <Heading as="h3" type="title2" spaceAfter="medium">
                    {visualName}
                  </Heading>
                  <ButtonLink
                    iconLeft={<LinkIcon />}
                    href={`#${visualName}`}
                    type="secondary"
                    compact
                  />
                </Stack>
              </StyledAnchorWrapper>
              <CodeBlock className="language-jsx">{exampleCode(visualName)}</CodeBlock>
              {actions(visualObject, copied, setCopied)}
            </Stack>
          </CardSection>
        </Card>
      )}
    </div>
  );
};

interface VisualListProps extends ObjectActions {
  list: { [name: string]: VisualObjectShape };
}

const VisualList = ({ actions, exampleCode, getImgSource, list }: VisualListProps) => {
  const allVisualNames = Object.keys(list);
  const [openedVisual, setOpenedVisual] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") setOpenedVisual(window.location.hash.replace("#", ""));
  }, []);

  const filteredVisualNames = allVisualNames.filter(name => name.includes(filter.toLowerCase()));

  return (
    <Stack spacing="large">
      <InputField
        prefix={<Search />}
        placeholder="Find an visual"
        value={filter}
        onChange={event => setFilter(event.currentTarget.value)}
      />
      <Grid>
        {filteredVisualNames.map(visualName => (
          <Visual
            key={visualName}
            visualName={visualName}
            opened={openedVisual === visualName}
            setOpenedVisual={setOpenedVisual}
            actions={actions}
            getImgSource={getImgSource}
            exampleCode={exampleCode}
            list={list}
          />
        ))}
      </Grid>
    </Stack>
  );
};

export default VisualList;
