import React from "react";

const useOs = () => {
  const [os, setOs] = React.useState("mac");

  React.useEffect(() => {
    if (window.navigator.appVersion.includes("Mac")) setOs("mac");
    if (window.navigator.appVersion.includes("Windows")) setOs("win");
  }, []);

  return os;
};

export default useOs;
