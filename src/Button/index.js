// @flow
import * as React from "react";
import * as tokens from "@kiwicom/orbit-design-tokens";

import { Loading } from "../icons";

const heightButton = {
  large: tokens.heightButtonLarge,
  normal: tokens.heightButtonNormal,
  small: tokens.heightButtonSmall,
};

const fontSizeButton = {
  large: tokens.fontSizeButtonLarge,
  normal: tokens.fontSizeButtonNormal,
  small: tokens.fontSizeButtonSmall,
};

const paddingButton = {
  large: tokens.paddingButtonLarge,
  normal: tokens.paddingButtonNormal,
  small: tokens.paddingButtonSmall,
};

const paddingButtonWithIcon = {
  large: tokens.paddingButtonLargeWithIcon,
  normal: tokens.paddingButtonNormalWithIcon,
  small: tokens.paddingButtonSmallWithIcon,
};

const marginRightIcon = {
  small: tokens.marginButtonIconSmall,
  normal: tokens.marginButtonIconNormal,
  large: tokens.marginButtonIconLarge,
};

const backgroundButton = {
  filled: {
    primary: tokens.backgroundButtonPrimary,
    secondary: tokens.backgroundButtonSecondary,
    info: tokens.backgroundButtonInfo,
    success: tokens.backgroundButtonSuccess,
    warning: tokens.backgroundButtonWarning,
    critical: tokens.backgroundButtonCritical,
    facebook: tokens.backgroundButtonFacebook,
    google: tokens.backgroundButtonGoogle,
  },
  bordered: tokens.backgroundButtonBordered,
  link: {
    primary: tokens.backgroundButtonPrimaryLink,
    secondary: tokens.backgroundButtonSecondaryLink,
    info: tokens.backgroundButtonInfoLink,
    success: tokens.backgroundButtonSuccessLink,
    warning: tokens.backgroundButtonWarningLink,
    critical: tokens.backgroundButtonCriticalLink,
    facebook: tokens.backgroundButtonFacebookLink,
    google: tokens.backgroundButtonGoogleLink,
  },
};

const backgroundButtonHover = {
  filled: {
    primary: tokens.backgroundButtonPrimaryHover,
    secondary: tokens.backgroundButtonSecondaryHover,
    info: tokens.backgroundButtonInfoHover,
    success: tokens.backgroundButtonSuccessHover,
    warning: tokens.backgroundButtonWarningHover,
    critical: tokens.backgroundButtonCriticalHover,
    facebook: tokens.backgroundButtonFacebookHover,
    google: tokens.backgroundButtonGoogleHover,
  },
  bordered: tokens.backgroundButtonBorderedHover,
  link: {
    primary: tokens.backgroundButtonPrimaryLinkHover,
    secondary: tokens.backgroundButtonSecondaryLinkHover,
    info: tokens.backgroundButtonInfoLinkHover,
    success: tokens.backgroundButtonSuccessLinkHover,
    warning: tokens.backgroundButtonWarningLinkHover,
    critical: tokens.backgroundButtonCriticalLinkHover,
    facebook: tokens.backgroundButtonFacebookLinkHover,
    google: tokens.backgroundButtonGoogleLinkHover,
  },
};

const backgroundButtonActive = {
  filled: {
    primary: tokens.backgroundButtonPrimaryActive,
    secondary: tokens.backgroundButtonSecondaryActive,
    info: tokens.backgroundButtonInfoActive,
    success: tokens.backgroundButtonSuccessActive,
    warning: tokens.backgroundButtonWarningActive,
    critical: tokens.backgroundButtonCriticalActive,
    facebook: tokens.backgroundButtonFacebookActive,
    google: tokens.backgroundButtonGoogleActive,
  },
  bordered: tokens.backgroundButtonBorderedActive,
  link: {
    primary: tokens.backgroundButtonPrimaryLinkActive,
    secondary: tokens.backgroundButtonSecondaryLinkActive,
    info: tokens.backgroundButtonInfoLinkActive,
    success: tokens.backgroundButtonSuccessLinkActive,
    warning: tokens.backgroundButtonWarningLinkActive,
    critical: tokens.backgroundButtonCriticalLinkActive,
    facebook: tokens.backgroundButtonFacebookLinkActive,
    google: tokens.backgroundButtonGoogleLinkActive,
  },
};

const colorTextButton = {
  filled: {
    primary: tokens.colorTextButtonPrimary,
    secondary: tokens.colorTextButtonSecondary,
    info: tokens.colorTextButtonInfo,
    success: tokens.colorTextButtonSuccess,
    warning: tokens.colorTextButtonWarning,
    critical: tokens.colorTextButtonCritical,
    facebook: tokens.colorTextButtonFacebook,
    google: tokens.colorTextButtonGoogle,
  },
  bordered: {
    primary: tokens.colorTextButtonPrimaryBordered,
    secondary: tokens.colorTextButtonSecondaryBordered,
    info: tokens.colorTextButtonInfoBordered,
    success: tokens.colorTextButtonSuccessBordered,
    warning: tokens.colorTextButtonWarningBordered,
    critical: tokens.colorTextButtonCriticalBordered,
    facebook: tokens.colorTextButtonFacebookBordered,
    google: tokens.colorTextButtonGoogleBordered,
  },
  link: {
    primary: tokens.colorTextButtonPrimaryLink,
    secondary: tokens.colorTextButtonSecondaryLink,
    info: tokens.colorTextButtonInfoLink,
    success: tokens.colorTextButtonSuccessLink,
    warning: tokens.colorTextButtonWarningLink,
    critical: tokens.colorTextButtonCriticalLink,
    facebook: tokens.colorTextButtonFacebookLink,
    google: tokens.colorTextButtonGoogleLink,
  },
};

const colorTextButtonHover = {
  filled: {
    primary: tokens.colorTextButtonPrimaryHover,
    secondary: tokens.colorTextButtonSecondaryHover,
    info: tokens.colorTextButtonInfoHover,
    success: tokens.colorTextButtonSuccessHover,
    warning: tokens.colorTextButtonWarningHover,
    critical: tokens.colorTextButtonCriticalHover,
    facebook: tokens.colorTextButtonFacebookHover,
    google: tokens.colorTextButtonGoogleHover,
  },
  bordered: {
    primary: tokens.colorTextButtonPrimaryBorderedHover,
    secondary: tokens.colorTextButtonSecondaryBorderedHover,
    info: tokens.colorTextButtonInfoBorderedHover,
    success: tokens.colorTextButtonSuccessBorderedHover,
    warning: tokens.colorTextButtonWarningBorderedHover,
    critical: tokens.colorTextButtonCriticalBorderedHover,
    facebook: tokens.colorTextButtonFacebookBorderedHover,
    google: tokens.colorTextButtonGoogleBorderedHover,
  },
  link: {
    primary: tokens.colorTextButtonPrimaryLinkHover,
    secondary: tokens.colorTextButtonSecondaryLinkHover,
    info: tokens.colorTextButtonInfoLinkHover,
    success: tokens.colorTextButtonSuccessLinkHover,
    warning: tokens.colorTextButtonWarningLinkHover,
    critical: tokens.colorTextButtonCriticalLinkHover,
    facebook: tokens.colorTextButtonFacebookLinkHover,
    google: tokens.colorTextButtonGoogleLinkHover,
  },
};

const colorTextButtonActive = {
  filled: {
    primary: tokens.colorTextButtonPrimaryActive,
    secondary: tokens.colorTextButtonSecondaryActive,
    info: tokens.colorTextButtonInfoActive,
    success: tokens.colorTextButtonSuccessActive,
    warning: tokens.colorTextButtonWarningActive,
    critical: tokens.colorTextButtonCriticalActive,
    facebook: tokens.colorTextButtonFacebookActive,
    google: tokens.colorTextButtonGoogleActive,
  },
  bordered: {
    primary: tokens.colorTextButtonPrimaryBorderedActive,
    secondary: tokens.colorTextButtonSecondaryBorderedActive,
    info: tokens.colorTextButtonInfoBorderedActive,
    success: tokens.colorTextButtonSuccessBorderedActive,
    warning: tokens.colorTextButtonWarningBorderedActive,
    critical: tokens.colorTextButtonCriticalBorderedActive,
    facebook: tokens.colorTextButtonFacebookBorderedActive,
    google: tokens.colorTextButtonGoogleBorderedActive,
  },
  link: {
    primary: tokens.colorTextButtonPrimaryLinkActive,
    secondary: tokens.colorTextButtonSecondaryLinkActive,
    info: tokens.colorTextButtonInfoLinkActive,
    success: tokens.colorTextButtonSuccessLinkActive,
    warning: tokens.colorTextButtonWarningLinkActive,
    critical: tokens.colorTextButtonCriticalLinkActive,
    facebook: tokens.colorTextButtonFacebookLinkActive,
    google: tokens.colorTextButtonGoogleLinkActive,
  },
};

const borderColorButton = {
  bordered: {
    primary: tokens.borderColorButtonPrimaryBordered,
    secondary: tokens.borderColorButtonSecondaryBordered,
    info: tokens.borderColorButtonInfoBordered,
    success: tokens.borderColorButtonSuccessBordered,
    warning: tokens.borderColorButtonWarningBordered,
    critical: tokens.borderColorButtonCriticalBordered,
    facebook: tokens.borderColorButtonFacebookBordered,
    google: tokens.borderColorButtonGoogleBordered,
  },
};

const borderColorButtonHover = {
  bordered: {
    primary: tokens.borderColorButtonPrimaryBorderedHover,
    secondary: tokens.borderColorButtonSecondaryBorderedHover,
    info: tokens.borderColorButtonInfoBorderedHover,
    success: tokens.borderColorButtonSuccessBorderedHover,
    warning: tokens.borderColorButtonWarningBorderedHover,
    critical: tokens.borderColorButtonCriticalBorderedHover,
    facebook: tokens.borderColorButtonFacebookBorderedHover,
    google: tokens.borderColorButtonGoogleBorderedHover,
  },
};

const borderColorButtonActive = {
  bordered: {
    primary: tokens.borderColorButtonPrimaryBorderedActive,
    secondary: tokens.borderColorButtonSecondaryBorderedActive,
    info: tokens.borderColorButtonInfoBorderedActive,
    success: tokens.borderColorButtonSuccessBorderedActive,
    warning: tokens.borderColorButtonWarningBorderedActive,
    critical: tokens.borderColorButtonCriticalBorderedActive,
    facebook: tokens.borderColorButtonFacebookBorderedActive,
    google: tokens.borderColorButtonGoogleBorderedActive,
  },
};

type Props = {
  title?: string,
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void,
  disabled: boolean,
  loading: boolean,
  block: boolean,
  variation: $Keys<typeof backgroundButton>,
  type: $Keys<typeof backgroundButton.filled>,
  size: $Keys<typeof heightButton>,
  onlyIcon: boolean,
  width: number,
  Icon?: React.ComponentType<*>,
};

const Button = (props: Props) => {
  const {
    title,
    onClick,
    disabled,
    loading,
    block,
    type,
    variation,
    size,
    onlyIcon,
    Icon,
    width,
  } = props;

  // iconSize in Button can be only small or medium
  const sizeIcon = size === "large" || size === "normal" ? "medium" : size;

  // allow onlyIcon only when Icon is passed
  const allowOnlyIcon = !!(onlyIcon && Icon);

  return (
    <button onClick={onClick} disabled={disabled}>
      {Icon &&
        (loading ? (
          <span className="iconContainer">
            <Loading size={sizeIcon} customColor={colorTextButton[variation][type]} />
          </span>
        ) : (
          <span className="iconContainer">
            <Icon size={sizeIcon} customColor={colorTextButton[variation][type]} />
          </span>
        ))}
      {!allowOnlyIcon && title}
      <style jsx>{`
        button {
          box-sizing: border-box;
          appearance: none;
          display: flex;
          justify-content: center;
          align-items: center;
          width: ${block
            ? "100%"
            : (width && `${width}px`) || (allowOnlyIcon && `${heightButton[size]}`) || "auto"};
          height: ${heightButton[size]};
          background: ${variation === "bordered"
            ? backgroundButton[variation]
            : backgroundButton[variation][type]};
          color: ${colorTextButton[variation][type]};
          border: ${variation === "bordered"
            ? `1px solid ${borderColorButton[variation][type]}`
            : "0"};
          border-radius: ${tokens.borderRadiusNormal};
          padding: 0 ${allowOnlyIcon ? "0" : paddingButton[size]} 0
            ${(allowOnlyIcon && "0") || (Icon ? paddingButtonWithIcon[size] : paddingButton[size])};
          font-weight: ${tokens.fontWeightBold};
          font-size: ${fontSizeButton[size]};
          cursor: ${disabled ? "default" : "pointer"};
          opacity: ${disabled ? tokens.opacityButtonDisabled : "1"};
          transition: all 0.15s ease-in-out;
          outline: 0;
        }
        button:hover {
          background: ${variation === "bordered"
            ? backgroundButtonHover[variation]
            : backgroundButtonHover[variation][type]};
          border-color: ${variation === "bordered"
            ? borderColorButtonHover[variation][type]
            : "initial"};
          color: ${colorTextButtonHover[variation][type]};
        }
        button:active {
          transform: scale(${tokens.modifierScaleButtonActive});
          background: ${variation === "bordered"
            ? backgroundButtonActive[variation]
            : backgroundButtonActive[variation][type]};
          border-color: ${variation === "bordered"
            ? borderColorButtonActive[variation][type]
            : "initial"};
          color: ${colorTextButtonActive[variation][type]};
        }
        .iconContainer {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-right: ${allowOnlyIcon ? "0" : marginRightIcon[size]};
        }
      `}</style>
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  block: false,
  facebook: false,
  google: false,
  destructive: false,
  variation: "filled",
  type: "primary",
  size: "normal",
  onlyIcon: false,
  children: undefined,
  width: 0,
};

export default Button;
