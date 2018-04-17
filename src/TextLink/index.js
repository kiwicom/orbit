// @flow
import * as React from "react";
import { darken } from "polished";
import * as tokens from "orbit-design-token";

type Props = {
  title: string,
  url: string,
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void,
  newTab: boolean,
  type: "primary" | "secondary",
  size: "small" | "normal" | "large",
};

const colorTextLink = {
  primary: tokens.colorLinkPrimary,
  secondary: tokens.colorLinkSecondary,
};
const fontSizeTextLink = {
  small: tokens.fontSizeTextSmall,
  normal: tokens.fontSizeTextNormal,
  large: tokens.fontSizeTextLarge,
};

const TextLink = (props: Props) => {
  const { title, url, onClick, newTab, type, size } = props;

  return (
    <a href={url} target={newTab ? "_blank" : undefined} onClick={onClick}>
      {title}
      <style jsx>{`
        a {
          font-size: ${fontSizeTextLink[size]};
          color: ${colorTextLink[type]};
          font-weight: ${tokens.fontWeightLinks};
          text-decoration: ${type === "secondary"
            ? "underline" // replace for token textDecorationLinkSecondary
            : "none"}; // replace for token textDecorationPrimary
          cursor: pointer;
        }
        a:hover {
          text-decoration: ${type === "secondary"
            ? "underline" // replace for token textDecorationLinkSecondaryHover
            : "underline"}; // replace for token textDecorationLinkPrimaryHover
          color: ${darken(tokens.modifierDarkenHover, tokens.colorLinkPrimary)};
        }
        a:visited {
          //nothing needs to be here, but this state will be used in the future probably
        }
        a:focus {
          outline-width: 3px;
        }
      `}</style>
    </a>
  );
};

TextLink.defaultProps = {
  type: "primary",
  size: "normal",
  newTab: false,
};

export default TextLink;
