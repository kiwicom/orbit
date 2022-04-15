// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import { transparentColor } from "@kiwicom/orbit-design-tokens";

import defaultTheme from "../defaultTheme";
import InformationCircle from "../icons/InformationCircle";
import Check from "../icons/Check";
import AlertTriangle from "../icons/Alert";
import AlertCircle from "../icons/AlertCircle";
import Close from "../icons/Close";
import ButtonLink from "../ButtonLink";
import { StyledTextLink, getLinkStyle } from "../TextLink";
import { TYPE_OPTIONS, TOKENS, CLOSE_BUTTON_DATA_TEST } from "./consts";
import { rtlSpacing, right, left } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import { Item } from "../List/ListItem";
import { StyledText } from "../Text";
import useTranslate from "../hooks/useTranslate";
import { StyledHeading } from "../Heading";
import media from "../utils/mediaQuery";

import type { Props } from ".";

type IconProps = {|
  icon: any,
  type: string,
  className: string,
|};

const getTypeToken = name => ({ theme, type, suppressed }) => {
  const tokens = {
    [TOKENS.colorIconAlert]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueNormal,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenNormal,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeNormal,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedNormal,
    },
    [TOKENS.backgroundAlert]: {
      [TYPE_OPTIONS.INFO]: suppressed
        ? theme.orbit.paletteCloudLight
        : theme.orbit.paletteBlueLight,
      [TYPE_OPTIONS.SUCCESS]: suppressed
        ? theme.orbit.paletteCloudLight
        : theme.orbit.paletteGreenLight,
      [TYPE_OPTIONS.WARNING]: suppressed
        ? theme.orbit.paletteCloudLight
        : theme.orbit.paletteOrangeLight,
      [TYPE_OPTIONS.CRITICAL]: suppressed
        ? theme.orbit.paletteCloudLight
        : theme.orbit.paletteRedLight,
    },
    // TODO: create token
    [TOKENS.colorTextLinkAlertHover]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDarkSecondary,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDarkSecondary,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDarkSecondary,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDarkTertiary,
    },
    // TODO: create token
    [TOKENS.colorTextLinkAlertFocus]: {
      [TYPE_OPTIONS.INFO]: transparentColor(theme.orbit.paletteBlueDarkSecondary, 10),
      [TYPE_OPTIONS.SUCCESS]: transparentColor(theme.orbit.paletteGreenDarkSecondary, 10),
      [TYPE_OPTIONS.WARNING]: transparentColor(theme.orbit.paletteOrangeDarkSecondary, 10),
      [TYPE_OPTIONS.CRITICAL]: transparentColor(theme.orbit.paletteRedDarkTertiary, 10),
    },
    [TOKENS.colorBorderAlert]: {
      [TYPE_OPTIONS.INFO]: suppressed
        ? theme.orbit.paletteCloudDark
        : theme.orbit.paletteBlueLightSecondary,
      [TYPE_OPTIONS.SUCCESS]: suppressed
        ? theme.orbit.paletteCloudDark
        : theme.orbit.paletteGreenLightSecondary,
      [TYPE_OPTIONS.WARNING]: suppressed
        ? theme.orbit.paletteCloudDark
        : theme.orbit.paletteOrangeLightSecondary,
      [TYPE_OPTIONS.CRITICAL]: suppressed
        ? theme.orbit.paletteCloudDark
        : theme.orbit.paletteRedLightSecondary,
    },
    [TOKENS.colorAccentBorder]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueNormal,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenNormal,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeNormal,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedNormal,
    },
  };
  return tokens[name][type];
};

const StyledIcon = styled(({ icon, type, className }: IconProps) => {
  // Icon should be boolean and TRUE
  if (typeof icon === "boolean" && icon) {
    if (type === TYPE_OPTIONS.INFO) {
      return <InformationCircle className={className} size="small" />;
    }
    if (type === TYPE_OPTIONS.SUCCESS) {
      return <Check className={className} size="small" />;
    }
    if (type === TYPE_OPTIONS.WARNING) {
      return <AlertTriangle className={className} size="small" />;
    }
    if (type === TYPE_OPTIONS.CRITICAL) {
      return <AlertCircle className={className} size="small" />;
    }
  }
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon, { className, size: "small" });
  }

  return icon;
})``;

const StyledDiv = ({
  className,
  children,
  dataTest,
}: {|
  className: string,
  children: React.Node,
  dataTest: string,
|}) => (
  <div className={className} data-test={dataTest}>
    {children}
  </div>
);

const StyledAlert = styled(StyledDiv)`
  ${({ theme, closable }) => css`
    position: relative;
    display: flex;
    width: 100%;
    border-radius: ${theme.orbit.borderRadiusLarge};
    border: 1px solid ${getTypeToken(TOKENS.colorBorderAlert)};
    background: ${getTypeToken(TOKENS.backgroundAlert)};
    color: ${theme.orbit.paletteInkNormal};
    font-family: ${theme.orbit.fontFamily};
    font-size: ${theme.orbit.fontSizeNormal};
    box-sizing: border-box;
    margin-bottom: ${getSpacingToken};
    border-top: 3px solid ${getTypeToken(TOKENS.colorAccentBorder)};

    padding: ${closable
      ? rtlSpacing(
          `${theme.orbit.spaceThreeX} ${theme.orbit.spaceSixX} ${theme.orbit.spaceThreeX} ${theme.orbit.spaceThreeX}`,
        )
      : theme.orbit.spaceThreeX};

    ${media.largeMobile(css`
      border-top: 1px solid ${getTypeToken(TOKENS.colorBorderAlert)};
      border-${left}: 3px solid ${getTypeToken(TOKENS.colorAccentBorder)};
    `)}

    ${media.tablet(css`
      border-radius: ${theme.orbit.borderRadiusNormal};
    `)}
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledAlert.defaultProps = {
  theme: defaultTheme,
};

const StyledIconContainer = styled(StyledDiv)`
  ${({ theme, inlineActions }) => css`
    flex-shrink: 0;
    margin: ${rtlSpacing(`0 ${theme.orbit.spaceTwoX} 0 0`)};
    color: ${getTypeToken(TOKENS.colorIconAlert)};
    display: ${inlineActions && "flex"};
    align-items: ${inlineActions && "center"};

    ${media.tablet(css`
      margin: ${rtlSpacing(`0 ${theme.orbit.spaceTwoX} 0 0`)};

      ${StyledIcon} {
        width: 20px;
        height: 20px;
      }
    `)}
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledIconContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledContentWrapper = styled(StyledDiv)`
  ${({ title, inlineActions }) => css`
    flex: 1; // IE wrapping fix
    display: flex;
    flex-direction: ${title && inlineActions ? "row" : "column"};
    align-items: ${!title && "center"};
    justify-content: ${inlineActions && "space-between"};
  `}
`;

const StyledTitle = styled(StyledDiv)`
  ${({ theme, hasChildren, inlineActions }) => css`
    color: ${theme.orbit.paletteInkNormal};
    display: flex;
    align-items: center;
    min-height: 20px;
    margin-bottom: ${hasChildren && (inlineActions ? "0" : theme.orbit.spaceOneX)};
    font-weight: ${theme.orbit.fontWeightBold};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTitle.defaultProps = {
  theme: defaultTheme,
};

const StyledContent = styled(StyledDiv)`
  ${({ inlineActions, theme }) => css`
    display: flex;
    align-items: center;
    min-height: 20px;
    width: ${!inlineActions && "100%"};

    & a:not([class]),
    & ${StyledTextLink} {
      ${getLinkStyle};
    }

    & ${Item}, ${StyledText}, ${StyledHeading} {
      color: ${theme.orbit.paletteInkNormal};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledContent.defaultProps = {
  theme: defaultTheme,
};

const CloseContainer = styled(StyledDiv)`
  ${({ theme, hasChildren }) => css`
    position: absolute;
    top: ${hasChildren ? 0 : "50%"};
    margin-top: ${!hasChildren && `-${theme.orbit.iconExtraSmallSize}`};
    ${right}: 0;
    margin-${right}: ${!hasChildren && theme.orbit.spaceTwoX};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
CloseContainer.defaultProps = {
  theme: defaultTheme,
};

const AlertCloseButton = ({ hasChildren, dataTest, onClick, icon }) => {
  const translate = useTranslate();
  return (
    <CloseContainer hasChildren={hasChildren}>
      <ButtonLink
        dataTest={dataTest}
        onClick={onClick}
        size="small"
        iconLeft={icon}
        type="secondary"
        title={translate("button_close")}
      />
    </CloseContainer>
  );
};

const Alert = (props: Props): React.Node => {
  const {
    type = TYPE_OPTIONS.INFO,
    title,
    icon,
    closable,
    onClose,
    children,
    dataTest,
    spaceAfter,
    suppressed,
    inlineActions,
  } = props;
  return (
    <StyledAlert
      type={type}
      icon={icon}
      suppressed={suppressed}
      closable={closable}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    >
      {icon && (
        <StyledIconContainer type={type} inlineActions={inlineActions}>
          <StyledIcon type={type} icon={icon} />
        </StyledIconContainer>
      )}
      <StyledContentWrapper title={title} inlineActions={inlineActions}>
        {title && (
          <StyledTitle hasChildren={children} inlineActions={inlineActions}>
            {title}
          </StyledTitle>
        )}
        {children && !inlineActions && (
          <StyledContent title={title} type={type}>
            {children}
          </StyledContent>
        )}
        {inlineActions && (
          <StyledContent title={title} type={type} inlineActions={inlineActions}>
            {inlineActions}
          </StyledContent>
        )}
      </StyledContentWrapper>
      {closable && (
        <AlertCloseButton
          hasChildren={children}
          dataTest={CLOSE_BUTTON_DATA_TEST}
          onClick={onClose}
          icon={<Close size="small" color={type} />}
        />
      )}
    </StyledAlert>
  );
};

export { default as AlertButton } from "./AlertButton";

export default Alert;
