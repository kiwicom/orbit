// @flow
import type { randomID } from ".";

/** Generates randomID, does not support SSR  */
const randomId: randomID = (name: string) => {
  return `${name + Math.floor(Math.random() * 100000)}-id-${Math.floor(Math.random() * 100000)}`;
};

export default randomId;
