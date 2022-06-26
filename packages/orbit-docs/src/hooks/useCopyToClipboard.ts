// @flow
import { useEffect, useState, useCallback } from "react";
import copy from "copy-to-clipboard";

const useCopyToClipboard = (
  timer: number | undefined = 3000,
): [boolean, (text: string) => void] => {
  const [isCopied, setCopied] = useState(false);

  const handler = useCallback((text: string) => {
    if (typeof text === "string") {
      copy(text);
      setCopied(true);
    } else {
      setCopied(false);
      console.error(`Cannot copy typeof ${text} to clipboard`);
    }
  }, []);

  useEffect(() => {
    let timeout;
    if (isCopied && timer) timeout = setTimeout(() => setCopied(false), timer);
    return () => clearTimeout(timeout);
  }, [isCopied, timer]);

  return [isCopied, handler];
};

export default useCopyToClipboard;
