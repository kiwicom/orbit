import React from "react";

const useSandbox = (exampleId: string, receivedCode?: string) => {
  const [code, setCode] = React.useState(() => {
    return receivedCode || window.localStorage.getItem(exampleId) || "";
  });

  const [origin, setOrigin] = React.useState("");

  React.useEffect(() => {
    if (code) window.localStorage.setItem(exampleId, code);
  }, [code, exampleId]);

  React.useEffect(() => {
    setOrigin(window.location.origin);

    const handleStorage = (ev: StorageEvent) => {
      if (ev.key === exampleId && ev.newValue) {
        setCode(ev.newValue);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [exampleId, receivedCode]);

  return { code, origin, setCode };
};

export default useSandbox;
