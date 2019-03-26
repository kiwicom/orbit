// @flow
import type { RandomID } from "./index.js.flow";

const randomID: RandomID = (name: string) => {
  return name + Math.floor(Math.random() * 1000000000) + Math.floor(Math.random() * 1000000000);
};

export default randomID;
