import React from "react";
import { Editor } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";
// eslint-disable-next-line import/no-extraneous-dependencies
import CSS from "csstype";

interface Props {
  style?: CSS.Properties;
  onChange: (code: string) => void;
  code: string;
}

const SandboxEditor = ({ style, onChange, code }: Props) => {
  return <Editor style={style} theme={dracula} onChange={onChange} language="jsx" code={code} />;
};

export default SandboxEditor;
