// @flow
import type { RandomID } from "./index.js.flow";

const randomID: RandomID = (name: string) => {
  return `${name + Math.floor(Math.random() * 100000)}-id-${Math.floor(Math.random() * 100000)}`;
};

export default randomID;
