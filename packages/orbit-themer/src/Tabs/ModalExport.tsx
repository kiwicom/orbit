import React from "react";
import styled from "styled-components";
import { diff } from "deep-object-diff";
import copy from "copy-to-clipboard";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Modal, ModalHeader, ModalSection, ModalFooter, Button } from "@kiwicom/orbit-components/";

import { DEFAULT_COLORS } from "../consts";
import ColorContext from "../ColorContext";

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const ModalExport = ({ onClose }) => {
  const { colors } = React.useContext(ColorContext);
  const onlyDifferentColors = diff(DEFAULT_COLORS, colors);
  const [copied, setCopied] = React.useState(false);

  const code = `import getTokens from "@kiwicom/orbit-components/lib/getTokens"; 
import OrbitProvider from "@kiwicom/orbit-components/lib/OrbitProvider";
 
const customTokens = getTokens({
 palette: ${JSON.stringify(onlyDifferentColors, null, 2)}
});
 
const App = () => 
<OrbitProvider theme={{ orbit: customTokens }}>
  <Button type="secondary" size="large">Button</Button>
</OrbitProvider>;`;

  const copyToClipboard = React.useCallback(() => {
    copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [code]);

  return (
    <Modal onClose={onClose} size="extraLarge">
      <ModalHeader title="Export theme" />
      <ModalSection>
        <Highlight {...defaultProps} code={code} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </Pre>
          )}
        </Highlight>
      </ModalSection>
      <ModalFooter>
        {copied ? (
          <Button disabled>Copied to clipboard</Button>
        ) : (
          <Button onClick={copyToClipboard}>Export</Button>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default ModalExport;
