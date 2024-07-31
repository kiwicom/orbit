/**
#####################################################
#                                                   #
# DO NOT EDIT DIRECTLY, THIS FILE IS AUTO-GENERATED #
#                                                   #
#####################################################

If you want to update some tokens:
- please do so in /definitions folder
- run @kiwicom/orbit-design-tokens "build" script
*/
import transparentColor from "./transparentColor";
import boxShadow from "./boxShadow";
import type { Foundation } from "./defaultFoundation";

export interface Tokens {
  paddingAlert: string;
  paddingAlertWithIcon: string;
  paddingBadge: string;
  paddingButtonLarge: string;
  paddingButtonLargeWithIcons: string;
  paddingButtonLargeWithLeftIcon: string;
  paddingButtonLargeWithRightIcon: string;
  paddingButtonNormal: string;
  paddingButtonNormalWithIcons: string;
  paddingButtonNormalWithLeftIcon: string;
  paddingButtonNormalWithRightIcon: string;
  paddingButtonWithoutText: string;
  paddingButtonSmall: string;
  paddingButtonSmallWithIcons: string;
  paddingButtonSmallWithLeftIcon: string;
  paddingButtonSmallWithRightIcon: string;
  paddingInputSmall: string;
  paddingInputNormal: string;
  paddingInputFile: string;
  paddingLoading: string;
  paddingTable: string;
  paddingTableCompact: string;
  paddingTag: string;
  paddingTagRemovable: string;
  paddingTagRemovableWithIcon: string;
  paddingTagWithIcon: string;
  paddingTextareaSmall: string;
  paddingTextareaNormal: string;
  backgroundAlertCritical: string;
  backgroundAlertInfo: string;
  backgroundAlertSuccess: string;
  backgroundAlertWarning: string;
  backgroundBadgeCritical: string;
  backgroundBadgeCriticalSubtle: string;
  backgroundBadgeDark: string;
  backgroundBadgeInfo: string;
  backgroundBadgeInfoSubtle: string;
  backgroundBadgeNeutral: string;
  backgroundBadgeSuccess: string;
  backgroundBadgeSuccessSubtle: string;
  backgroundBadgeWarning: string;
  backgroundBadgeWarningSubtle: string;
  backgroundBadgeWhite: string;
  backgroundButtonLinkCritical: string;
  backgroundButtonLinkCriticalHover: string;
  backgroundButtonLinkCriticalActive: string;
  backgroundButtonLinkPrimary: string;
  backgroundButtonLinkPrimaryHover: string;
  backgroundButtonLinkPrimaryActive: string;
  backgroundButtonLinkSecondary: string;
  backgroundButtonLinkSecondaryHover: string;
  backgroundButtonLinkSecondaryActive: string;
  backgroundButtonBundleBasic: string;
  backgroundButtonBundleBasicHover: string;
  backgroundButtonBundleBasicActive: string;
  backgroundButtonBundleMedium: string;
  backgroundButtonBundleMediumHover: string;
  backgroundButtonBundleMediumActive: string;
  backgroundButtonBundleTop: string;
  backgroundButtonBundleTopHover: string;
  backgroundButtonBundleTopActive: string;
  backgroundButtonCriticalSubtle: string;
  backgroundButtonCriticalSubtleHover: string;
  backgroundButtonCriticalSubtleActive: string;
  backgroundButtonCriticalSubtleFocus: string;
  backgroundButtonCritical: string;
  backgroundButtonCriticalHover: string;
  backgroundButtonCriticalActive: string;
  backgroundButtonBordered: string;
  backgroundButtonBorderedHover: string;
  backgroundButtonBorderedActive: string;
  backgroundButtonInfo: string;
  backgroundButtonInfoHover: string;
  backgroundButtonInfoActive: string;
  backgroundButtonPrimarySubtle: string;
  backgroundButtonPrimarySubtleHover: string;
  backgroundButtonPrimarySubtleActive: string;
  backgroundButtonPrimarySubtleFocus: string;
  backgroundButtonPrimary: string;
  backgroundButtonPrimaryHover: string;
  backgroundButtonPrimaryActive: string;
  backgroundButtonSecondary: string;
  backgroundButtonSecondaryHover: string;
  backgroundButtonSecondaryActive: string;
  backgroundButtonSuccess: string;
  backgroundButtonSuccessHover: string;
  backgroundButtonSuccessActive: string;
  backgroundButtonWarning: string;
  backgroundButtonWarningHover: string;
  backgroundButtonWarningActive: string;
  backgroundButtonWhite: string;
  backgroundButtonWhiteHover: string;
  backgroundButtonWhiteActive: string;
  backgroundButtonWhiteBordered: string;
  backgroundButtonWhiteBorderedHover: string;
  backgroundButtonWhiteBorderedActive: string;
  backgroundButtonFacebook: string;
  backgroundButtonFacebookHover: string;
  backgroundButtonFacebookActive: string;
  backgroundButtonGoogle: string;
  backgroundButtonGoogleHover: string;
  backgroundButtonGoogleActive: string;
  backgroundCard: string;
  backgroundCarrierLogo: string;
  backgroundCountryFlag: string;
  backgroundServiceLogo: string;
  backgroundTooltip: string;
  backgroundTooltipLargeMobile: string;
  backgroundSeparator: string;
  backgroundSwitch: string;
  backgroundSwitchChecked: string;
  backgroundInput: string;
  backgroundInputDisabled: string;
  backgroundModal: string;
  backgroundTable: string;
  backgroundTableEven: string;
  backgroundTableHover: string;
  backgroundTableShadowLeft: string;
  backgroundTableShadowRight: string;
  backgroundTag: string;
  backgroundTagHover: string;
  backgroundTagActive: string;
  backgroundTagSelected: string;
  backgroundTagSelectedHover: string;
  backgroundTagSelectedActive: string;
  colorAlertIconCritical: string;
  colorAlertIconInfo: string;
  colorAlertIconSuccess: string;
  colorAlertIconWarning: string;
  colorFormLabel: string;
  colorFormLabelFilled: string;
  colorIconCheckboxRadio: string;
  colorIconCheckboxRadioDisabled: string;
  colorIconInput: string;
  colorIconRadioButton: string;
  colorIconRadioButtonDisabled: string;
  colorInfoCheckBoxRadio: string;
  colorPlaceholderInput: string;
  colorPlaceholderInputError: string;
  colorPlaceholderInputFile: string;
  colorPlaceholderInputFileError: string;
  colorTextInput: string;
  colorTextInputDisabled: string;
  colorTextInputPrefix: string;
  colorHeading: string;
  colorHeadingInverted: string;
  colorIconPrimary: string;
  colorIconSecondary: string;
  colorIconTertiary: string;
  colorIconInfo: string;
  colorIconSuccess: string;
  colorIconWarning: string;
  colorIconCritical: string;
  colorStopoverArrow: string;
  colorTextLinkPrimary: string;
  colorTextLinkPrimaryHover: string;
  colorTextLinkSecondary: string;
  colorTextLinkSecondaryHover: string;
  colorTextPrimary: string;
  colorTextSecondary: string;
  colorTextInfo: string;
  colorTextSuccess: string;
  colorTextWarning: string;
  colorTextCritical: string;
  colorTextWhite: string;
  colorTextError: string;
  colorTextAlertCritical: string;
  colorTextAlertInfo: string;
  colorTextAlertSuccess: string;
  colorTextAlertWarning: string;
  colorTextAlertLink: string;
  colorTextBadgeCritical: string;
  colorTextBadgeDark: string;
  colorTextBadgeInfo: string;
  colorTextBadgeNeutral: string;
  colorTextBadgeSuccess: string;
  colorTextBadgeWarning: string;
  colorTextBadgeWhite: string;
  colorTextButtonLinkCritical: string;
  colorTextButtonLinkCriticalHover: string;
  colorTextButtonLinkCriticalActive: string;
  colorTextButtonLinkPrimary: string;
  colorTextButtonLinkPrimaryHover: string;
  colorTextButtonLinkPrimaryActive: string;
  colorTextButtonLinkSecondary: string;
  colorTextButtonLinkSecondaryHover: string;
  colorTextButtonLinkSecondaryActive: string;
  colorTextButtonLinkSecondaryCompactHover: string;
  colorTextButtonLinkSecondaryCompactActive: string;
  colorTextButtonCriticalSubtle: string;
  colorTextButtonCriticalSubtleHover: string;
  colorTextButtonCriticalSubtleActive: string;
  colorTextButtonCritical: string;
  colorTextButtonCriticalHover: string;
  colorTextButtonCriticalActive: string;
  colorTextButtonCriticalBordered: string;
  colorTextButtonCriticalBorderedHover: string;
  colorTextButtonCriticalBorderedActive: string;
  colorTextButtonFilled: string;
  colorTextButtonFilledHover: string;
  colorTextButtonFilledActive: string;
  colorTextButtonInfo: string;
  colorTextButtonInfoHover: string;
  colorTextButtonInfoActive: string;
  colorTextButtonInfoBordered: string;
  colorTextButtonInfoBorderedHover: string;
  colorTextButtonInfoBorderedActive: string;
  colorTextButtonPrimarySubtle: string;
  colorTextButtonPrimarySubtleHover: string;
  colorTextButtonPrimarySubtleActive: string;
  colorTextButtonPrimary: string;
  colorTextButtonPrimaryHover: string;
  colorTextButtonPrimaryActive: string;
  colorTextButtonPrimaryBordered: string;
  colorTextButtonPrimaryBorderedHover: string;
  colorTextButtonPrimaryBorderedActive: string;
  colorTextButtonSecondary: string;
  colorTextButtonSecondaryHover: string;
  colorTextButtonSecondaryActive: string;
  colorTextButtonSecondaryBordered: string;
  colorTextButtonSecondaryBorderedHover: string;
  colorTextButtonSecondaryBorderedActive: string;
  colorTextButtonSuccess: string;
  colorTextButtonSuccessHover: string;
  colorTextButtonSuccessActive: string;
  colorTextButtonSuccessBordered: string;
  colorTextButtonSuccessBorderedHover: string;
  colorTextButtonSuccessBorderedActive: string;
  colorTextButtonWarning: string;
  colorTextButtonWarningHover: string;
  colorTextButtonWarningActive: string;
  colorTextButtonWarningBordered: string;
  colorTextButtonWarningBorderedHover: string;
  colorTextButtonWarningBorderedActive: string;
  colorTextButtonWhite: string;
  colorTextButtonWhiteHover: string;
  colorTextButtonWhiteActive: string;
  colorTextButtonWhiteBordered: string;
  colorTextButtonWhiteBorderedHover: string;
  colorTextButtonWhiteBorderedActive: string;
  colorTextButtonFacebook: string;
  colorTextButtonFacebookHover: string;
  colorTextButtonFacebookActive: string;
  colorTextButtonFacebookBordered: string;
  colorTextButtonFacebookBorderedHover: string;
  colorTextButtonFacebookBorderedActive: string;
  colorTextButtonGoogle: string;
  colorTextButtonGoogleHover: string;
  colorTextButtonGoogleActive: string;
  colorTextButtonGoogleBordered: string;
  colorTextButtonGoogleBorderedHover: string;
  colorTextButtonGoogleBorderedActive: string;
  colorTextLoading: string;
  colorTextTable: string;
  colorTextTag: string;
  colorTextTagSelected: string;
  alertBackgroundCritical: string;
  alertBackgroundInfo: string;
  alertBackgroundSuccess: string;
  alertBackgroundWarning: string;
  alertIconCritical: string;
  alertIconInfo: string;
  alertIconSuccess: string;
  alertIconWarning: string;
  alertColorTextCritical: string;
  alertColorTextInfo: string;
  alertColorTextSuccess: string;
  alertColorTextWarning: string;
  alertColorTextLink: string;
  badgeBorderRadius: string;
  badgeBundleBasicBackground: string;
  badgeBundleBasicForeground: string;
  badgeBundleMediumBackground: string;
  badgeBundleMediumForeground: string;
  badgeBundleTopBackground: string;
  badgeBundleTopForeground: string;
  badgeCriticalBackground: string;
  badgeCriticalForeground: string;
  badgeCriticalSubtleBackground: string;
  badgeCriticalSubtleForeground: string;
  badgeDarkBackground: string;
  badgeDarkForeground: string;
  badgeInfoBackground: string;
  badgeInfoForeground: string;
  badgeInfoSubtleBackground: string;
  badgeInfoSubtleForeground: string;
  badgeNeutralBackground: string;
  badgeNeutralForeground: string;
  badgeSuccessBackground: string;
  badgeSuccessForeground: string;
  badgeSuccessSubtleBackground: string;
  badgeSuccessSubtleForeground: string;
  badgeWarningBackground: string;
  badgeWarningForeground: string;
  badgeWarningSubtleBackground: string;
  badgeWarningSubtleForeground: string;
  badgeWhiteBackground: string;
  badgeWhiteForeground: string;
  borderRadiusBadge: string;
  marginBadgeIcon: string;
  marginButtonGroup: string;
  marginButtonIcon: string;
  buttonLinkCriticalBackground: string;
  buttonLinkCriticalBackgroundHover: string;
  buttonLinkCriticalBackgroundActive: string;
  buttonLinkCriticalForeground: string;
  buttonLinkCriticalForegroundHover: string;
  buttonLinkCriticalForegroundActive: string;
  buttonLinkPrimaryBackground: string;
  buttonLinkPrimaryBackgroundHover: string;
  buttonLinkPrimaryBackgroundActive: string;
  buttonLinkPrimaryForeground: string;
  buttonLinkPrimaryForegroundHover: string;
  buttonLinkPrimaryForegroundActive: string;
  buttonLinkSecondaryBackground: string;
  buttonLinkSecondaryBackgroundHover: string;
  buttonLinkSecondaryBackgroundActive: string;
  buttonLinkSecondaryForeground: string;
  buttonLinkSecondaryForegroundHover: string;
  buttonLinkSecondaryForegroundActive: string;
  buttonBundleBasicBackground: string;
  buttonBundleBasicBackgroundHover: string;
  buttonBundleBasicBackgroundActive: string;
  buttonBundleMediumBackground: string;
  buttonBundleMediumBackgroundHover: string;
  buttonBundleMediumBackgroundActive: string;
  buttonBundleTopBackground: string;
  buttonBundleTopBackgroundHover: string;
  buttonBundleTopBackgroundActive: string;
  buttonCriticalSubtleBackground: string;
  buttonCriticalSubtleBackgroundHover: string;
  buttonCriticalSubtleBackgroundActive: string;
  buttonCriticalSubtleForeground: string;
  buttonCriticalSubtleForegroundHover: string;
  buttonCriticalSubtleForegroundActive: string;
  buttonCriticalBackground: string;
  buttonCriticalBackgroundHover: string;
  buttonCriticalBackgroundActive: string;
  buttonCriticalForeground: string;
  buttonCriticalForegroundHover: string;
  buttonCriticalForegroundActive: string;
  buttonSmallFontSize: string;
  buttonSmallPadding: string;
  buttonSmallBothIconsPadding: string;
  buttonSmallLeftIconPadding: string;
  buttonSmallRightIconPadding: string;
  buttonNormalFontSize: string;
  buttonNormalPadding: string;
  buttonNormalBothIconsPadding: string;
  buttonNormalLeftIconPadding: string;
  buttonNormalRightIconPadding: string;
  buttonLargeFontSize: string;
  buttonLargePadding: string;
  buttonLargeBothIconsPadding: string;
  buttonLargeLeftIconPadding: string;
  buttonLargeRightIconPadding: string;
  buttonInfoBackground: string;
  buttonInfoBackgroundHover: string;
  buttonInfoBackgroundActive: string;
  buttonInfoForeground: string;
  buttonInfoForegroundHover: string;
  buttonInfoForegroundActive: string;
  buttonWithoutTextPadding: string;
  buttonPaddingXSmall: string;
  buttonPaddingSmall: string;
  buttonPaddingNormal: string;
  buttonPaddingLarge: string;
  buttonPrimarySubtleBackground: string;
  buttonPrimarySubtleBackgroundHover: string;
  buttonPrimarySubtleBackgroundActive: string;
  buttonPrimarySubtleForeground: string;
  buttonPrimarySubtleForegroundHover: string;
  buttonPrimarySubtleForegroundActive: string;
  buttonPrimaryBackground: string;
  buttonPrimaryBackgroundHover: string;
  buttonPrimaryBackgroundActive: string;
  buttonPrimaryForeground: string;
  buttonPrimaryForegroundHover: string;
  buttonPrimaryForegroundActive: string;
  buttonPrimaryBorderColorFocus: string;
  buttonSecondaryBackground: string;
  buttonSecondaryBackgroundHover: string;
  buttonSecondaryBackgroundActive: string;
  buttonSecondaryForeground: string;
  buttonSecondaryForegroundHover: string;
  buttonSecondaryForegroundActive: string;
  buttonSuccessBackground: string;
  buttonSuccessBackgroundHover: string;
  buttonSuccessBackgroundActive: string;
  buttonSuccessForeground: string;
  buttonSuccessForegroundHover: string;
  buttonSuccessForegroundActive: string;
  buttonWarningBackground: string;
  buttonWarningBackgroundHover: string;
  buttonWarningBackgroundActive: string;
  buttonWarningForeground: string;
  buttonWarningForegroundHover: string;
  buttonWarningForegroundActive: string;
  buttonWhiteBackground: string;
  buttonWhiteBackgroundHover: string;
  buttonWhiteBackgroundActive: string;
  buttonWhiteForeground: string;
  buttonWhiteForegroundHover: string;
  buttonWhiteForegroundActive: string;
  buttonWhiteBorderColorFocus: string;
  boxShadowButtonFocus: string;
  borderColorButtonPrimaryBordered: string;
  borderColorButtonPrimaryBorderedHover: string;
  borderColorButtonPrimaryBorderedActive: string;
  borderColorButtonSecondaryBordered: string;
  borderColorButtonSecondaryBorderedHover: string;
  borderColorButtonSecondaryBorderedActive: string;
  borderColorButtonFacebookBordered: string;
  borderColorButtonFacebookBorderedHover: string;
  borderColorButtonFacebookBorderedActive: string;
  borderColorButtonGoogleBordered: string;
  borderColorButtonGoogleBorderedHover: string;
  borderColorButtonGoogleBorderedActive: string;
  borderColorButtonInfoBordered: string;
  borderColorButtonInfoBorderedHover: string;
  borderColorButtonInfoBorderedActive: string;
  borderColorButtonSuccessBordered: string;
  borderColorButtonSuccessBorderedHover: string;
  borderColorButtonSuccessBorderedActive: string;
  borderColorButtonWarningBordered: string;
  borderColorButtonWarningBorderedHover: string;
  borderColorButtonWarningBorderedActive: string;
  borderColorButtonCriticalBordered: string;
  borderColorButtonCriticalBorderedHover: string;
  borderColorButtonCriticalBorderedActive: string;
  borderColorButtonWhiteBordered: string;
  borderColorButtonWhiteBorderedHover: string;
  borderColorButtonWhiteBorderedActive: string;
  borderColorCard: string;
  borderColorCheckboxRadio: string;
  borderColorCheckboxRadioActive: string;
  borderColorCheckboxRadioError: string;
  borderColorCheckboxRadioFocus: string;
  borderColorCheckboxRadioHover: string;
  borderColorInput: string;
  borderColorInputActive: string;
  borderColorInputError: string;
  borderColorInputErrorFocus: string;
  borderColorInputErrorHover: string;
  borderColorInputFocus: string;
  borderColorInputHover: string;
  borderColorModal: string;
  borderColorTable: string;
  borderColorTableCell: string;
  borderColorTableHead: string;
  borderColorTag: string;
  borderColorTagFocus: string;
  modifierScaleButtonActive: number;
  modifierScaleCheckboxRadioActive: number;
  fontSizeButtonSmall: string;
  fontSizeButtonNormal: string;
  fontSizeButtonLarge: string;
  fontSizeInputSmall: string;
  fontSizeInputNormal: string;
  fontSizeFormFeedback: string;
  fontSizeFormLabel: string;
  fontSizeMessage: string;
  fontSizeHeadingDisplay: string;
  fontSizeHeadingDisplaySubtitle: string;
  fontSizeHeadingTitle1: string;
  fontSizeHeadingTitle2: string;
  fontSizeHeadingTitle3: string;
  fontSizeHeadingTitle4: string;
  fontSizeHeadingTitle5: string;
  fontSizeHeadingTitle6: string;
  borderStyleCard: string;
  borderStyleInput: string;
  borderWidthCard: string;
  borderWidthInput: string;
  borderWidthInputFocus: string;
  widthCarrierLogo: string;
  widthIconSmall: string;
  widthIconMedium: string;
  widthIconLarge: string;
  widthBadgeCircled: string;
  widthCheckbox: string;
  widthRadioButton: string;
  widthStopoverArrow: string;
  widthCountryFlag: string;
  widthModalSmall: string;
  widthModalNormal: string;
  widthModalLarge: string;
  widthModalExtraLarge: string;
  heightCarrierLogo: string;
  heightButtonSmall: string;
  heightButtonNormal: string;
  heightButtonLarge: string;
  heightInputSmall: string;
  heightInputNormal: string;
  heightInputLarge: string;
  heightIconSmall: string;
  heightIconMedium: string;
  heightIconLarge: string;
  heightBadge: string;
  heightCheckbox: string;
  heightRadioButton: string;
  heightStopoverArrow: string;
  heightCountryFlag: string;
  heightServiceLogoSmall: string;
  heightServiceLogoMedium: string;
  heightServiceLogoLarge: string;
  heightSeparator: string;
  heightInputGroupSeparatorSmall: string;
  heightInputGroupSeparatorNormal: string;
  heightIllustrationSmall: string;
  heightIllustrationMedium: string;
  countryFlagShadow: string;
  countryFlagBackground: string;
  countryFlagSmallHeight: string;
  countryFlagSmallWidth: string;
  countryFlagMediumHeight: string;
  countryFlagMediumWidth: string;
  dialogBorderRadiusDesktop: string;
  dialogBorderRadiusMobile: string;
  dialogWidth: string;
  drawerOverlayBackground: string;
  formBoxSmallHeight: string;
  formBoxNormalHeight: string;
  formBoxLargeHeight: string;
  formElementBackground: string;
  formElementDisabledBackground: string;
  formElementDisabledForeground: string;
  formElementDisabledOpacity: string;
  formElementBorderColorDisabled: string;
  formElementBorderColor: string;
  formElementBorderColorHover: string;
  formElementBorderColorActive: string;
  formElementBorderColorFocus: string;
  formElementBorderColorError: string;
  formElementBorderColorErrorHover: string;
  formElementBoxShadow: string;
  formElementBoxShadowError: string;
  formElementBoxShadowErrorHover: string;
  formElementBoxShadowHover: string;
  formElementFocusBoxShadow: string;
  formElementErrorFocusBoxShadow: string;
  formElementNormalFontSize: string;
  formElementNormalPadding: string;
  formElementForeground: string;
  formElementFilledForeground: string;
  formElementLabelForeground: string;
  formElementLabelFilledForeground: string;
  formElementPrefixForeground: string;
  formElementSmallPadding: string;
  marginTopFormFeedback: string;
  opacityCheckboxDisabled: string;
  opacityRadioButtonDisabled: string;
  headingDisplayFontSize: string;
  headingDisplayFontWeight: string;
  headingDisplayLineHeight: string;
  headingDisplaySubtitleFontSize: string;
  headingDisplaySubtitleFontWeight: string;
  headingDisplaySubtitleLineHeight: string;
  headingTitle1FontSize: string;
  headingTitle1FontWeight: string;
  headingTitle1LineHeight: string;
  headingTitle2FontSize: string;
  headingTitle2FontWeight: string;
  headingTitle2LineHeight: string;
  headingTitle3FontSize: string;
  headingTitle3FontWeight: string;
  headingTitle3LineHeight: string;
  headingTitle4FontSize: string;
  headingTitle4FontWeight: string;
  headingTitle4LineHeight: string;
  headingTitle5FontSize: string;
  headingTitle5FontWeight: string;
  headingTitle5LineHeight: string;
  headingTitle6FontSize: string;
  headingTitle6FontWeight: string;
  headingTitle6LineHeight: string;
  headingForeground: string;
  headingForegroundInverted: string;
  fontWeightHeadingDisplay: string;
  fontWeightHeadingDisplaySubtitle: string;
  fontWeightHeadingTitle1: string;
  fontWeightHeadingTitle2: string;
  fontWeightHeadingTitle3: string;
  fontWeightHeadingTitle4: string;
  fontWeightHeadingTitle5: string;
  fontWeightHeadingTitle6: string;
  fontWeightTableHead: string;
  fontWeightLinks: string;
  lineHeightHeading: string;
  lineHeightHeadingDisplay: string;
  lineHeightHeadingDisplaySubtitle: string;
  lineHeightHeadingTitle1: string;
  lineHeightHeadingTitle2: string;
  lineHeightHeadingTitle3: string;
  lineHeightHeadingTitle4: string;
  lineHeightHeadingTitle5: string;
  lineHeightHeadingTitle6: string;
  iconPrimaryForeground: string;
  iconSecondaryForeground: string;
  iconTertiaryForeground: string;
  iconInfoForeground: string;
  iconSuccessForeground: string;
  iconWarningForeground: string;
  iconCriticalForeground: string;
  iconSmallSize: string;
  iconMediumSize: string;
  iconLargeSize: string;
  iconExtraLargeSize: string;
  illustrationExtraSmallHeight: string;
  illustrationSmallHeight: string;
  illustrationMediumHeight: string;
  illustrationLargeHeight: string;
  illustrationDisplayHeight: string;
  loadingForeground: string;
  modalBorderRadiusMobile: string;
  modalBorderRadius: string;
  modalExtraSmallWidth: string;
  modalSmallWidth: string;
  modalNormalWidth: string;
  modalLargeWidth: string;
  modalExtraLargeWidth: string;
  marginBottomSelectSuffix: string;
  paddingLeftSelectPrefix: string;
  socialButtonAppleBackground: string;
  socialButtonAppleBackgroundHover: string;
  socialButtonAppleBackgroundActive: string;
  socialButtonAppleForeground: string;
  socialButtonAppleForegroundHover: string;
  socialButtonAppleForegroundActive: string;
  socialButtonAppleBorderColorFocus: string;
  socialButtonAppleIconForeground: string;
  socialButtonFacebookBackground: string;
  socialButtonFacebookBackgroundHover: string;
  socialButtonFacebookBackgroundActive: string;
  socialButtonFacebookForeground: string;
  socialButtonFacebookForegroundHover: string;
  socialButtonFacebookForegroundActive: string;
  socialButtonFacebookIconForeground: string;
  socialButtonGoogleBackground: string;
  socialButtonGoogleBackgroundHover: string;
  socialButtonGoogleBackgroundActive: string;
  socialButtonGoogleForeground: string;
  socialButtonGoogleForegroundHover: string;
  socialButtonGoogleForegroundActive: string;
  socialButtonGoogleIconForeground: string;
  socialButtonTwitterBackground: string;
  socialButtonTwitterBackgroundHover: string;
  socialButtonTwitterBackgroundActive: string;
  socialButtonTwitterForeground: string;
  socialButtonTwitterForegroundHover: string;
  socialButtonTwitterForegroundActive: string;
  socialButtonTwitterBorderColorFocus: string;
  socialButtonTwitterIconForeground: string;
  tabBundleBasicForeground: string;
  tabBundleBasicBackground: string;
  tabBundleBasicBackgroundHover: string;
  tabBundleBasicBackgroundActive: string;
  tabBundleMediumForeground: string;
  tabBundleMediumBackground: string;
  tabBundleMediumBackgroundHover: string;
  tabBundleMediumBackgroundActive: string;
  tabBundleTopBackground: string;
  tabBundleTopBackgroundHover: string;
  tabBundleTopForeground: string;
  tagColoredBackground: string;
  tagColoredBackgroundHover: string;
  tagColoredBackgroundActive: string;
  tagColoredForeground: string;
  tagNeutralBackground: string;
  tagNeutralBackgroundHover: string;
  tagNeutralBackgroundActive: string;
  tagNeutralForeground: string;
  textLinkPrimaryForeground: string;
  textLinkPrimaryForegroundHover: string;
  textLinkPrimaryForegroundActive: string;
  textLinkSecondaryForeground: string;
  textLinkSecondaryForegroundHover: string;
  textLinkSecondaryForegroundActive: string;
  textLinkSuccessForeground: string;
  textLinkSuccessForegroundHover: string;
  textLinkSuccessForegroundActive: string;
  textLinkInfoForeground: string;
  textLinkInfoForegroundHover: string;
  textLinkInfoForegroundActive: string;
  textLinkWarningForeground: string;
  textLinkWarningForegroundHover: string;
  textLinkWarningForegroundActive: string;
  textLinkCriticalForeground: string;
  textLinkCriticalForegroundHover: string;
  textLinkCriticalForegroundActive: string;
  textLinkWhiteForeground: string;
  textLinkWhiteForegroundHover: string;
  textLinkWhiteForegroundActive: string;
  textDecorationTextLinkPrimary: string;
  textDecorationTextLinkPrimaryHover: string;
  textDecorationTextLinkSecondary: string;
  textDecorationTextLinkSecondaryHover: string;
  textPrimaryBackground: string;
  textPrimaryForeground: string;
  textSecondaryBackground: string;
  textSecondaryForeground: string;
  textInfoBackground: string;
  textInfoForeground: string;
  textSuccessBackground: string;
  textSuccessForeground: string;
  textWarningBackground: string;
  textWarningForeground: string;
  textCriticalBackground: string;
  textCriticalForeground: string;
  textWhiteBackground: string;
  textWhiteForeground: string;
  backgroundIllustration: string;
  borderRadius50: string;
  borderRadius100: string;
  borderRadius150: string;
  borderRadius300: string;
  borderRadius400: string;
  borderRadiusCircle: string;
  borderRadiusSmall: string;
  borderRadiusNormal: string;
  borderRadiusLarge: string;
  borderRadiusNone: string;
  borderRadiusFull: string;
  breakpointMediumMobile: number;
  breakpointLargeMobile: number;
  breakpointTablet: number;
  breakpointDesktop: number;
  breakpointLargeDesktop: number;
  widthBreakpointMediumMobile: number;
  widthBreakpointLargeMobile: number;
  widthBreakpointTablet: number;
  widthBreakpointDesktop: number;
  widthBreakpointLargeDesktop: number;
  durationFast: string;
  durationNormal: string;
  durationSlow: string;
  elevationSuppressedBackground: string;
  elevationFlatBackground: string;
  elevationFlatBorderColor: string;
  elevationFlatBorderSize: string;
  elevationActionBackground: string;
  elevationActionBoxShadow: string;
  elevationActionActiveBackground: string;
  elevationActionActiveBoxShadow: string;
  elevationFixedBackground: string;
  elevationFixedBoxShadow: string;
  elevationFixedReverseBackground: string;
  elevationFixedReverseBoxShadow: string;
  elevationRaisedBackground: string;
  elevationRaisedBoxShadow: string;
  elevationRaisedReverseBackground: string;
  elevationRaisedReverseBoxShadow: string;
  elevationOverlayBackground: string;
  elevationOverlayBoxShadow: string;
  backgroundBody: string;
  boxShadowAction: string;
  boxShadowActionActive: string;
  boxShadowFixed: string;
  boxShadowFixedReverse: string;
  boxShadowOverlay: string;
  boxShadowRaised: string;
  boxShadowRaisedReverse: string;
  opacityOverlay: string;
  paletteBlueLight: string;
  paletteBlueLightHover: string;
  paletteBlueLightActive: string;
  paletteBlueNormal: string;
  paletteBlueNormalHover: string;
  paletteBlueNormalActive: string;
  paletteBlueDark: string;
  paletteBlueDarkHover: string;
  paletteBlueDarkActive: string;
  paletteBlueDarker: string;
  paletteBundleBasic: string;
  paletteBundleMedium: string;
  paletteCloudLight: string;
  paletteCloudLightHover: string;
  paletteCloudLightActive: string;
  paletteCloudNormal: string;
  paletteCloudNormalHover: string;
  paletteCloudNormalActive: string;
  paletteCloudDark: string;
  paletteCloudDarkHover: string;
  paletteCloudDarkActive: string;
  paletteGreenLight: string;
  paletteGreenLightHover: string;
  paletteGreenLightActive: string;
  paletteGreenNormal: string;
  paletteGreenNormalHover: string;
  paletteGreenNormalActive: string;
  paletteGreenDark: string;
  paletteGreenDarkHover: string;
  paletteGreenDarkActive: string;
  paletteGreenDarker: string;
  paletteInkDark: string;
  paletteInkDarkHover: string;
  paletteInkDarkActive: string;
  paletteInkLight: string;
  paletteInkLightHover: string;
  paletteInkLightActive: string;
  paletteInkNormal: string;
  paletteInkNormalHover: string;
  paletteInkNormalActive: string;
  paletteOrangeLight: string;
  paletteOrangeLightHover: string;
  paletteOrangeLightActive: string;
  paletteOrangeNormal: string;
  paletteOrangeNormalHover: string;
  paletteOrangeNormalActive: string;
  paletteOrangeDark: string;
  paletteOrangeDarkHover: string;
  paletteOrangeDarkActive: string;
  paletteOrangeDarker: string;
  paletteProductLight: string;
  paletteProductLightHover: string;
  paletteProductLightActive: string;
  paletteProductNormal: string;
  paletteProductNormalHover: string;
  paletteProductNormalActive: string;
  paletteProductDark: string;
  paletteProductDarkHover: string;
  paletteProductDarkActive: string;
  paletteProductDarker: string;
  paletteRedLight: string;
  paletteRedLightHover: string;
  paletteRedLightActive: string;
  paletteRedNormal: string;
  paletteRedNormalHover: string;
  paletteRedNormalActive: string;
  paletteRedDark: string;
  paletteRedDarkHover: string;
  paletteRedDarkActive: string;
  paletteRedDarker: string;
  paletteSocialFacebook: string;
  paletteSocialFacebookHover: string;
  paletteSocialFacebookActive: string;
  paletteWhite: string;
  paletteWhiteNormal: string;
  paletteWhiteHover: string;
  paletteWhiteActive: string;
  spaceXXXSmall: string;
  spaceXXSmall: string;
  spaceXSmall: string;
  spaceSmall: string;
  spaceMedium: string;
  spaceLarge: string;
  spaceXLarge: string;
  spaceXXLarge: string;
  spaceXXXLarge: string;
  fontFamily: string;
  fontSizeTextSmall: string;
  fontSizeTextNormal: string;
  fontSizeTextLarge: string;
  fontSizeTextExtraLarge: string;
  lineHeightText: string;
  lineHeightSmall: string;
  lineHeightNormal: string;
  lineHeightLarge: string;
  lineHeightExtraLarge: string;
  lineHeightTextSmall: string;
  lineHeightTextNormal: string;
  lineHeightTextLarge: string;
  lineHeightTextExtraLarge: string;
  fontWeightNormal: string;
  fontWeightMedium: string;
  fontWeightBold: string;
  zIndexDefault: number;
  zIndexSticky: number;
  zIndexNavigationBar: number;
  zIndexModalOverlay: number;
  zIndexDrawer: number;
  zIndexModal: number;
  zIndexOnTheTop: number;
}
export type CreateTokens = (foundation: Foundation) => Tokens;
const createTokens: CreateTokens = foundation => ({
  paddingAlert: foundation.space.medium,
  paddingAlertWithIcon: foundation.space.small,
  paddingBadge: `0 ${foundation.space.XSmall}`,
  paddingButtonLarge: `0 28px`,
  paddingButtonLargeWithIcons: `0 ${foundation.space.medium}`,
  paddingButtonLargeWithLeftIcon: `0 28px 0 ${foundation.space.medium}`,
  paddingButtonLargeWithRightIcon: `0 ${foundation.space.medium} 0 28px`,
  paddingButtonNormal: `0 ${foundation.space.medium}`,
  paddingButtonNormalWithIcons: `0 ${foundation.space.small}`,
  paddingButtonNormalWithLeftIcon: `0 ${foundation.space.medium} 0 ${foundation.space.small}`,
  paddingButtonNormalWithRightIcon: `0 ${foundation.space.small} 0 ${foundation.space.medium}`,
  paddingButtonWithoutText: "0",
  paddingButtonSmall: `0 ${foundation.space.small}`,
  paddingButtonSmallWithIcons: `0 ${foundation.space.XSmall}`,
  paddingButtonSmallWithLeftIcon: `0 ${foundation.space.small} 0 ${foundation.space.XSmall}`,
  paddingButtonSmallWithRightIcon: `0 ${foundation.space.XSmall} 0 ${foundation.space.small}`,
  paddingInputSmall: `0 ${foundation.space.small}`,
  paddingInputNormal: `0 ${foundation.space.small}`,
  paddingInputFile: `0 0 0 6px`,
  paddingLoading: foundation.space.small,
  paddingTable: `${foundation.space.small} ${foundation.space.medium}`,
  paddingTableCompact: `${foundation.space.XSmall} ${foundation.space.small}`,
  paddingTag: `6px ${foundation.space.XSmall}`,
  paddingTagRemovable: `6px 6px 6px ${foundation.space.XSmall}`,
  paddingTagRemovableWithIcon: "6px",
  paddingTagWithIcon: `6px ${foundation.space.XSmall} 6px 6px`,
  paddingTextareaSmall: `${foundation.space.XSmall} ${foundation.space.small}`,
  paddingTextareaNormal: foundation.space.small,
  backgroundAlertCritical: foundation.palette.red.light,
  backgroundAlertInfo: foundation.palette.blue.light,
  backgroundAlertSuccess: foundation.palette.green.light,
  backgroundAlertWarning: foundation.palette.orange.light,
  backgroundBadgeCritical: foundation.palette.red.normal,
  backgroundBadgeCriticalSubtle: foundation.palette.red.light,
  backgroundBadgeDark: foundation.palette.ink.dark,
  backgroundBadgeInfo: foundation.palette.blue.normal,
  backgroundBadgeInfoSubtle: foundation.palette.blue.light,
  backgroundBadgeNeutral: foundation.palette.cloud.light,
  backgroundBadgeSuccess: foundation.palette.green.normal,
  backgroundBadgeSuccessSubtle: foundation.palette.green.light,
  backgroundBadgeWarning: foundation.palette.orange.normal,
  backgroundBadgeWarningSubtle: foundation.palette.orange.light,
  backgroundBadgeWhite: foundation.palette.white.normal,
  backgroundButtonLinkCritical: "transparent",
  backgroundButtonLinkCriticalHover: foundation.palette.red.lightHover,
  backgroundButtonLinkCriticalActive: foundation.palette.red.lightActive,
  backgroundButtonLinkPrimary: "transparent",
  backgroundButtonLinkPrimaryHover: foundation.palette.product.lightHover,
  backgroundButtonLinkPrimaryActive: foundation.palette.product.lightActive,
  backgroundButtonLinkSecondary: "transparent",
  backgroundButtonLinkSecondaryHover: foundation.palette.cloud.lightHover,
  backgroundButtonLinkSecondaryActive: foundation.palette.cloud.lightActive,
  backgroundButtonBundleBasic: "linear-gradient(to top right, #E13E3B 0%, #E87E09 100%)",
  backgroundButtonBundleBasicHover: "linear-gradient(to top right, #BD2825 0%, #D67000 100%)",
  backgroundButtonBundleBasicActive: "linear-gradient(to top right, #9F1816 0%, #C36802 100%)",
  backgroundButtonBundleMedium: "linear-gradient(to top right, #3719AB 0%, #8539DB 100%)",
  backgroundButtonBundleMediumHover: "linear-gradient(to top right, #2D1393 0%, #7343AA 100%)",
  backgroundButtonBundleMediumActive: "linear-gradient(to top right, #250F79 0%, #5A3485 100%)",
  backgroundButtonBundleTop: "linear-gradient(to top right, #2D2D2E 0%, #696E73 100%)",
  backgroundButtonBundleTopHover: "linear-gradient(to top right, #171718 0%, #51575C 100%)",
  backgroundButtonBundleTopActive: "linear-gradient(to top right, #101011 0%, #51575C)",
  backgroundButtonCriticalSubtle: foundation.palette.red.light,
  backgroundButtonCriticalSubtleHover: foundation.palette.red.lightHover,
  backgroundButtonCriticalSubtleActive: foundation.palette.red.lightActive,
  backgroundButtonCriticalSubtleFocus: foundation.palette.red.light,
  backgroundButtonCritical: foundation.palette.red.normal,
  backgroundButtonCriticalHover: foundation.palette.red.normalHover,
  backgroundButtonCriticalActive: foundation.palette.red.normalActive,
  backgroundButtonBordered: "transparent",
  backgroundButtonBorderedHover: foundation.palette.cloud.light,
  backgroundButtonBorderedActive: foundation.palette.cloud.light,
  backgroundButtonInfo: foundation.palette.blue.normal,
  backgroundButtonInfoHover: foundation.palette.blue.normalHover,
  backgroundButtonInfoActive: foundation.palette.blue.normalActive,
  backgroundButtonPrimarySubtle: foundation.palette.product.light,
  backgroundButtonPrimarySubtleHover: foundation.palette.product.lightHover,
  backgroundButtonPrimarySubtleActive: foundation.palette.product.lightActive,
  backgroundButtonPrimarySubtleFocus: foundation.palette.product.light,
  backgroundButtonPrimary: foundation.palette.product.normal,
  backgroundButtonPrimaryHover: foundation.palette.product.normalHover,
  backgroundButtonPrimaryActive: foundation.palette.product.normalActive,
  backgroundButtonSecondary: foundation.palette.cloud.normal,
  backgroundButtonSecondaryHover: foundation.palette.cloud.normalHover,
  backgroundButtonSecondaryActive: foundation.palette.cloud.normalActive,
  backgroundButtonSuccess: foundation.palette.green.normal,
  backgroundButtonSuccessHover: foundation.palette.green.normalHover,
  backgroundButtonSuccessActive: foundation.palette.green.normalActive,
  backgroundButtonWarning: foundation.palette.orange.normal,
  backgroundButtonWarningHover: foundation.palette.orange.normalHover,
  backgroundButtonWarningActive: foundation.palette.orange.normalActive,
  backgroundButtonWhite: foundation.palette.white.normal,
  backgroundButtonWhiteHover: foundation.palette.cloud.light,
  backgroundButtonWhiteActive: foundation.palette.cloud.lightHover,
  backgroundButtonWhiteBordered: "transparent",
  backgroundButtonWhiteBorderedHover: transparentColor(foundation.palette.white.normal, 20),
  backgroundButtonWhiteBorderedActive: transparentColor(foundation.palette.white.normal, 20),
  backgroundButtonFacebook: "#3B5998",
  backgroundButtonFacebookHover: "#385490",
  backgroundButtonFacebookActive: "#354F88",
  backgroundButtonGoogle: foundation.palette.cloud.light,
  backgroundButtonGoogleHover: foundation.palette.cloud.lightHover,
  backgroundButtonGoogleActive: foundation.palette.cloud.lightActive,
  backgroundCard: foundation.palette.white.normal,
  backgroundCarrierLogo: "transparent",
  backgroundCountryFlag: "transparent",
  backgroundServiceLogo: "transparent",
  backgroundTooltip: foundation.palette.white.normal,
  backgroundTooltipLargeMobile: foundation.palette.blue.dark,
  backgroundSeparator: foundation.palette.cloud.normal,
  backgroundSwitch: foundation.palette.cloud.dark,
  backgroundSwitchChecked: foundation.palette.blue.normal,
  backgroundInput: foundation.palette.white.normal,
  backgroundInputDisabled: foundation.palette.cloud.normal,
  backgroundModal: foundation.palette.white.normal,
  backgroundTable: foundation.palette.white.normal,
  backgroundTableEven: foundation.palette.cloud.light,
  backgroundTableHover: foundation.palette.cloud.normal,
  backgroundTableShadowLeft: "linear-gradient(to left, transparent, rgba(186, 199, 213, 23))",
  backgroundTableShadowRight: "linear-gradient(to right, transparent, rgba(186, 199, 213, 23))",
  backgroundTag: foundation.palette.cloud.light,
  backgroundTagHover: foundation.palette.cloud.lightHover,
  backgroundTagActive: foundation.palette.cloud.lightActive,
  backgroundTagSelected: foundation.palette.ink.dark,
  backgroundTagSelectedHover: foundation.palette.ink.darkHover,
  backgroundTagSelectedActive: foundation.palette.ink.darkActive,
  colorAlertIconCritical: foundation.palette.red.normal,
  colorAlertIconInfo: foundation.palette.blue.normal,
  colorAlertIconSuccess: foundation.palette.green.normal,
  colorAlertIconWarning: foundation.palette.orange.normal,
  colorFormLabel: foundation.palette.ink.dark,
  colorFormLabelFilled: foundation.palette.ink.normal,
  colorIconCheckboxRadio: foundation.palette.product.normal,
  colorIconCheckboxRadioDisabled: foundation.palette.cloud.dark,
  colorIconInput: foundation.palette.cloud.dark,
  colorIconRadioButton: foundation.palette.product.normal,
  colorIconRadioButtonDisabled: foundation.palette.ink.normal,
  colorInfoCheckBoxRadio: foundation.palette.ink.normal,
  colorPlaceholderInput: foundation.palette.ink.light,
  colorPlaceholderInputError: foundation.palette.red.normal,
  colorPlaceholderInputFile: foundation.palette.ink.light,
  colorPlaceholderInputFileError: foundation.palette.red.normal,
  colorTextInput: foundation.palette.ink.dark,
  colorTextInputDisabled: foundation.palette.ink.normal,
  colorTextInputPrefix: foundation.palette.ink.normal,
  colorHeading: foundation.palette.ink.dark,
  colorHeadingInverted: foundation.palette.white.normal,
  colorIconPrimary: foundation.palette.ink.dark,
  colorIconSecondary: foundation.palette.ink.normal,
  colorIconTertiary: foundation.palette.cloud.dark,
  colorIconInfo: foundation.palette.blue.normal,
  colorIconSuccess: foundation.palette.green.normal,
  colorIconWarning: foundation.palette.orange.normal,
  colorIconCritical: foundation.palette.red.normal,
  colorStopoverArrow: foundation.palette.ink.light,
  colorTextLinkPrimary: foundation.palette.product.dark,
  colorTextLinkPrimaryHover: foundation.palette.product.normal,
  colorTextLinkSecondary: foundation.palette.ink.dark,
  colorTextLinkSecondaryHover: foundation.palette.product.normal,
  colorTextPrimary: foundation.palette.ink.dark,
  colorTextSecondary: foundation.palette.ink.normal,
  colorTextInfo: foundation.palette.blue.normal,
  colorTextSuccess: foundation.palette.green.normal,
  colorTextWarning: foundation.palette.orange.normal,
  colorTextCritical: foundation.palette.red.normal,
  colorTextWhite: foundation.palette.white.normal,
  colorTextError: foundation.palette.red.normal,
  colorTextAlertCritical: foundation.palette.red.dark,
  colorTextAlertInfo: foundation.palette.blue.dark,
  colorTextAlertSuccess: foundation.palette.green.dark,
  colorTextAlertWarning: foundation.palette.orange.dark,
  colorTextAlertLink: foundation.palette.ink.normal,
  colorTextBadgeCritical: foundation.palette.red.normal,
  colorTextBadgeDark: foundation.palette.white.normal,
  colorTextBadgeInfo: foundation.palette.blue.normal,
  colorTextBadgeNeutral: foundation.palette.ink.normal,
  colorTextBadgeSuccess: foundation.palette.green.normal,
  colorTextBadgeWarning: foundation.palette.orange.normal,
  colorTextBadgeWhite: foundation.palette.ink.dark,
  colorTextButtonLinkCritical: foundation.palette.red.normal,
  colorTextButtonLinkCriticalHover: foundation.palette.red.normalHover,
  colorTextButtonLinkCriticalActive: foundation.palette.red.normalActive,
  colorTextButtonLinkPrimary: foundation.palette.product.normal,
  colorTextButtonLinkPrimaryHover: foundation.palette.product.normalHover,
  colorTextButtonLinkPrimaryActive: foundation.palette.product.normalActive,
  colorTextButtonLinkSecondary: foundation.palette.ink.dark,
  colorTextButtonLinkSecondaryHover: foundation.palette.ink.darkHover,
  colorTextButtonLinkSecondaryActive: foundation.palette.ink.darkActive,
  colorTextButtonLinkSecondaryCompactHover: foundation.palette.product.normalHover,
  colorTextButtonLinkSecondaryCompactActive: foundation.palette.product.normalActive,
  colorTextButtonCriticalSubtle: foundation.palette.red.dark,
  colorTextButtonCriticalSubtleHover: foundation.palette.red.darkHover,
  colorTextButtonCriticalSubtleActive: foundation.palette.red.darkActive,
  colorTextButtonCritical: foundation.palette.white.normal,
  colorTextButtonCriticalHover: foundation.palette.white.normal,
  colorTextButtonCriticalActive: foundation.palette.white.normal,
  colorTextButtonCriticalBordered: foundation.palette.red.normal,
  colorTextButtonCriticalBorderedHover: foundation.palette.red.normalHover,
  colorTextButtonCriticalBorderedActive: foundation.palette.red.normalActive,
  colorTextButtonFilled: foundation.palette.white.normal,
  colorTextButtonFilledHover: foundation.palette.white.normal,
  colorTextButtonFilledActive: foundation.palette.white.normal,
  colorTextButtonInfo: foundation.palette.white.normal,
  colorTextButtonInfoHover: foundation.palette.white.normal,
  colorTextButtonInfoActive: foundation.palette.white.normal,
  colorTextButtonInfoBordered: foundation.palette.blue.normal,
  colorTextButtonInfoBorderedHover: foundation.palette.blue.normalHover,
  colorTextButtonInfoBorderedActive: foundation.palette.blue.normalActive,
  colorTextButtonPrimarySubtle: foundation.palette.product.dark,
  colorTextButtonPrimarySubtleHover: foundation.palette.product.darkHover,
  colorTextButtonPrimarySubtleActive: foundation.palette.product.darkActive,
  colorTextButtonPrimary: foundation.palette.white.normal,
  colorTextButtonPrimaryHover: foundation.palette.white.normal,
  colorTextButtonPrimaryActive: foundation.palette.white.normal,
  colorTextButtonPrimaryBordered: foundation.palette.product.normal,
  colorTextButtonPrimaryBorderedHover: foundation.palette.product.normalHover,
  colorTextButtonPrimaryBorderedActive: foundation.palette.product.normalActive,
  colorTextButtonSecondary: foundation.palette.ink.dark,
  colorTextButtonSecondaryHover: foundation.palette.ink.darkHover,
  colorTextButtonSecondaryActive: foundation.palette.ink.darkActive,
  colorTextButtonSecondaryBordered: foundation.palette.ink.dark,
  colorTextButtonSecondaryBorderedHover: foundation.palette.ink.darkHover,
  colorTextButtonSecondaryBorderedActive: foundation.palette.ink.darkActive,
  colorTextButtonSuccess: foundation.palette.white.normal,
  colorTextButtonSuccessHover: foundation.palette.white.normal,
  colorTextButtonSuccessActive: foundation.palette.white.normal,
  colorTextButtonSuccessBordered: foundation.palette.green.normal,
  colorTextButtonSuccessBorderedHover: foundation.palette.green.normalHover,
  colorTextButtonSuccessBorderedActive: foundation.palette.green.normalActive,
  colorTextButtonWarning: foundation.palette.white.normal,
  colorTextButtonWarningHover: foundation.palette.white.normal,
  colorTextButtonWarningActive: foundation.palette.white.normal,
  colorTextButtonWarningBordered: foundation.palette.orange.normal,
  colorTextButtonWarningBorderedHover: foundation.palette.orange.normalHover,
  colorTextButtonWarningBorderedActive: foundation.palette.orange.normalActive,
  colorTextButtonWhite: foundation.palette.ink.dark,
  colorTextButtonWhiteHover: foundation.palette.ink.darkHover,
  colorTextButtonWhiteActive: foundation.palette.ink.darkActive,
  colorTextButtonWhiteBordered: foundation.palette.white.normal,
  colorTextButtonWhiteBorderedHover: foundation.palette.white.normal,
  colorTextButtonWhiteBorderedActive: foundation.palette.white.normal,
  colorTextButtonFacebook: foundation.palette.white.normal,
  colorTextButtonFacebookHover: foundation.palette.white.normal,
  colorTextButtonFacebookActive: foundation.palette.white.normal,
  colorTextButtonFacebookBordered: "#3B5998",
  colorTextButtonFacebookBorderedHover: "#385490",
  colorTextButtonFacebookBorderedActive: "#354F88",
  colorTextButtonGoogle: foundation.palette.ink.dark,
  colorTextButtonGoogleHover: foundation.palette.ink.darkHover,
  colorTextButtonGoogleActive: foundation.palette.ink.darkActive,
  colorTextButtonGoogleBordered: foundation.palette.ink.dark,
  colorTextButtonGoogleBorderedHover: foundation.palette.ink.darkHover,
  colorTextButtonGoogleBorderedActive: foundation.palette.ink.darkActive,
  colorTextLoading: foundation.palette.cloud.dark,
  colorTextTable: foundation.palette.ink.light,
  colorTextTag: foundation.palette.ink.dark,
  colorTextTagSelected: foundation.palette.cloud.dark,
  alertBackgroundCritical: foundation.palette.red.light,
  alertBackgroundInfo: foundation.palette.blue.light,
  alertBackgroundSuccess: foundation.palette.green.light,
  alertBackgroundWarning: foundation.palette.orange.light,
  alertIconCritical: foundation.palette.red.normal,
  alertIconInfo: foundation.palette.blue.normal,
  alertIconSuccess: foundation.palette.green.normal,
  alertIconWarning: foundation.palette.orange.normal,
  alertColorTextCritical: foundation.palette.red.dark,
  alertColorTextInfo: foundation.palette.blue.dark,
  alertColorTextSuccess: foundation.palette.green.dark,
  alertColorTextWarning: foundation.palette.orange.dark,
  alertColorTextLink: foundation.palette.ink.normal,
  badgeBorderRadius: "12px",
  badgeBundleBasicBackground: "linear-gradient(to top right, #E13E3B 0%, #E87E09 100%)",
  badgeBundleBasicForeground: foundation.palette.white.normal,
  badgeBundleMediumBackground: "linear-gradient(to top right, #3719AB 0%, #8539DB 100%)",
  badgeBundleMediumForeground: foundation.palette.white.normal,
  badgeBundleTopBackground: "linear-gradient(to top right, #2D2D2E 0%, #696E73 100%)",
  badgeBundleTopForeground: foundation.palette.white.normal,
  badgeCriticalBackground: foundation.palette.red.normal,
  badgeCriticalForeground: foundation.palette.white.normal,
  badgeCriticalSubtleBackground: foundation.palette.red.light,
  badgeCriticalSubtleForeground: foundation.palette.red.dark,
  badgeDarkBackground: foundation.palette.ink.dark,
  badgeDarkForeground: foundation.palette.white.normal,
  badgeInfoBackground: foundation.palette.blue.normal,
  badgeInfoForeground: foundation.palette.white.normal,
  badgeInfoSubtleBackground: foundation.palette.blue.light,
  badgeInfoSubtleForeground: foundation.palette.blue.dark,
  badgeNeutralBackground: foundation.palette.cloud.light,
  badgeNeutralForeground: foundation.palette.ink.dark,
  badgeSuccessBackground: foundation.palette.green.normal,
  badgeSuccessForeground: foundation.palette.white.normal,
  badgeSuccessSubtleBackground: foundation.palette.green.light,
  badgeSuccessSubtleForeground: foundation.palette.green.dark,
  badgeWarningBackground: foundation.palette.orange.normal,
  badgeWarningForeground: foundation.palette.white.normal,
  badgeWarningSubtleBackground: foundation.palette.orange.light,
  badgeWarningSubtleForeground: foundation.palette.orange.dark,
  badgeWhiteBackground: foundation.palette.white.normal,
  badgeWhiteForeground: foundation.palette.ink.dark,
  borderRadiusBadge: "12px",
  marginBadgeIcon: `0 ${foundation.space.XXSmall} 0 0`,
  marginButtonGroup: `0 1px 0 0`,
  marginButtonIcon: foundation.space.XSmall,
  buttonLinkCriticalBackground: "transparent",
  buttonLinkCriticalBackgroundHover: foundation.palette.red.lightHover,
  buttonLinkCriticalBackgroundActive: foundation.palette.red.lightActive,
  buttonLinkCriticalForeground: foundation.palette.red.normal,
  buttonLinkCriticalForegroundHover: foundation.palette.red.normalHover,
  buttonLinkCriticalForegroundActive: foundation.palette.red.normalActive,
  buttonLinkPrimaryBackground: "transparent",
  buttonLinkPrimaryBackgroundHover: foundation.palette.product.lightHover,
  buttonLinkPrimaryBackgroundActive: foundation.palette.product.lightActive,
  buttonLinkPrimaryForeground: foundation.palette.product.normal,
  buttonLinkPrimaryForegroundHover: foundation.palette.product.darkHover,
  buttonLinkPrimaryForegroundActive: foundation.palette.product.darkActive,
  buttonLinkSecondaryBackground: "transparent",
  buttonLinkSecondaryBackgroundHover: foundation.palette.cloud.lightHover,
  buttonLinkSecondaryBackgroundActive: foundation.palette.cloud.lightActive,
  buttonLinkSecondaryForeground: foundation.palette.ink.dark,
  buttonLinkSecondaryForegroundHover: foundation.palette.ink.darkHover,
  buttonLinkSecondaryForegroundActive: foundation.palette.ink.darkActive,
  buttonBundleBasicBackground: "linear-gradient(to top right, #E13E3B 0%, #E87E09 100%)",
  buttonBundleBasicBackgroundHover: "linear-gradient(to top right, #BD2825 0%, #D67000 100%)",
  buttonBundleBasicBackgroundActive: "linear-gradient(to top right, #9F1816 0%, #C36802 100%)",
  buttonBundleMediumBackground: "linear-gradient(to top right, #3719AB 0%, #8539DB 100%)",
  buttonBundleMediumBackgroundHover: "linear-gradient(to top right, #2D1393 0%, #7343AA 100%)",
  buttonBundleMediumBackgroundActive: "linear-gradient(to top right, #250F79 0%, #5A3485 100%)",
  buttonBundleTopBackground: "linear-gradient(to top right, #2D2D2E 0%, #696E73 100%)",
  buttonBundleTopBackgroundHover: "linear-gradient(to top right, #171718 0%, #51575C 100%)",
  buttonBundleTopBackgroundActive: "linear-gradient(to top right, #101011 0%, #51575C)",
  buttonCriticalSubtleBackground: foundation.palette.red.light,
  buttonCriticalSubtleBackgroundHover: foundation.palette.red.lightHover,
  buttonCriticalSubtleBackgroundActive: foundation.palette.red.lightActive,
  buttonCriticalSubtleForeground: foundation.palette.red.dark,
  buttonCriticalSubtleForegroundHover: foundation.palette.red.darkHover,
  buttonCriticalSubtleForegroundActive: foundation.palette.red.darkActive,
  buttonCriticalBackground: foundation.palette.red.normal,
  buttonCriticalBackgroundHover: foundation.palette.red.normalHover,
  buttonCriticalBackgroundActive: foundation.palette.red.normalActive,
  buttonCriticalForeground: foundation.palette.white.normal,
  buttonCriticalForegroundHover: foundation.palette.white.normal,
  buttonCriticalForegroundActive: foundation.palette.white.normal,
  buttonSmallFontSize: foundation.fontSize.small,
  buttonSmallPadding: `0 ${foundation.space.small}`,
  buttonSmallBothIconsPadding: `0 ${foundation.space.XSmall}`,
  buttonSmallLeftIconPadding: `0 ${foundation.space.small} 0 ${foundation.space.XSmall}`,
  buttonSmallRightIconPadding: `0 ${foundation.space.XSmall} 0 ${foundation.space.small}`,
  buttonNormalFontSize: foundation.fontSize.normal,
  buttonNormalPadding: `0 ${foundation.space.medium}`,
  buttonNormalBothIconsPadding: `0 ${foundation.space.small}`,
  buttonNormalLeftIconPadding: `0 ${foundation.space.medium} 0 ${foundation.space.small}`,
  buttonNormalRightIconPadding: `0 ${foundation.space.small} 0 ${foundation.space.medium}`,
  buttonLargeFontSize: foundation.fontSize.large,
  buttonLargePadding: `0 28px`,
  buttonLargeBothIconsPadding: `0 ${foundation.space.medium}`,
  buttonLargeLeftIconPadding: `0 28px 0 ${foundation.space.medium}`,
  buttonLargeRightIconPadding: `0 ${foundation.space.medium} 0 28px`,
  buttonInfoBackground: foundation.palette.blue.normal,
  buttonInfoBackgroundHover: foundation.palette.blue.normalHover,
  buttonInfoBackgroundActive: foundation.palette.blue.normalActive,
  buttonInfoForeground: foundation.palette.white.normal,
  buttonInfoForegroundHover: foundation.palette.white.normal,
  buttonInfoForegroundActive: foundation.palette.white.normal,
  buttonWithoutTextPadding: "0",
  buttonPaddingXSmall: foundation.space.XSmall,
  buttonPaddingSmall: foundation.space.small,
  buttonPaddingNormal: foundation.space.medium,
  buttonPaddingLarge: "28px",
  buttonPrimarySubtleBackground: foundation.palette.product.light,
  buttonPrimarySubtleBackgroundHover: foundation.palette.product.lightHover,
  buttonPrimarySubtleBackgroundActive: foundation.palette.product.lightActive,
  buttonPrimarySubtleForeground: foundation.palette.product.dark,
  buttonPrimarySubtleForegroundHover: foundation.palette.product.darkHover,
  buttonPrimarySubtleForegroundActive: foundation.palette.product.darkActive,
  buttonPrimaryBackground: foundation.palette.product.normal,
  buttonPrimaryBackgroundHover: foundation.palette.product.normalHover,
  buttonPrimaryBackgroundActive: foundation.palette.product.normalActive,
  buttonPrimaryForeground: foundation.palette.white.normal,
  buttonPrimaryForegroundHover: foundation.palette.white.normal,
  buttonPrimaryForegroundActive: foundation.palette.white.normal,
  buttonPrimaryBorderColorFocus: transparentColor(foundation.palette.product.normal, 50),
  buttonSecondaryBackground: foundation.palette.cloud.normal,
  buttonSecondaryBackgroundHover: foundation.palette.cloud.normalHover,
  buttonSecondaryBackgroundActive: foundation.palette.cloud.normalActive,
  buttonSecondaryForeground: foundation.palette.ink.dark,
  buttonSecondaryForegroundHover: foundation.palette.ink.darkHover,
  buttonSecondaryForegroundActive: foundation.palette.ink.darkActive,
  buttonSuccessBackground: foundation.palette.green.normal,
  buttonSuccessBackgroundHover: foundation.palette.green.normalHover,
  buttonSuccessBackgroundActive: foundation.palette.green.normalActive,
  buttonSuccessForeground: foundation.palette.white.normal,
  buttonSuccessForegroundHover: foundation.palette.white.normal,
  buttonSuccessForegroundActive: foundation.palette.white.normal,
  buttonWarningBackground: foundation.palette.orange.normal,
  buttonWarningBackgroundHover: foundation.palette.orange.normalHover,
  buttonWarningBackgroundActive: foundation.palette.orange.normalActive,
  buttonWarningForeground: foundation.palette.white.normal,
  buttonWarningForegroundHover: foundation.palette.white.normal,
  buttonWarningForegroundActive: foundation.palette.white.normal,
  buttonWhiteBackground: foundation.palette.white.normal,
  buttonWhiteBackgroundHover: foundation.palette.cloud.light,
  buttonWhiteBackgroundActive: foundation.palette.cloud.lightHover,
  buttonWhiteForeground: foundation.palette.ink.dark,
  buttonWhiteForegroundHover: foundation.palette.ink.darkHover,
  buttonWhiteForegroundActive: foundation.palette.ink.darkActive,
  buttonWhiteBorderColorFocus: transparentColor(foundation.palette.white.normalActive, 50),
  boxShadowButtonFocus: boxShadow([
    {
      def: ["0", "0", "4px", "1px"],
      color: transparentColor(foundation.palette.blue.normal, 30),
      inset: false,
    },
  ]),
  borderColorButtonPrimaryBordered: foundation.palette.product.normal,
  borderColorButtonPrimaryBorderedHover: foundation.palette.product.normalHover,
  borderColorButtonPrimaryBorderedActive: foundation.palette.product.normalActive,
  borderColorButtonSecondaryBordered: foundation.palette.ink.dark,
  borderColorButtonSecondaryBorderedHover: foundation.palette.ink.darkHover,
  borderColorButtonSecondaryBorderedActive: foundation.palette.ink.darkActive,
  borderColorButtonFacebookBordered: foundation.palette.social.facebook,
  borderColorButtonFacebookBorderedHover: foundation.palette.social.facebookHover,
  borderColorButtonFacebookBorderedActive: foundation.palette.social.facebookActive,
  borderColorButtonGoogleBordered: foundation.palette.ink.dark,
  borderColorButtonGoogleBorderedHover: foundation.palette.ink.darkHover,
  borderColorButtonGoogleBorderedActive: foundation.palette.ink.darkActive,
  borderColorButtonInfoBordered: foundation.palette.blue.normal,
  borderColorButtonInfoBorderedHover: foundation.palette.blue.normalHover,
  borderColorButtonInfoBorderedActive: foundation.palette.blue.normalActive,
  borderColorButtonSuccessBordered: foundation.palette.green.normal,
  borderColorButtonSuccessBorderedHover: foundation.palette.green.normalHover,
  borderColorButtonSuccessBorderedActive: foundation.palette.green.normalActive,
  borderColorButtonWarningBordered: foundation.palette.orange.normal,
  borderColorButtonWarningBorderedHover: foundation.palette.orange.normalHover,
  borderColorButtonWarningBorderedActive: foundation.palette.orange.normalActive,
  borderColorButtonCriticalBordered: foundation.palette.red.normal,
  borderColorButtonCriticalBorderedHover: foundation.palette.red.normalHover,
  borderColorButtonCriticalBorderedActive: foundation.palette.red.normalActive,
  borderColorButtonWhiteBordered: foundation.palette.white.normal,
  borderColorButtonWhiteBorderedHover: foundation.palette.white.normal,
  borderColorButtonWhiteBorderedActive: foundation.palette.white.normal,
  borderColorCard: foundation.palette.cloud.normal,
  borderColorCheckboxRadio: foundation.palette.cloud.dark,
  borderColorCheckboxRadioActive: foundation.palette.ink.dark,
  borderColorCheckboxRadioError: foundation.palette.red.normal,
  borderColorCheckboxRadioFocus: foundation.palette.blue.normal,
  borderColorCheckboxRadioHover: foundation.palette.ink.normal,
  borderColorInput: foundation.palette.cloud.dark,
  borderColorInputActive: foundation.palette.cloud.darkActive,
  borderColorInputError: foundation.palette.red.normal,
  borderColorInputErrorFocus: foundation.palette.red.normal,
  borderColorInputErrorHover: foundation.palette.red.normalHover,
  borderColorInputFocus: foundation.palette.blue.normal,
  borderColorInputHover: foundation.palette.cloud.darkHover,
  borderColorModal: foundation.palette.cloud.normal,
  borderColorTable: foundation.palette.cloud.normal,
  borderColorTableCell: foundation.palette.cloud.dark,
  borderColorTableHead: foundation.palette.cloud.dark,
  borderColorTag: foundation.palette.cloud.dark,
  borderColorTagFocus: foundation.palette.blue.normal,
  modifierScaleButtonActive: 0.95,
  modifierScaleCheckboxRadioActive: 0.95,
  fontSizeButtonSmall: foundation.fontSize.small,
  fontSizeButtonNormal: foundation.fontSize.normal,
  fontSizeButtonLarge: foundation.fontSize.large,
  fontSizeInputSmall: foundation.fontSize.normal,
  fontSizeInputNormal: foundation.fontSize.normal,
  fontSizeFormFeedback: foundation.fontSize.small,
  fontSizeFormLabel: foundation.fontSize.normal,
  fontSizeMessage: foundation.fontSize.normal,
  fontSizeHeadingDisplay: "40px",
  fontSizeHeadingDisplaySubtitle: "22px",
  fontSizeHeadingTitle1: "28px",
  fontSizeHeadingTitle2: "22px",
  fontSizeHeadingTitle3: foundation.fontSize.extraLarge,
  fontSizeHeadingTitle4: foundation.fontSize.large,
  fontSizeHeadingTitle5: foundation.fontSize.normal,
  fontSizeHeadingTitle6: foundation.fontSize.small,
  borderStyleCard: "solid",
  borderStyleInput: "solid",
  borderWidthCard: "1px",
  borderWidthInput: "1px",
  borderWidthInputFocus: "2px",
  widthCarrierLogo: foundation.size.large,
  widthIconSmall: foundation.size.small,
  widthIconMedium: "20px",
  widthIconLarge: "24px",
  widthBadgeCircled: "24px",
  widthCheckbox: "20px",
  widthRadioButton: "20px",
  widthStopoverArrow: "36px",
  widthCountryFlag: "24px",
  widthModalSmall: "540px",
  widthModalNormal: "740px",
  widthModalLarge: "900px",
  widthModalExtraLarge: "1280px",
  heightCarrierLogo: foundation.size.large,
  heightButtonSmall: foundation.size.large,
  heightButtonNormal: foundation.size.extraLarge,
  heightButtonLarge: foundation.size.extraExtraLarge,
  heightInputSmall: foundation.size.large,
  heightInputNormal: foundation.size.extraLarge,
  heightInputLarge: foundation.size.extraExtraLarge,
  heightIconSmall: foundation.size.small,
  heightIconMedium: "20px",
  heightIconLarge: "24px",
  heightBadge: "24px",
  heightCheckbox: "20px",
  heightRadioButton: "20px",
  heightStopoverArrow: "7px",
  heightCountryFlag: "auto",
  heightServiceLogoSmall: "12px",
  heightServiceLogoMedium: "24px",
  heightServiceLogoLarge: "48px",
  heightSeparator: "1px",
  heightInputGroupSeparatorSmall: foundation.size.small,
  heightInputGroupSeparatorNormal: "20px",
  heightIllustrationSmall: "90px",
  heightIllustrationMedium: "200px",
  countryFlagShadow: boxShadow([
    {
      def: ["0", "0", "0", "1px"],
      color: transparentColor(foundation.palette.ink.dark, 10),
      inset: true,
    },
  ]),
  countryFlagBackground: "transparent",
  countryFlagSmallHeight: "9px",
  countryFlagSmallWidth: "16px",
  countryFlagMediumHeight: "13px",
  countryFlagMediumWidth: "24px",
  dialogBorderRadiusDesktop: "9px",
  dialogBorderRadiusMobile: "12px",
  dialogWidth: "540px",
  drawerOverlayBackground: transparentColor(foundation.palette.ink.dark, 50),
  formBoxSmallHeight: foundation.size.large,
  formBoxNormalHeight: foundation.size.extraLarge,
  formBoxLargeHeight: foundation.size.extraExtraLarge,
  formElementBackground: foundation.palette.white.normal,
  formElementDisabledBackground: foundation.palette.cloud.normal,
  formElementDisabledForeground: foundation.palette.ink.normal,
  formElementDisabledOpacity: "0.5",
  formElementBorderColorDisabled: "transparent",
  formElementBorderColor: foundation.palette.cloud.dark,
  formElementBorderColorHover: foundation.palette.cloud.darkHover,
  formElementBorderColorActive: foundation.palette.cloud.darkActive,
  formElementBorderColorFocus: foundation.palette.blue.normal,
  formElementBorderColorError: foundation.palette.red.normal,
  formElementBorderColorErrorHover: foundation.palette.red.normalHover,
  formElementBoxShadow: boxShadow([
    {
      def: ["0", "0", "0", "1px"],
      color: transparentColor(foundation.palette.cloud.dark, 100),
      inset: true,
    },
  ]),
  formElementBoxShadowError: boxShadow([
    {
      def: ["0", "0", "0", "1px"],
      color: transparentColor(foundation.palette.red.normal, 100),
      inset: true,
    },
  ]),
  formElementBoxShadowErrorHover: boxShadow([
    {
      def: ["0", "0", "0", "1px"],
      color: transparentColor(foundation.palette.red.normalHover, 100),
      inset: true,
    },
  ]),
  formElementBoxShadowHover: boxShadow([
    {
      def: ["0", "0", "0", "1px"],
      color: transparentColor(foundation.palette.cloud.darkHover, 100),
      inset: true,
    },
  ]),
  formElementFocusBoxShadow: boxShadow([
    {
      def: ["0", "0", "0", "1px"],
      color: transparentColor(foundation.palette.blue.normal, 100),
      inset: true,
    },
    {
      def: ["0", "0", "0", "3px"],
      color: transparentColor(foundation.palette.blue.normal, 15),
      inset: true,
    },
  ]),
  formElementErrorFocusBoxShadow: boxShadow([
    {
      def: ["0", "0", "0", "1px"],
      color: transparentColor(foundation.palette.red.normal, 100),
      inset: true,
    },
    {
      def: ["0", "0", "0", "3px"],
      color: transparentColor(foundation.palette.red.normal, 15),
      inset: true,
    },
  ]),
  formElementNormalFontSize: foundation.fontSize.normal,
  formElementNormalPadding: `0 ${foundation.space.small}`,
  formElementForeground: foundation.palette.ink.light,
  formElementFilledForeground: foundation.palette.ink.dark,
  formElementLabelForeground: foundation.palette.ink.dark,
  formElementLabelFilledForeground: foundation.palette.ink.normal,
  formElementPrefixForeground: foundation.palette.ink.normal,
  formElementSmallPadding: `0 ${foundation.space.small}`,
  marginTopFormFeedback: foundation.space.XXXSmall,
  opacityCheckboxDisabled: "0.5",
  opacityRadioButtonDisabled: "0.5",
  headingDisplayFontSize: "40px",
  headingDisplayFontWeight: foundation.fontWeight.bold,
  headingDisplayLineHeight: "44px",
  headingDisplaySubtitleFontSize: "22px",
  headingDisplaySubtitleFontWeight: foundation.fontWeight.normal,
  headingDisplaySubtitleLineHeight: "28px",
  headingTitle1FontSize: "28px",
  headingTitle1FontWeight: foundation.fontWeight.bold,
  headingTitle1LineHeight: "32px",
  headingTitle2FontSize: "22px",
  headingTitle2FontWeight: foundation.fontWeight.medium,
  headingTitle2LineHeight: "28px",
  headingTitle3FontSize: foundation.fontSize.extraLarge,
  headingTitle3FontWeight: foundation.fontWeight.medium,
  headingTitle3LineHeight: "24px",
  headingTitle4FontSize: foundation.fontSize.large,
  headingTitle4FontWeight: foundation.fontWeight.bold,
  headingTitle4LineHeight: "20px",
  headingTitle5FontSize: foundation.fontSize.normal,
  headingTitle5FontWeight: foundation.fontWeight.bold,
  headingTitle5LineHeight: "20px",
  headingTitle6FontSize: foundation.fontSize.small,
  headingTitle6FontWeight: foundation.fontWeight.bold,
  headingTitle6LineHeight: "16px",
  headingForeground: foundation.palette.ink.dark,
  headingForegroundInverted: foundation.palette.white.normal,
  fontWeightHeadingDisplay: foundation.fontWeight.bold,
  fontWeightHeadingDisplaySubtitle: foundation.fontWeight.normal,
  fontWeightHeadingTitle1: foundation.fontWeight.bold,
  fontWeightHeadingTitle2: foundation.fontWeight.medium,
  fontWeightHeadingTitle3: foundation.fontWeight.medium,
  fontWeightHeadingTitle4: foundation.fontWeight.bold,
  fontWeightHeadingTitle5: foundation.fontWeight.bold,
  fontWeightHeadingTitle6: foundation.fontWeight.bold,
  fontWeightTableHead: foundation.fontWeight.bold,
  fontWeightLinks: foundation.fontWeight.medium,
  lineHeightHeading: "1.2",
  lineHeightHeadingDisplay: "44px",
  lineHeightHeadingDisplaySubtitle: "28px",
  lineHeightHeadingTitle1: "32px",
  lineHeightHeadingTitle2: "28px",
  lineHeightHeadingTitle3: "24px",
  lineHeightHeadingTitle4: "20px",
  lineHeightHeadingTitle5: "20px",
  lineHeightHeadingTitle6: "16px",
  iconPrimaryForeground: foundation.palette.ink.dark,
  iconSecondaryForeground: foundation.palette.ink.normal,
  iconTertiaryForeground: foundation.palette.cloud.dark,
  iconInfoForeground: foundation.palette.blue.normal,
  iconSuccessForeground: foundation.palette.green.normal,
  iconWarningForeground: foundation.palette.orange.normal,
  iconCriticalForeground: foundation.palette.red.normal,
  iconSmallSize: "16px",
  iconMediumSize: "20px",
  iconLargeSize: "24px",
  iconExtraLargeSize: "32px",
  illustrationExtraSmallHeight: "90px",
  illustrationSmallHeight: "120px",
  illustrationMediumHeight: "200px",
  illustrationLargeHeight: "280px",
  illustrationDisplayHeight: "460px",
  loadingForeground: foundation.palette.cloud.dark,
  modalBorderRadiusMobile: "12px",
  modalBorderRadius: "12px",
  modalExtraSmallWidth: "360px",
  modalSmallWidth: "540px",
  modalNormalWidth: "740px",
  modalLargeWidth: "900px",
  modalExtraLargeWidth: "1280px",
  marginBottomSelectSuffix: foundation.space.XXXSmall,
  paddingLeftSelectPrefix: "48px",
  socialButtonAppleBackground: foundation.palette.ink.normal,
  socialButtonAppleBackgroundHover: foundation.palette.ink.normalHover,
  socialButtonAppleBackgroundActive: foundation.palette.ink.normalActive,
  socialButtonAppleForeground: foundation.palette.white.normal,
  socialButtonAppleForegroundHover: foundation.palette.white.normal,
  socialButtonAppleForegroundActive: foundation.palette.white.normal,
  socialButtonAppleBorderColorFocus: transparentColor(foundation.palette.ink.light, 50),
  socialButtonAppleIconForeground: foundation.palette.white.normal,
  socialButtonFacebookBackground: foundation.palette.social.facebook,
  socialButtonFacebookBackgroundHover: foundation.palette.social.facebookHover,
  socialButtonFacebookBackgroundActive: foundation.palette.social.facebookActive,
  socialButtonFacebookForeground: foundation.palette.white.normal,
  socialButtonFacebookForegroundHover: foundation.palette.white.normal,
  socialButtonFacebookForegroundActive: foundation.palette.white.normal,
  socialButtonFacebookIconForeground: "#3B5998",
  socialButtonGoogleBackground: foundation.palette.cloud.light,
  socialButtonGoogleBackgroundHover: foundation.palette.cloud.lightHover,
  socialButtonGoogleBackgroundActive: foundation.palette.cloud.lightActive,
  socialButtonGoogleForeground: foundation.palette.ink.dark,
  socialButtonGoogleForegroundHover: foundation.palette.ink.darkHover,
  socialButtonGoogleForegroundActive: foundation.palette.ink.darkActive,
  socialButtonGoogleIconForeground: "currentColor",
  socialButtonTwitterBackground: foundation.palette.cloud.dark,
  socialButtonTwitterBackgroundHover: foundation.palette.cloud.normalHover,
  socialButtonTwitterBackgroundActive: foundation.palette.cloud.normalActive,
  socialButtonTwitterForeground: foundation.palette.ink.normal,
  socialButtonTwitterForegroundHover: foundation.palette.ink.normal,
  socialButtonTwitterForegroundActive: foundation.palette.ink.normal,
  socialButtonTwitterBorderColorFocus: transparentColor(foundation.palette.ink.light, 50),
  socialButtonTwitterIconForeground: "#00ACEE",
  tabBundleBasicForeground: "linear-gradient(80.91deg, #E13E3B 0%, #E87E09 100%)",
  tabBundleBasicBackground: foundation.palette.white.normal,
  tabBundleBasicBackgroundHover: "rgba(215, 51, 28, 0.08)",
  tabBundleBasicBackgroundActive: "rgba(215, 51, 28, 0.12)",
  tabBundleMediumForeground: "linear-gradient(80.91deg, #3719AB  0%, #8539DB 100%)",
  tabBundleMediumBackground: foundation.palette.white.normal,
  tabBundleMediumBackgroundHover: "rgba(59, 30, 176, 0.08)",
  tabBundleMediumBackgroundActive: "rgba(59, 30, 176, 0.12)",
  tabBundleTopBackground: foundation.palette.white.normal,
  tabBundleTopBackgroundHover: foundation.palette.white.normalHover,
  tabBundleTopForeground: "linear-gradient(80.91deg, #2D2D2E 0%, #696E73 100%)",
  tagColoredBackground: foundation.palette.blue.light,
  tagColoredBackgroundHover: foundation.palette.blue.lightHover,
  tagColoredBackgroundActive: foundation.palette.blue.lightActive,
  tagColoredForeground: foundation.palette.blue.darker,
  tagNeutralBackground: foundation.palette.cloud.normal,
  tagNeutralBackgroundHover: foundation.palette.cloud.normalHover,
  tagNeutralBackgroundActive: foundation.palette.cloud.normalActive,
  tagNeutralForeground: foundation.palette.ink.dark,
  textLinkPrimaryForeground: foundation.palette.product.dark,
  textLinkPrimaryForegroundHover: foundation.palette.product.darkHover,
  textLinkPrimaryForegroundActive: foundation.palette.product.darkActive,
  textLinkSecondaryForeground: foundation.palette.ink.dark,
  textLinkSecondaryForegroundHover: foundation.palette.product.darkHover,
  textLinkSecondaryForegroundActive: foundation.palette.product.darkActive,
  textLinkSuccessForeground: foundation.palette.green.dark,
  textLinkSuccessForegroundHover: foundation.palette.green.darkHover,
  textLinkSuccessForegroundActive: foundation.palette.green.darker,
  textLinkInfoForeground: foundation.palette.blue.dark,
  textLinkInfoForegroundHover: foundation.palette.blue.darkHover,
  textLinkInfoForegroundActive: foundation.palette.blue.darker,
  textLinkWarningForeground: foundation.palette.orange.dark,
  textLinkWarningForegroundHover: foundation.palette.orange.darkHover,
  textLinkWarningForegroundActive: foundation.palette.orange.darker,
  textLinkCriticalForeground: foundation.palette.red.dark,
  textLinkCriticalForegroundHover: foundation.palette.red.darkHover,
  textLinkCriticalForegroundActive: foundation.palette.red.darker,
  textLinkWhiteForeground: foundation.palette.white.normal,
  textLinkWhiteForegroundHover: foundation.palette.product.light,
  textLinkWhiteForegroundActive: foundation.palette.product.light,
  textDecorationTextLinkPrimary: "underline",
  textDecorationTextLinkPrimaryHover: "none",
  textDecorationTextLinkSecondary: "underline",
  textDecorationTextLinkSecondaryHover: "none",
  textPrimaryBackground: transparentColor(foundation.palette.ink.dark, 10),
  textPrimaryForeground: foundation.palette.ink.dark,
  textSecondaryBackground: transparentColor(foundation.palette.ink.normal, 10),
  textSecondaryForeground: foundation.palette.ink.normal,
  textInfoBackground: transparentColor(foundation.palette.blue.normal, 10),
  textInfoForeground: foundation.palette.blue.normal,
  textSuccessBackground: transparentColor(foundation.palette.green.normal, 10),
  textSuccessForeground: foundation.palette.green.normal,
  textWarningBackground: transparentColor(foundation.palette.orange.normal, 10),
  textWarningForeground: foundation.palette.orange.normal,
  textCriticalBackground: transparentColor(foundation.palette.red.normal, 10),
  textCriticalForeground: foundation.palette.red.normal,
  textWhiteBackground: transparentColor(foundation.palette.white.normal, 10),
  textWhiteForeground: foundation.palette.white.normal,
  backgroundIllustration: "transparent",
  borderRadius50: foundation.borderRadius["50"],
  borderRadius100: foundation.borderRadius["100"],
  borderRadius150: foundation.borderRadius["150"],
  borderRadius300: foundation.borderRadius["300"],
  borderRadius400: foundation.borderRadius["400"],
  borderRadiusCircle: foundation.borderRadius.circle,
  borderRadiusSmall: foundation.borderRadius.small,
  borderRadiusNormal: foundation.borderRadius.normal,
  borderRadiusLarge: foundation.borderRadius.large,
  borderRadiusNone: foundation.borderRadius.none,
  borderRadiusFull: foundation.borderRadius.full,
  breakpointMediumMobile: foundation.breakpoint.mediumMobile,
  breakpointLargeMobile: foundation.breakpoint.largeMobile,
  breakpointTablet: foundation.breakpoint.tablet,
  breakpointDesktop: foundation.breakpoint.desktop,
  breakpointLargeDesktop: foundation.breakpoint.largeDesktop,
  widthBreakpointMediumMobile: foundation.breakpoint.mediumMobile,
  widthBreakpointLargeMobile: foundation.breakpoint.largeMobile,
  widthBreakpointTablet: foundation.breakpoint.tablet,
  widthBreakpointDesktop: foundation.breakpoint.desktop,
  widthBreakpointLargeDesktop: foundation.breakpoint.largeDesktop,
  durationFast: "0.15s",
  durationNormal: "0.3s",
  durationSlow: "0.4s",
  elevationSuppressedBackground: foundation.palette.cloud.light,
  elevationFlatBackground: foundation.palette.white.normal,
  elevationFlatBorderColor: foundation.palette.cloud.normal,
  elevationFlatBorderSize: "1px",
  elevationActionBackground: foundation.palette.white.normal,
  elevationActionBoxShadow: boxShadow([
    {
      def: ["0", "0", "2px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 16),
      inset: false,
    },
    {
      def: ["0", "1px", "4px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 12),
      inset: false,
    },
  ]),
  elevationActionActiveBackground: foundation.palette.white.normal,
  elevationActionActiveBoxShadow: boxShadow([
    {
      def: ["0", "1px", "4px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 16),
      inset: false,
    },
    {
      def: ["0", "4px", "8px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 12),
      inset: false,
    },
  ]),
  elevationFixedBackground: foundation.palette.white.normal,
  elevationFixedBoxShadow: boxShadow([
    {
      def: ["0", "0", "2px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 16),
      inset: false,
    },
    {
      def: ["0", "2px", "4px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 12),
      inset: false,
    },
  ]),
  elevationFixedReverseBackground: foundation.palette.white.normal,
  elevationFixedReverseBoxShadow: boxShadow([
    {
      def: ["0", "0", "2px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 16),
      inset: false,
    },
    {
      def: ["0", "-2px", "4px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 12),
      inset: false,
    },
  ]),
  elevationRaisedBackground: foundation.palette.white.normal,
  elevationRaisedBoxShadow: boxShadow([
    {
      def: ["0", "4px", "8px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 16),
      inset: false,
    },
    {
      def: ["0", "8px", "24px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 24),
      inset: false,
    },
  ]),
  elevationRaisedReverseBackground: foundation.palette.white.normal,
  elevationRaisedReverseBoxShadow: boxShadow([
    {
      def: ["0", "-4px", "8px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 16),
      inset: false,
    },
    {
      def: ["0", "-8px", "24px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 24),
      inset: false,
    },
  ]),
  elevationOverlayBackground: foundation.palette.white.normal,
  elevationOverlayBoxShadow: boxShadow([
    {
      def: ["0", "12px", "24px", "-4px"],
      color: transparentColor(foundation.palette.ink.dark, 24),
      inset: false,
    },
    {
      def: ["0", "8px", "60px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 32),
      inset: false,
    },
  ]),
  backgroundBody: foundation.palette.cloud.light,
  boxShadowAction: boxShadow([
    {
      def: ["0", "0", "2px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 16),
      inset: false,
    },
    {
      def: ["0", "1px", "4px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 12),
      inset: false,
    },
  ]),
  boxShadowActionActive: boxShadow([
    {
      def: ["0", "1px", "4px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 16),
      inset: false,
    },
    {
      def: ["0", "4px", "8px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 12),
      inset: false,
    },
  ]),
  boxShadowFixed: boxShadow([
    {
      def: ["0", "0", "2px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 16),
      inset: false,
    },
    {
      def: ["0", "2px", "4px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 12),
      inset: false,
    },
  ]),
  boxShadowFixedReverse: boxShadow([
    {
      def: ["0", "0", "2px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 16),
      inset: false,
    },
    {
      def: ["0", "-2px", "4px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 12),
      inset: false,
    },
  ]),
  boxShadowOverlay: boxShadow([
    {
      def: ["0", "12px", "24px", "-4px"],
      color: transparentColor(foundation.palette.ink.dark, 24),
      inset: false,
    },
    {
      def: ["0", "8px", "60px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 32),
      inset: false,
    },
  ]),
  boxShadowRaised: boxShadow([
    {
      def: ["0", "4px", "8px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 16),
      inset: false,
    },
    {
      def: ["0", "8px", "24px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 24),
      inset: false,
    },
  ]),
  boxShadowRaisedReverse: boxShadow([
    {
      def: ["0", "-4px", "8px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 16),
      inset: false,
    },
    {
      def: ["0", "-8px", "24px", "0"],
      color: transparentColor(foundation.palette.ink.dark, 24),
      inset: false,
    },
  ]),
  opacityOverlay: "0.8",
  paletteBlueLight: foundation.palette.blue.light,
  paletteBlueLightHover: foundation.palette.blue.lightHover,
  paletteBlueLightActive: foundation.palette.blue.lightActive,
  paletteBlueNormal: foundation.palette.blue.normal,
  paletteBlueNormalHover: foundation.palette.blue.normalHover,
  paletteBlueNormalActive: foundation.palette.blue.normalActive,
  paletteBlueDark: foundation.palette.blue.dark,
  paletteBlueDarkHover: foundation.palette.blue.darkHover,
  paletteBlueDarkActive: foundation.palette.blue.darkActive,
  paletteBlueDarker: foundation.palette.blue.darker,
  paletteBundleBasic: foundation.palette.bundle.basic,
  paletteBundleMedium: foundation.palette.bundle.medium,
  paletteCloudLight: foundation.palette.cloud.light,
  paletteCloudLightHover: foundation.palette.cloud.lightHover,
  paletteCloudLightActive: foundation.palette.cloud.lightActive,
  paletteCloudNormal: foundation.palette.cloud.normal,
  paletteCloudNormalHover: foundation.palette.cloud.normalHover,
  paletteCloudNormalActive: foundation.palette.cloud.normalActive,
  paletteCloudDark: foundation.palette.cloud.dark,
  paletteCloudDarkHover: foundation.palette.cloud.darkHover,
  paletteCloudDarkActive: foundation.palette.cloud.darkActive,
  paletteGreenLight: foundation.palette.green.light,
  paletteGreenLightHover: foundation.palette.green.lightHover,
  paletteGreenLightActive: foundation.palette.green.lightActive,
  paletteGreenNormal: foundation.palette.green.normal,
  paletteGreenNormalHover: foundation.palette.green.normalHover,
  paletteGreenNormalActive: foundation.palette.green.normalActive,
  paletteGreenDark: foundation.palette.green.dark,
  paletteGreenDarkHover: foundation.palette.green.darkHover,
  paletteGreenDarkActive: foundation.palette.green.darkActive,
  paletteGreenDarker: foundation.palette.green.darker,
  paletteInkDark: foundation.palette.ink.dark,
  paletteInkDarkHover: foundation.palette.ink.darkHover,
  paletteInkDarkActive: foundation.palette.ink.darkActive,
  paletteInkLight: foundation.palette.ink.light,
  paletteInkLightHover: foundation.palette.ink.lightHover,
  paletteInkLightActive: foundation.palette.ink.lightActive,
  paletteInkNormal: foundation.palette.ink.normal,
  paletteInkNormalHover: foundation.palette.ink.normalHover,
  paletteInkNormalActive: foundation.palette.ink.normalActive,
  paletteOrangeLight: foundation.palette.orange.light,
  paletteOrangeLightHover: foundation.palette.orange.lightHover,
  paletteOrangeLightActive: foundation.palette.orange.lightActive,
  paletteOrangeNormal: foundation.palette.orange.normal,
  paletteOrangeNormalHover: foundation.palette.orange.normalHover,
  paletteOrangeNormalActive: foundation.palette.orange.normalActive,
  paletteOrangeDark: foundation.palette.orange.dark,
  paletteOrangeDarkHover: foundation.palette.orange.darkHover,
  paletteOrangeDarkActive: foundation.palette.orange.darkActive,
  paletteOrangeDarker: foundation.palette.orange.darker,
  paletteProductLight: foundation.palette.product.light,
  paletteProductLightHover: foundation.palette.product.lightHover,
  paletteProductLightActive: foundation.palette.product.lightActive,
  paletteProductNormal: foundation.palette.product.normal,
  paletteProductNormalHover: foundation.palette.product.normalHover,
  paletteProductNormalActive: foundation.palette.product.normalActive,
  paletteProductDark: foundation.palette.product.dark,
  paletteProductDarkHover: foundation.palette.product.darkHover,
  paletteProductDarkActive: foundation.palette.product.darkActive,
  paletteProductDarker: foundation.palette.product.darker,
  paletteRedLight: foundation.palette.red.light,
  paletteRedLightHover: foundation.palette.red.lightHover,
  paletteRedLightActive: foundation.palette.red.lightActive,
  paletteRedNormal: foundation.palette.red.normal,
  paletteRedNormalHover: foundation.palette.red.normalHover,
  paletteRedNormalActive: foundation.palette.red.normalActive,
  paletteRedDark: foundation.palette.red.dark,
  paletteRedDarkHover: foundation.palette.red.darkHover,
  paletteRedDarkActive: foundation.palette.red.darkActive,
  paletteRedDarker: foundation.palette.red.darker,
  paletteSocialFacebook: foundation.palette.social.facebook,
  paletteSocialFacebookHover: foundation.palette.social.facebookHover,
  paletteSocialFacebookActive: foundation.palette.social.facebookActive,
  paletteWhite: foundation.palette.white.normal,
  paletteWhiteNormal: foundation.palette.white.normal,
  paletteWhiteHover: foundation.palette.white.normalHover,
  paletteWhiteActive: foundation.palette.white.normalActive,
  spaceXXXSmall: foundation.space.XXXSmall,
  spaceXXSmall: foundation.space.XXSmall,
  spaceXSmall: foundation.space.XSmall,
  spaceSmall: foundation.space.small,
  spaceMedium: foundation.space.medium,
  spaceLarge: foundation.space.large,
  spaceXLarge: foundation.space.XLarge,
  spaceXXLarge: foundation.space.XXLarge,
  spaceXXXLarge: foundation.space.XXXLarge,
  fontFamily: foundation.fontFamily.base,
  fontSizeTextSmall: foundation.fontSize.small,
  fontSizeTextNormal: foundation.fontSize.normal,
  fontSizeTextLarge: foundation.fontSize.large,
  fontSizeTextExtraLarge: foundation.fontSize.extraLarge,
  lineHeightText: "1.4",
  lineHeightSmall: foundation.lineHeight.small,
  lineHeightNormal: foundation.lineHeight.normal,
  lineHeightLarge: foundation.lineHeight.large,
  lineHeightExtraLarge: foundation.lineHeight.extraLarge,
  lineHeightTextSmall: foundation.lineHeight.small,
  lineHeightTextNormal: foundation.lineHeight.normal,
  lineHeightTextLarge: foundation.lineHeight.large,
  lineHeightTextExtraLarge: foundation.lineHeight.extraLarge,
  fontWeightNormal: foundation.fontWeight.normal,
  fontWeightMedium: foundation.fontWeight.medium,
  fontWeightBold: foundation.fontWeight.bold,
  zIndexDefault: 1,
  zIndexSticky: 100,
  zIndexNavigationBar: 700,
  zIndexModalOverlay: 800,
  zIndexDrawer: 815,
  zIndexModal: 825,
  zIndexOnTheTop: 900,
});
export default createTokens;
