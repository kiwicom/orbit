import React from "react";
import { Editor } from "react-live";
import theme from "prism-react-renderer/themes/oceanicNext";

interface Props {
  isFullScreen: boolean;
  onChange: (code: string) => void;
  code: string;
}

const SandboxEditor = ({ isFullScreen, onChange, code }: Props) => {
  return (
    <Editor
      style={
        !isFullScreen
          ? { margin: 0, borderRadius: "0 0 12px 12px", overflowY: "scroll" }
          : undefined
      }
      theme={theme}
      onChange={onChange}
      language="jsx"
      code={code}
    />
  );
};

export default SandboxEditor;
