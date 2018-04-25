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
		normal: "#46B655",
		dark: "#065d12"
	},
	blue: {
		light: "#e0f6ff",
		normal: "#0176D2",
		dark: "#07405c"
	},
	social: {
		facebook: "#3b5998",
		google: "#dd4b39"
	}
};

const defaultTokens = {
	//category:Colors
	//description:Use these tokens for text colors only. Do not use these for border colors or background colors.
	colorTextInfo: colors.blue.normal,
	colorTextPrimary: colors.ink.normal,
	colorTextSecondary: colors.ink.light,
	colorTextAttention: colors.ink.dark,
	colorTextError: colors.red.normal,
	colorIconPrimary: colors.ink.normal,
	colorIconSecondary: colors.ink.light,
	colorIconAttention: colors.ink.dark,
	colorIconTerciary: colors.ink.lighter,
	colorHeading: colors.ink.dark,
	colorLinkPrimary: colors.brand.normal,
	colorLinkSecondary: colors.ink.dark,
	colorAlertIconSuccess: colors.green.normal,
	colorTextAlertSuccess: colors.green.dark,
	colorAlertIconInfo: colors.blue.normal,
	colorTextAlertInfo: colors.blue.dark,
	colorAlertIconWarning: colors.orange.normal,
	colorTextAlertWarning: colors.orange.dark,
	colorAlertIconCritical: colors.red.normal,
	colorTextAlertCritical: colors.red.dark,
	colorTextButtonPrimary: colors.white.normal,
	colorIconButtonPrimary: colors.white.normal,
	colorTextButtonPrimaryBordered: colors.brand.normal,
	colorIconButtonPrimaryBordered: colors.brand.normal,
	colorTextButtonSecondary: colors.ink.normal,
	colorIconButtonSecondary: colors.ink.normal,
	colorTextButtonSecondaryBordered: colors.ink.normal,
	colorIconButtonSecondaryBordered: colors.ink.normal,
	colorTextButtonLink: colors.ink.normal,
	colorIconButtonLink: colors.ink.normal,
	colorTextButtonLinkBordered: colors.ink.normal,
	colorIconButtonLinkBordered: colors.ink.normal,
	colorTextButtonFacebook: colors.white.normal,
	colorIconButtonFacebook: colors.white.normal,
	colorTextButtonFacebookBordered: colors.social.facebook,
	colorIconButtonFacebookBordered: colors.social.facebook,
	colorTextButtonGoogle: colors.white.normal,
	colorIconButtonGoogle: colors.white.normal,
	colorTextButtonGoogleBordered: colors.social.google,
	colorIconButtonGoogleBordered: colors.social.google,
	colorTextButtonDestructive: colors.white.normal,
	colorIconButtonDestructive: colors.white.normal,
	colorTextButtonDestructiveBordered: colors.red.normal,
	colorIconButtonDestructiveBordered: colors.red.normal,
	colorTextInput: colors.ink.normal,
	colorTextInputDisabled: colors.ink.lighter,
	colorIconInput: colors.ink.lighter,
	colorPlaceholderInput: colors.ink.lighter,
	colorLabelForm: colors.ink.normal,
	colorLabelFormFilled: colors.ink.light,
	colorIconCheckbox: colors.brand.normal,
	colorIconCheckboxDisabled: colors.ink.lighter,
	colorIconRadioButton: colors.brand.normal,
	colorIconRadioButtonDisabled: colors.ink.lighter,
	//category:Font family
	//description:
	fontFamily:
		'"Roboto", -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
	//category:Background colors
	//description:Use these tokens for background colors only. Do not use these for border colors or text colors.
	backgroundBody: colors.cloud.light,
	backgroundModal: colors.white.normal,
	backgroundSection: colors.white.normal,
	backgroundCarrierLogo: colors.white.normal,
	backgroundButtonPrimary: colors.brand.normal,
	backgroundButtonSecondary: colors.cloud.normal,
	backgroundButtonLink: "rgba(0,0,0,0)",
	backgroundButtonBordered: "rgba(0,0,0,0)",
	backgroundButtonFacebook: colors.social.facebook,
	backgroundButtonGoogle: colors.social.google,
	backgroundButtonDestructive: colors.red.normal,
	backgroundButtonLinkHover: colors.cloud.normal,
	backgroundInput: colors.white.normal,
	backgroundInputDisabled: colors.cloud.normal,
	backgroundAlertSuccess: colors.green.light,
	backgroundAlertInfo: colors.blue.light,
	backgroundAlertWarning: colors.orange.light,
	backgroundAlertCritical: colors.red.light,
	//category:Font size
	//description:Use these sizing tokens for font sizes.
	fontSizeHeadingDisplay: "40px",
	fontSizeHeadingLarge: "28px",
	fontSizeHeadingMedium: "22px",
	fontSizeHeadingSmall: "16px",
	fontSizeTextNormal: "14px",
	fontSizeTextLarge: "16px",
	fontSizeTextSmall: "12px",
	fontSizeMessage: "14px",
	fontSizeButtonLarge: "16px",
	fontSizeButtonNormal: "14px",
	fontSizeButtonSmall: "12px",
	fontSizeInputNormal: "16px",
	fontSizeInputSmall: "14px",
	fontSizeLabelForm: "14px",
	fontSizeMessageForm: "12px",
	//category:Border radius
	//description:Use radius tokens to change the border-radius size (rounded corners).
	borderRadiusCircle: "50%",
	borderRadiusNormal: "3px",
	borderRadiusLarge: "6px",
	borderRadiusSmall: "2px",
	//category:Z Index
	//description:Use layers to show depth of page.
	zIndexDefault: "1",
	zIndexSticky: "100",
	zIndexModalOverlay: "800",
	zIndexModal: "825",
	zIndexOnTheTop: "900",
	//category:Size (width, height)
	//description:
	widthIconSmall: "16px",
	heightIconSmall: "16px",
	widthIconMedium: "24px",
	heightIconMedium: "24px",
	widthIconLarge: "32px",
	heightIconLarge: "32px",
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
	widthCheckbox: "20px",
	//category:Border color
	//description:
	borderColorInput: colors.ink.lighter,
	borderColorInputFocus: colors.blue.normal,
	borderColorInputError: colors.red.normal,
	borderColorInputErrorFocus: colors.red.normal,
	borderColorTableCell: colors.ink.lighter,
	borderColorSection: colors.cloud.normal,
	borderColorModal: colors.cloud.normal,
	borderColorButtonPrimaryBordered: colors.brand.normal,
	borderColorButtonSecondaryBordered: colors.ink.normal,
	borderColorButtonLinkBordered: "transparent",
	borderColorButtonFacebookBordered: colors.social.facebook,
	borderColorButtonGoogleBordered: colors.social.google,
	borderColorButtonDestructiveBordered: colors.red.normal,
	//category:Border style
	//description:
	borderStyleSection: "solid",
	borderWidthSection: "1px",
	borderStyleInput: "solid",
	borderWidthInput: "1px",
	//category:Opacity
	//description:
	opacityOverlay: "0.8",
	opacityButtonDisabled: "0.3",
	opacityRadioButtonDisabled: "0.5",
	opacityCheckboxDisabled: "0.5",
	//category:Font weight
	//description:Use this for setting basic font weights.
	fontWeightNormal: "400",
	fontWeightMedium: "500",
	fontWeightBold: "700",
	fontWeightLinks: "500",
	//category:Spacing
	//description:Use this for setting spacings for elements.
	paddingAlert: "16px",
	paddingAlertWithIcon: "12px",
	paddingButtonSmall: "12px",
	paddingButtonNormal: "16px",
	paddingButtonLarge: "28px",
	paddingInputSmall: "12px",
	paddingInputNormal: "16px",
	paddingButtonSmallWithIcon: "8px",
	paddingButtonNormalWithIcon: "8px",
	paddingButtonLargeWithIcon: "12px",
	marginButtonIconSmall: "8px",
	marginButtonIconNormal: "12px",
	marginButtonIconLarge: "16px",
	spaceXXSmall: "4px",
	spaceXSmall: "8px",
	spaceSmall: "12px",
	spaceMedium: "16px",
	spaceLarge: "24px",
	spaceXLarge: "32px",
	spaceXXLarge: "40px",
	spaceXXXLarge: "52px",
	//category:Duration
	//description:Use this for setting the speed of animation or transition.
	durationFast: "0.2s",
	durationNormal: "0.3s",
	durationSlow: "0.4s",
	//category:Modifier
	//description:Use this for values for transform property, etc.
	modifierDarkenHover: 0.05,
	modifierDarkenActive: 0.1,
	modifierDarkenButtonLink: 0.05,
	modifierScaleButtonActive: 0.9,
	//category:Line height
	//description:
	lineHeightText: "1.4",
	lineHeightHeading: "1.2",
	//category:Text decoration
	//description:
	textDecorationLinkPrimary: "none",
	textDecorationLinkPrimaryHover: "underline",
	textDecorationLinkSecondary: "underline",
	textDecorationLinkSecondaryHover: "underline",
	//category:Box shadow
	//description:
	boxShadowInputFocus: "0px 0px 3px 1px rgba(1,118,210,0.3)",
	boxShadowInputErrorFocus: "0px 0px 3px 1px rgba(210,28,28,0.3)",
};

module.exports = defaultTokens;
