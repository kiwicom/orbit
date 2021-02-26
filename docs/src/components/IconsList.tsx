import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Button,
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
import iconsList from "@kiwicom/orbit-components/lib/data/icons.json";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { CodeBlock } from "./Code";
import { copyTimeout, pascalize } from "../utils/common";
import HeaderWithLink from "./HeaderWithLink";

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

interface IconObjectShape {
  character: string;
  description: string;
  svg: string;
  url: string;
}

interface IconProps {
  iconName: string;
  opened: boolean;
  setOpenedIcon: React.Dispatch<React.SetStateAction<string>>;
}

const Icon = ({ iconName, opened, setOpenedIcon }: IconProps) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    copyTimeout(copied, setCopied);
  }, [copied, setCopied]);

  const iconObject: IconObjectShape = iconsList[iconName];
  const pascalName = pascalize(iconName);

  return (
    <div id={iconName}>
      <Tile onClick={() => setOpenedIcon(opened ? "" : iconName)}>
        <Stack justify="between">
          <img src={`data:image/svg+xml;utf8,${iconObject.svg}`} alt="" />
          <Coupon>{iconObject.character}</Coupon>
        </Stack>
        <Text type="secondary">{iconName}</Text>
      </Tile>
      {opened && (
        <Card>
          <CardSection>
            <Stack>
              <HeaderWithLink>{iconName}</HeaderWithLink>
              {iconObject.description && <Text>{iconObject.description}</Text>}
              <CodeBlock className="language-jsx">{`import { ${pascalName} } from "@kiwicom/orbit-components/icons"\n\n<${pascalName} />`}</CodeBlock>
              <Stack direction="row" justify="between">
                <Button size="small" type="secondary" href={iconObject.url} external>
                  Download SVG
                </Button>
                <CopyToClipboard text={iconObject.svg}>
                  <Button
                    size="small"
                    type="secondary"
                    disabled={copied}
                    onClick={() => setCopied(true)}
                  >
                    {copied ? "Copied source!" : "Copy SVG source"}
                  </Button>
                </CopyToClipboard>
              </Stack>
            </Stack>
          </CardSection>
        </Card>
      )}
    </div>
  );
};

const IconsList = () => {
  const allIconNames = Object.keys(iconsList);
  const [openedIcon, setOpenedIcon] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") setOpenedIcon(window.location.hash.replace("#", ""));
  }, []);

  const filteredIconNames = allIconNames.filter(name => name.includes(filter.toLowerCase()));

  return (
    <Stack spacing="large">
      <InputField
        prefix={<Search />}
        placeholder="Find an icon"
        value={filter}
        onChange={event => setFilter(event.currentTarget.value)}
      />
      <Grid>
        {filteredIconNames.map(iconName => (
          <Icon
            key={iconName}
            iconName={iconName}
            opened={openedIcon === iconName}
            setOpenedIcon={setOpenedIcon}
          />
        ))}
      </Grid>
    </Stack>
  );
};

export default IconsList;
