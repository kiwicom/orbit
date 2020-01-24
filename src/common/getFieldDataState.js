// @flow
const getFieldDataState = (error: boolean): ?string => {
  return error ? "error" : "ok";
};

export default getFieldDataState;
