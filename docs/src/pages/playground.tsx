import React from "react";
import { WindowLocation } from "@reach/router";
import { LiveProvider, LivePreview, LiveEditor } from "react-live";
import styled, { css } from "styled-components";
import loadable from "@loadable/component";
import { Button, Stack, Tooltip, Popover, Radio } from "@kiwicom/orbit-components";
import Search from "@kiwicom/orbit-components/lib/icons/Search";
import Copy from "@kiwicom/orbit-components/lib/icons/Copy";
import GridIcon from "@kiwicom/orbit-components/lib/icons/Grid";
import Check from "@kiwicom/orbit-components/lib/icons/Check";
import { ToastRoot, createToast } from "@kiwicom/orbit-components/lib/Toast";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";
import Sun from "@kiwicom/orbit-components/lib/icons/Sun";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";

import useCopyToClipboard from "../hooks/useCopyToClipboard";
import Navbar from "../components/Navbar";
import SearchPlayground from "../components/Search/SearchPlayground";
import srcLayoutRight from "../images/interface-right.png";
import srcLayoutLeft from "../images/interface-left.png";
import srcLayoutTop from "../images/interface-top.png";
import { getBackground } from "../components/ReactExample/components/Frame";

const Orbit = loadable.lib(() => import("@kiwicom/orbit-components"));

interface Props {
  location: WindowLocation;
}

type Layout = "left" | "top" | "right";

const StyledPreview = styled(LivePreview)<{ $layout: Layout; bg: "grid" | "white" | "dark" }>`
  ${({ $layout, theme, bg }) => css`
    position: relative;
    color: ${theme.orbit.paletteInkNormal};
    height: ${$layout !== "top" && "calc(100vh - 70px)"};
    min-height: ${$layout === "top" && "300px"};
    overflow: scroll;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    ${getBackground(bg)};
  `}
`;

const StyledCustomMainWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const StyledLiveEditor = styled(LiveEditor)`
  display: flex;
  width: 100%;
  height: calc(100vh - 70px);
  > pre {
    width: 100%;
    font-weight: 500;
    overflow-x: scroll;
    font-size: 14px;
    font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console",
      "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono",
      "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
  }
`;

const StyledFloatingBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: fixed;
  bottom: 0;
  transform: translate(-50%, 0);
  left: 50%;
  z-index: 100;
  height: 50px;
  margin-bottom: 1rem;
`;

const DEFAULT_CODE = `() => <Button type="secondary">Button</Button>`;

const getDirection = (layout: Layout) => {
  if (layout === "top") return "column-reverse";
  if (layout === "right") return "row-reverse";
  return "row";
};

const formatWithPrettier = (code: string) =>
  prettier.format(code, { parser: "babel", plugins: [parserBabel] });

const Playground = ({ location }: Props) => {
  const [code, setCode] = React.useState(DEFAULT_CODE);
  const [layout, setLayout] = React.useState<Layout>("left");
  const [isSearchOpen, setSearchOpen] = React.useState(false);
  const [isCopied, copy] = useCopyToClipboard();
  const [bg, setBg] = React.useState<"grid" | "white" | "dark">("grid");

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setCode(formatWithPrettier(code));
    }, 5000);

    return () => clearTimeout(timerId);
  }, [code]);

  return (
    <StyledCustomMainWrapper>
      <Navbar location={location} />
      <ToastRoot dismissTimeout={1000} />
      <Stack flex direction="column">
        {isSearchOpen && (
          <SearchPlayground onSelect={c => setCode(c)} onClose={() => setSearchOpen(false)} />
        )}
        <Orbit>
          {orbit => {
            const { Icons, ...components } = orbit;
            return (
              <LiveProvider code={code} theme={shadesOfPurple} scope={{ ...Icons, ...components }}>
                <Stack flex direction={getDirection(layout)} spacing="none">
                  <StyledLiveEditor
                    onChange={c => {
                      setCode(c);
                    }}
                  />
                  <StyledPreview $layout={layout} bg={bg} />
                </Stack>
              </LiveProvider>
            );
          }}
        </Orbit>
      </Stack>
      <StyledFloatingBanner>
        <Tooltip content="Copy code to clipboard">
          <Button
            onClick={() => {
              copy(code);
              createToast("Code copied to clipboard");
            }}
            iconLeft={isCopied ? <Check /> : <Copy />}
            circled
          />
        </Tooltip>
        <Tooltip content="Search from examples">
          <Button onClick={() => setSearchOpen(true)} iconLeft={<Search />} circled />
        </Tooltip>
        <Popover
          content={
            <Stack inline>
              <Button
                type="white"
                onClick={() => setLayout("top")}
                iconLeft={<img src={srcLayoutTop} height={20} width={20} alt="layout-top" />}
              />
              <Button
                type="white"
                onClick={() => setLayout("left")}
                iconLeft={<img src={srcLayoutLeft} height={20} width={20} alt="layout-left" />}
              />
              <Button
                type="white"
                onClick={() => setLayout("right")}
                iconLeft={<img src={srcLayoutRight} height={20} width={20} alt="layout-right" />}
              />
            </Stack>
          }
        >
          <Button iconLeft={<GridIcon />} circled />
        </Popover>
        <Popover
          content={
            <Stack inline>
              <Radio
                onChange={() => setBg("grid")}
                label="Grid"
                value="grid"
                checked={bg === "grid"}
              />
              <Radio
                onChange={() => setBg("dark")}
                label="Dark"
                value="dark"
                checked={bg === "dark"}
              />
              <Radio
                onChange={() => setBg("white")}
                label="White"
                value="white"
                checked={bg === "white"}
              />
            </Stack>
          }
        >
          <Button iconLeft={<Sun />} circled />
        </Popover>
      </StyledFloatingBanner>
    </StyledCustomMainWrapper>
  );
};

export default Playground;
