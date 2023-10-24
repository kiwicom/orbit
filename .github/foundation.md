# Foundation

Foundation object offers us very easy and quick way how to define design tokens and also how to simply create needed themes.

> You can overwrite some or all properties in this object with `getTokens` function.

## Default foundation object

```jsx
const foundation = {
  palette: {
    product: {
      light: "#ECF8F7",
      lightHover: "#D6F0EE",
      lightActive: "#C0E8E4",
      normal: "#00A991",
      normalHover: "#009882",
      normalActive: "#008F7B",
      dark: "#007F6D",
      darkHover: "#007060",
      darkActive: "#006657",
      darker: "#005C4E",
    },
    white: {
      normal: "#FFFFFF",
      normalHover: "#F1F4F7",
      normalActive: "#E7ECF1",
    },
    cloud: {
      light: "#F5F7F9",
      lightHover: "#E5EAEF",
      lightActive: "#D6DEE6",
      normal: "#EFF2F5",
      normalHover: "#DCE3E9",
      normalActive: "#CAD4DE",
      dark: "#E8EDF1",
    },
    ink: {
      light: "#697D95",
      lightHover: "#5D738E",
      lightActive: "#4A617C",
      normal: "#4F5E71",
      normalHover: "#3E4E63",
      normalActive: "#324256",
      dark: "#252A31",
      darkHover: "#181B20",
      darkActive: "#0B0C0F",
    },
    orange: {
      light: "#FDF0E3",
      lightHover: "#FAE2C7",
      lightActive: "#F8D3AB",
      normal: "#F9971E",
      normalHover: "#F38906",
      normalActive: "#D67906",
      dark: "#AB3307",
      darkHover: "#972C07",
      darkActive: "#7A2405",
      darker: "#842706",
    },
    red: {
      light: "#FAEAEA",
      lightHover: "#F4D2D2",
      lightActive: "#EEB9B9",
      normal: "#D21C1C",
      normalHover: "#B91919",
      normalActive: "#9D1515",
      dark: "#970C0C",
      darkHover: "#890B0B",
      darkActive: "#6D0909",
      darker: "#760909",
    },
    green: {
      light: "#EBF4EC",
      lightHover: "#D7EAD9",
      lightActive: "#C3DFC7",
      normal: "#28A138",
      normalHover: "#238B31",
      normalActive: "#1D7228",
      dark: "#2D7738",
      darkHover: "#276831",
      darkActive: "#1F5126",
      darker: "#235C2B",
    },
    blue: {
      light: "#E5F7FF",
      lightHover: "#C7EEFF",
      lightActive: "#A8E5FF",
      normal: "#0172CB",
      normalHover: "#0161AC",
      normalActive: "#01508E",
      dark: "#005AA3",
      darkHover: "#004F8F",
      darkActive: "#003E70",
      darker: "#004680",
    },
    social: {
      facebook: "#1778F2",
      facebookHover: "#0C69DE",
      facebookActive: "#0B5CC1",
    },
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    bold: "700",
  },
  fontSize: {
    small: "13px",
    normal: "15px",
    large: "16px",
    extraLarge: "18px",
  },
  fontFamily: {
    base: "'Roboto', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
  },
  space: {
    XXSmall: "4px",
    XSmall: "8px",
    small: "12px",
    medium: "16px",
    large: "24px",
    XLarge: "32px",
    XXLarge: "40px",
    XXXLarge: "52px",
  },
  size: {
    small: "16px",
    medium: "24px",
    large: "32px",
    extraLarge: "44px",
    extraExtraLarge: "52px",
  },
  breakpoint: {
    smallMobile: 320,
    mediumMobile: 414,
    largeMobile: 576,
    tablet: 768,
    desktop: 992,
    largeDesktop: 1200,
  },
  borderRadius: {
    circle: "50%",
    small: "2px",
    normal: "3px",
    large: "6px",
  },
};
```
