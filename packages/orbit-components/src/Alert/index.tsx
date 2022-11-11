import * as React from "react";
import styled, { css } from "styled-components";
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import { Props as IconProps } from "../Icon/types";
import * as Common from "../common/types";
import { Type, Props } from "./types";
import defaultTheme, { Theme } from "../defaultTheme";
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

const getTypeToken = (name: string) => ({
  theme,
  type,
  suppressed,
}: {
  theme: Theme;
  type: Type;
  suppressed?: boolean;
}) => {
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
        : theme.orbit.backgroundAlertInfo,
      [TYPE_OPTIONS.SUCCESS]: suppressed
        ? theme.orbit.paletteCloudLight
        : theme.orbit.backgroundAlertSuccess,
      [TYPE_OPTIONS.WARNING]: suppressed
        ? theme.orbit.paletteCloudLight
        : theme.orbit.backgroundAlertWarning,
      [TYPE_OPTIONS.CRITICAL]: suppressed
        ? theme.orbit.paletteCloudLight
        : theme.orbit.backgroundAlertCritical,
    },
    // TODO: create token
    [TOKENS.colorTextLinkAlertHover]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDarkHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDarkHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDarkHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDarkActive,
    },
    // TODO: create token
    [TOKENS.colorTextLinkAlertFocus]: {
      [TYPE_OPTIONS.INFO]: convertHexToRgba(theme.orbit.paletteBlueDarkHover, 10),
      [TYPE_OPTIONS.SUCCESS]: convertHexToRgba(theme.orbit.paletteGreenDarkHover, 10),
      [TYPE_OPTIONS.WARNING]: convertHexToRgba(theme.orbit.paletteOrangeDarkHover, 10),
      [TYPE_OPTIONS.CRITICAL]: convertHexToRgba(theme.orbit.paletteRedDarkActive, 10),
    },
    [TOKENS.colorBorderAlert]: {
      [TYPE_OPTIONS.INFO]: suppressed
        ? theme.orbit.paletteCloudNormal
        : theme.orbit.paletteBlueLightHover,
      [TYPE_OPTIONS.SUCCESS]: suppressed
        ? theme.orbit.paletteCloudNormal
        : theme.orbit.paletteGreenLightHover,
      [TYPE_OPTIONS.WARNING]: suppressed
        ? theme.orbit.paletteCloudNormal
        : theme.orbit.paletteOrangeLightHover,
      [TYPE_OPTIONS.CRITICAL]: suppressed
        ? theme.orbit.paletteCloudNormal
        : theme.orbit.paletteRedLightHover,
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

const StyledIcon = ({ icon, type }: Pick<Props, "icon" | "type">) => {
  // Icon should be boolean and TRUE
  if (typeof icon === "boolean" && icon) {
    if (type === TYPE_OPTIONS.INFO) {
      return <InformationCircle size="small" />;
    }
    if (type === TYPE_OPTIONS.SUCCESS) {
      return <Check size="small" />;
    }
    if (type === TYPE_OPTIONS.WARNING) {
      return <AlertTriangle size="small" />;
    }
    if (type === TYPE_OPTIONS.CRITICAL) {
      return <AlertCircle size="small" />;
    }
  }

  if (React.isValidElement(icon) && typeof icon !== "boolean") {
    // @ts-expect-error TODO
    return React.cloneElement<IconProps>(icon, { size: "small" });
  }

  return <>{icon}</>;
};

const StyledAlert = styled.div<{
  closable?: boolean;
  spaceAfter?: Common.SpaceAfterSizes;
  icon?: React.ReactNode;
  suppressed?: boolean;
  type: Type;
}>`
  ${({ theme, closable }) => css`
    position: relative;
    display: flex;
    width: 100%;
    border-radius: ${theme.orbit.borderRadiusLarge};
    border: 1px solid ${getTypeToken(TOKENS.colorBorderAlert)};
    background: ${getTypeToken(TOKENS.backgroundAlert)};
    color: ${theme.orbit.paletteInkDark};
    font-family: ${theme.orbit.fontFamily};
    font-size: ${theme.orbit.fontSizeTextNormal};
    box-sizing: border-box;
    margin-bottom: ${getSpacingToken};
    border-top: 3px solid ${getTypeToken(TOKENS.colorAccentBorder)};

    padding: ${closable
      ? rtlSpacing(
          `${theme.orbit.spaceSmall} ${theme.orbit.spaceLarge} ${theme.orbit.spaceSmall} ${theme.orbit.spaceSmall}`,
        )
      : theme.orbit.spaceSmall};

    ${media.largeMobile(css`
      border-top: 1px solid ${getTypeToken(TOKENS.colorBorderAlert)};
      border-${left}: 3px solid ${getTypeToken(TOKENS.colorAccentBorder)};
    `)}

    ${media.tablet(css`
      border-radius: ${theme.orbit.borderRadiusNormal};
    `)}
  `}
`;

StyledAlert.defaultProps = {
  theme: defaultTheme,
};

const StyledIconContainer = styled.div<{ inlineActions: boolean; type: Type }>`
  ${({ theme, inlineActions }) => css`
    flex-shrink: 0;
    margin: ${rtlSpacing(`0 ${theme.orbit.spaceXSmall} 0 0`)};
    color: ${getTypeToken(TOKENS.colorIconAlert)};
    display: ${inlineActions && "flex"};
    align-items: ${inlineActions && "center"};

    ${media.tablet(css`
      margin: ${rtlSpacing(`0 ${theme.orbit.spaceXSmall} 0 0`)({ theme })};
      svg {
        width: 20px;
        height: 20px;
      }
    `)}
  `}
`;

StyledIconContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledContentWrapper = styled.div<{
  hasTitle: boolean;
  inlineActions: boolean;
}>`
  ${({ hasTitle, inlineActions }) => css`
    flex: 1;
    display: flex;
    flex-direction: ${hasTitle && inlineActions ? "row" : "column"};
    align-items: ${!hasTitle && "center"};
    justify-content: ${inlineActions && "space-between"};
  `}
`;

const StyledTitle = styled.div<{ inlineActions?: boolean; hasChildren: boolean }>`
  ${({ theme, hasChildren, inlineActions }) => css`
    color: ${theme.orbit.paletteInkDark};
    display: flex;
    align-items: center;
    min-height: 20px;
    margin-bottom: ${hasChildren && (inlineActions ? "0" : theme.orbit.spaceXXSmall)};
    font-weight: ${theme.orbit.fontWeightBold};
  `}
`;

StyledTitle.defaultProps = {
  theme: defaultTheme,
};

const StyledContent = styled.div<{ inlineActions?: boolean; type: Type; $noUnderline: boolean }>`
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
      color: ${theme.orbit.paletteInkDark};
    }
  `}
`;

StyledContent.defaultProps = {
  theme: defaultTheme,
};

const CloseContainer = styled.div<{
  hasChildren: boolean;
}>`
  ${({ theme, hasChildren }) => css`
    position: absolute;
    top: ${hasChildren ? 0 : "50%"};
    margin-top: ${!hasChildren && `-${theme.orbit.widthIconSmall}`};
    ${right}: 0;
    margin-${right}: ${!hasChildren && theme.orbit.spaceXSmall};
  `}
`;

CloseContainer.defaultProps = {
  theme: defaultTheme,
};

const AlertCloseButton = ({
  hasChildren,
  dataTest,
  onClick,
  icon,
}: {
  hasChildren: boolean;
  dataTest: string;
  onClick?: Common.Callback;
  icon: React.ReactNode;
}) => {
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

const Alert = (props: Props) => {
  const {
    type = TYPE_OPTIONS.INFO,
    title,
    icon,
    closable,
    onClose,
    children,
    dataTest,
    id,
    spaceAfter,
    suppressed,
    inlineActions,
  } = props;
  return (
    <StyledAlert
      type={type}
      icon={icon}
      id={id}
      suppressed={suppressed}
      closable={closable}
      data-test={dataTest}
      spaceAfter={spaceAfter}
    >
      {icon && (
        <StyledIconContainer type={type} inlineActions={!!inlineActions}>
          <StyledIcon type={type} icon={icon} />
        </StyledIconContainer>
      )}
      <StyledContentWrapper hasTitle={!!title} inlineActions={!!inlineActions}>
        {title && (
          <StyledTitle hasChildren={!!children} inlineActions={!!inlineActions}>
            {title}
          </StyledTitle>
        )}
        {children && !inlineActions && (
          <StyledContent type={type} $noUnderline>
            {children}
          </StyledContent>
        )}
        {inlineActions && (
          <StyledContent type={type} inlineActions={!!inlineActions} $noUnderline>
            {inlineActions}
          </StyledContent>
        )}
      </StyledContentWrapper>
      {closable && (
        <AlertCloseButton
          hasChildren={!!children}
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
