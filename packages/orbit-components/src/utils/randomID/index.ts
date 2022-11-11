/** Generates randomID, does not support SSR  */
const randomId = (name: string): string => {
  return `${name + Math.floor(Math.random() * 100000)}-id-${Math.floor(Math.random() * 100000)}`;
};

export default randomId;
