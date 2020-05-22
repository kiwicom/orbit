import * as React from "react"
import Heading from "../src/Heading"
import Text from "../src/Text"
import jsxToString from "react-element-to-jsx-string"
import { Code } from "@storybook/addon-info/dist/components/markdown/"
import { ActionBar } from "@storybook/components"
import { ThemeProvider, convert } from "@storybook/theming";
import styled from "styled-components";
import lzString from "lz-string";

const PlayroomButton = styled(ActionBar)`
  &&& {
    top: 1px;
    right: 1px;
    bottom: auto;

    > button {
      border-top: 0;
      border-bottom: 1px solid rgba(0,0,0,.1);
      border-radius: 0 0 0 4px;
    }
  }
`;

const orbitDecorator = (storyFn, context) => {
  const children = storyFn(context)
  const options = {
    filterProps: val => val != null && val !== "",
    functionValue: () => {
      return "function()";
    },
  };
  const code = jsxToString(children, options);

  const openInPlayroom = () => {
    const compressed = lzString.compressToEncodedURIComponent(JSON.stringify({code}));
    const basePath = process.env.NODE_ENV === 'production' ? '/playroom/' : "http://localhost:9000/";
    const url = `${basePath}#?code=${compressed}`;
    const win = window.open(url, '_blank');
    win.focus();
  };

  return  (
    <div style={{ padding: "20px" }}>
      <Heading spaceAfter="medium">{context.kind}</Heading>
      <Text spaceAfter="largest">{context.parameters?.info}</Text>
      {children}
      <div style={{ marginTop: 20, position: "relative" }}>
        <ThemeProvider theme={convert()}>
          <PlayroomButton actionItems={[{ title: "Open in Playroom", onClick: openInPlayroom }]} />
        </ThemeProvider>
        <React.Fragment>
          <Code code={code} language="jsx" format={false} />
        </React.Fragment>
      </div>
    </div>
  )
}

export default orbitDecorator
