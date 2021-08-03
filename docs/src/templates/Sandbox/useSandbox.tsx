import React from "react";

const useSandbox = (exampleId: string) => {
  const [code, setCode] = React.useState("");
  const [origin, setOrigin] = React.useState("");

  React.useEffect(() => {
    const example = exampleId.toLowerCase();
    setCode(window.localStorage.getItem(example) || "");
    setOrigin(window.location.origin);

    const handleStorage = (ev: StorageEvent) => {
      if (ev.key === example && ev.newValue) {
        setCode(ev.newValue);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [exampleId]);

  return { code, origin, setCode };
};

export default useSandbox;
