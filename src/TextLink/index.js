// @flow
import * as React from "react";
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
  children: React.Node,
  href: string,
  onClick: (SyntheticEvent<HTMLLinkElement>) => any,
  newTab: boolean,
  type: $Keys<typeof colorTextLink>,
  size: $Keys<typeof fontSizeTextLink>,
};

const TextLink = (props: Props) => {
  const { children, href, onClick, newTab, type, size } = props;

  return (
    <a href={href} target={newTab ? "_blank" : undefined} onClick={onClick}>
      {children}
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
          color: ${tokens.colorLinkPrimaryHover};
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
