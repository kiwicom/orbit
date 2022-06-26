import React from "react";

export default function useIsUrlExternal(url?: string): boolean {
  return React.useMemo(() => {
    if (!url || typeof document === "undefined") return false;
    // https://stackoverflow.com/a/2911045/1247274
    const parser = document.createElement("a");
    parser.href = url;
    return parser.hostname !== window.location.hostname;
  }, [url]);
}
