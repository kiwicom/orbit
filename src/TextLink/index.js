// @flow
import * as React from "react";
import { darken } from "polished";
import * as tokens from "@kiwicom/orbit-design-tokens";

const colorTextLink = {
  primary: tokens.colorLinkPrimary,
  secondary: tokens.colorLinkSecondary,
};
const fontSizeTextLink = {
  small: tokens.fontSizeTextSmall,
  normal: tokens.fontSizeTextNormal,
  large: tokens.fontSizeTextLarge,
};

type Props = {
  title: string,
  url: string,
  onClick: (SyntheticEvent<HTMLLinkElement>) => any,
  newTab: boolean,
  type: $Keys<typeof colorTextLink>,
  size: $Keys<typeof fontSizeTextLink>,
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
            ? tokens.textDecorationLinkSecondary
            : tokens.textDecorationLinkPrimary};
          cursor: pointer;
        }
        a:hover {
          text-decoration: ${type === "secondary"
            ? tokens.textDecorationLinkSecondaryHover
            : tokens.textDecorationLinkPrimaryHover};
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
