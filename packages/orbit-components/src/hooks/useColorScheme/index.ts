import { useTheme } from "../..";

export const useColorScheme = (): boolean => {
  const theme = useTheme();
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDark = darkQuery.matches;

  if (theme.colorScheme === "system") {
    return prefersDark;
  }

  return theme.colorScheme === "dark";
};

export default useColorScheme;
