import { SIDE_NUDGE } from "../consts";

type ResolvePosition = ({|
  theme: Theme,
  inlineLabel: boolean,
  left: number,
|}) => string;

const resolvePosition: ResolvePosition = ({ theme, inlineLabel, left }) => {
  if (theme.rtl) {
    if (inlineLabel) {
      return `${SIDE_NUDGE}px`;
    }
    return "0px";
  }
  return `${left}px`;
};

export default resolvePosition;
