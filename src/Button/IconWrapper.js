// @flow
import * as React from "react";
import * as tokens from "@kiwicom/orbit-design-tokens";

const sizeIcon = {
  small: tokens.heightIconSmall,
  normal: tokens.heightIconMedium,
  large: tokens.heightIconMedium,
};

const marginRight = {
  small: tokens.marginButtonIconSmall,
  normal: tokens.marginButtonIconNormal,
  large: tokens.marginButtonIconLarge,
};

const colorIcon = {
  primary: tokens.colorIconButtonPrimary,
  secondary: tokens.colorIconButtonSecondary,
  link: tokens.colorIconButtonLink,
  facebook: tokens.colorIconButtonFacebook,
  google: tokens.colorIconButtonGoogle,
  destructive: tokens.colorIconButtonDestructive,
};

const colorIconBordered = {
  primary: tokens.colorIconButtonPrimaryBordered,
  secondary: tokens.colorIconButtonSecondaryBordered,
  link: tokens.colorIconButtonLinkBordered,
  facebook: tokens.colorIconButtonFacebookBordered,
  google: tokens.colorIconButtonGoogleBordered,
  destructive: tokens.colorIconButtonDestructiveBordered,
};

type Props = {
  bordered?: boolean,
  size: $Keys<typeof sizeIcon>,
  type: $Keys<typeof colorIcon> | $Keys<typeof colorIconBordered>,
  Icon: React.ComponentType<*>,
};

const IconWrapper = (props: Props) => {
  const { Icon, type, size, bordered } = props;

  return (
    <React.Fragment>
      <Icon color={bordered ? colorIconBordered[type] : colorIcon[type]} size={sizeIcon[size]} />
      <style xml>{`
        svg {
          margin-right: ${marginRight[props.size]};
        }
      `}</style>
    </React.Fragment>
  );
};

export default IconWrapper;
