// @flow
const colors = {
  brand: {
    light: "#9cdad3",
    normal: "#00a991",
    dark: "#00826f"
  },
  white: {
    normal: "#fff"
  },
  cloud: {
    light: "#f5f7f9",
    normal: "#e8edf1"
  },
  ink: {
    lighter: "#bac7d5",
    light: "#7f91a8",
    normal: "#46515e",
    dark: "#171b1e"
  },
  orange: {
    light: "#fcf1cd",
    normal: "#f9971e",
    dark: "#a93610"
  },
  red: {
    light: "#fae8e8",
    normal: "#d21c1c",
    dark: "#650808"
  },
  green: {
    light: "#e7f3e8",
    normal: "#127f22",
    dark: "#065d12"
  },
  blue: {
    light: "#e0f6ff",
    normal: "#10709f",
    dark: "#07405c"
  },
  social: {
    facebook: "#3b5998",
    google: "#dd4b39"
  }
};

const defaultTokens = {
  color: {
    textPrimary: colors.ink.normal,
    textSecondary: colors.ink.light,
    textAttention: colors.ink.dark,
    textError: colors.red.normal,
    heading: colors.ink.dark,
    linkPrimary: colors.brand.normal,
    linkSecondary: colors.ink.dark,
    textMessageSuccess: colors.green.dark,
    iconMessageSuccess: colors.green.normal,
    textMessageWarning: colors.red.dark,
    iconMessageWarning: colors.red.normal,
    textMessageError: colors.orange.dark,
    iconMessageError: colors.orange.normal,
    textMessageInfo: colors.blue.dark,
    iconMessageInfo: colors.blue.normal,
    textButtonPrimary: colors.white.normal,
    iconButtonPrimary: colors.white.normal,
    textButtonPrimaryBordered: colors.brand.normal,
    iconButtonPrimaryBordered: colors.brand.normal,
    textButtonSecondary: colors.ink.normal,
    iconButtonSecondary: colors.ink.normal,
    textButtonSecondaryBordered: colors.ink.normal,
    iconButtonSecondaryBordered: colors.ink.normal,
    textButtonLink: colors.ink.normal,
    iconButtonLink: colors.ink.normal,
    textButtonLinkBordered: colors.ink.normal,
    iconButtonLinkBordered: colors.ink.normal,
    textButtonFacebook: colors.white.normal,
    iconButtonFacebook: colors.white.normal,
    textButtonFacebookBordered: colors.social.facebook,
    iconButtonFacebookBordered: colors.social.facebook,
    textButtonGoogle: colors.white.normal,
    iconButtonGoogle: colors.white.normal,
    textButtonGoogleBordered: colors.social.google,
    iconButtonGoogleBordered: colors.social.google,
    textButtonDestructive: colors.white.normal,
    iconButtonDestructive: colors.white.normal,
    textButtonDestructiveBordered: colors.red.normal,
    iconButtonDestructiveBordered: colors.red.normal,
    textInput: colors.ink.normal,
    placeholderInput: colors.ink.lighter,
    labelForm: colors.ink.normal,
    labelFormFilled: colors.ink.light,
    iconCheckbox: colors.brand.normal,
    iconRadioButton: colors.brand.normal,
    iconCheckboxDisabled: colors.ink.lighter,
    iconRadioButtonDisabled: colors.ink.lighter
  },
  backgroundColor: {
    body: colors.cloud.light,
    modal: colors.white.normal,
    section: colors.white.normal,
    carrierLogo: colors.white.normal,
    buttonPrimary: colors.brand.normal,
    buttonSecondary: colors.cloud.normal,
    buttonLink: "rgba(0,0,0,0)",
    buttonBordered: "rgba(0,0,0,0)",
    buttonFacebook: colors.social.facebook,
    buttonGoogle: colors.social.google,
    buttonDestructive: colors.red.normal,
    buttonLinkHover: colors.cloud.normal,
    input: colors.white.normal,
    messageSuccess: colors.green.light,
    messageWarning: colors.orange.light,
    messageError: colors.red.light,
    messageInfo: colors.blue.light
  },
  fontFamily: {
    primary:
      '"Roboto", -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif'
  },
  fontSize: {
    headingDisplay: "40px",
    headingLarge: "28px",
    headingMedium: "22px",
    headingSmall: "16px",
    textNormal: "14px",
    textLarge: "16px",
    textSmall: "12px",
    message: "14px",
    buttonLarge: "16px",
    buttonNormal: "14px",
    buttonSmall: "12px",
    input: "16px",
    labelForm: "14px",
    messageForm: "12px"
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    bold: "700",
    links: "500"
  },
  borderRadius: {
    circle: "50%",
    normal: "3px",
    large: "6px",
    small: "2px"
  },
  zIndex: {
    default: "1",
    sticky: "100",
    modalOverlay: "800",
    modal: "825",
    onTheTop: "900"
  },
  size: {
    widthIconSmall: "16px",
    heightIconSmall: "16px",
    heightIconMedium: "24px",
    widthIconMedium: "24px",
    heightInputNormal: "44px",
    heightInputLarge: "52px",
    heightInputSmall: "32px",
    widthButtonMinimal: "180px",
    heightButtonNormal: "44px",
    heightButtonLarge: "52px",
    heightButtonSmall: "32px",
    heightRadioButton: "20px",
    widthRadioButton: "20px",
    heightCheckbox: "20px",
    widthCheckbox: "20px"
  },
  borderColor: {
    input: colors.ink.lighter,
    inputError: colors.red.normal,
    tableCell: colors.ink.lighter,
    section: colors.cloud.normal,
    modal: colors.cloud.normal,
    buttonPrimaryBordered: colors.brand.normal,
    buttonSecondaryBordered: colors.ink.normal,
    buttonLinkBordered: "transparent",
    buttonFacebookBordered: colors.social.facebook,
    buttonGoogleBordered: colors.social.google,
    buttonDestructiveBordered: colors.red.normal
  },
  borderStyle: {
    section: "solid",
    widthSection: "1px"
  },
  opacity: {
    overlay: "0.8",
    buttonDisabled: "0.3",
    radioButtonDisabled: "0.5",
    checkboxDisabled: "0.5"
  },
  spacing: {
    paddingButtonSmall: "12px",
    paddingButtonNormal: "16px",
    paddingButtonLarge: "28px",
    paddingButtonSmallWithIcon: "8px",
    paddingButtonNormalWithIcon: "8px",
    paddingButtonLargeWithIcon: "12px",
    marginButtonIconSmall: "8px",
    marginButtonIconNormal: "12px",
    marginButtonIconLarge: "16px",
    XXSmall: "4px",
    XSmall: "8px",
    small: "12px",
    medium: "16px",
    large: "24px",
    XLarge: "32px",
    XXLarge: "40px",
    XXXLarge: "52px"
  },
  duration: {
    fast: "0.2s",
    normal: "0.3s",
    slow: "0.4s"
  },
  modifier: {
    darkenHover: 0.05,
    darkenActive: 0.1,
    darkenButtonLink: 0.05,
    scaleButtonActive: 0.95
  },
  lineHeight: {
    text: "1.4",
    heading: "1.2"
  },
  textDecoration: {
    linkPrimary: "none",
    linkPrimaryHover: "underline",
    linkSecondary: "underline",
    linkSecondaryHover: "underline"
  }
};

module.exports = defaultTokens;
