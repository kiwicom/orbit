import type { Theme } from "../../../defaultTheme";

type ResolveColor = ({ isHelp, theme }: { isHelp?: boolean; theme: Theme }) => string;

const resolveColor: ResolveColor = ({ isHelp, theme }) => {
  return isHelp ? theme.orbit.paletteBlueNormal : theme.orbit.paletteRedNormal;
};

export default resolveColor;
