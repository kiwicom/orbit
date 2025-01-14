import { useTheme } from "../src";

const useScope = () => {
  return {
    theme: useTheme(),
  };
};

export default useScope;
