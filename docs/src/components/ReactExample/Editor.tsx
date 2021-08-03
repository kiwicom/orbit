import React from "react";
import { Editor } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";

interface Props {
  isFullPage?: boolean;
  onChange: (code: string) => void;
  code: string;
}

const SandboxEditor = ({ isFullPage, onChange, code }: Props) => {
  return (
    <Editor
      style={!isFullPage ? { margin: 0, borderRadius: "0 0 12px 12px" } : undefined}
      theme={dracula}
      onChange={onChange}
      language="jsx"
      code={code}
    />
  );
};

export default SandboxEditor;
