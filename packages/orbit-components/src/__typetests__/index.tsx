import React from "react";

import { useRandomId, useRandomIdSeed } from "..";

interface Props {}

const Test: React.ComponentType<Props> = () => {
  const id: string = useRandomId();
  const seed = useRandomIdSeed();
  const helloId: string = seed("hello");
  return (
    <div>
      <div>{id}</div>
      <div>{helloId}</div>
    </div>
  );
};

export default Test;
