// @flow
import { Platform } from "react-native";

import { createPlatformStyles } from "../index";

let originalPlatform;

beforeEach(() => {
  originalPlatform = Platform.OS;
});
afterEach(() => {
  Platform.OS = originalPlatform;
});

const mockStyles = {
  fontSize: "20px",
  fontWeight: "bold",
  ios: {
    backgroundColor: "blue",
  },
  android: {
    backgroundColor: "green",
  },
  web: {
    backgroundColor: "orange",
  },
};
const fontSize = "10px";
const color = "red";

const mockStylesFunc = props => ({
  ...mockStyles,
  fontSize: props.fontSize,
  android: {
    backgroundColor: "green",
    color: props.color,
  },
  web: {
    color: props.color,
    backgroundColor: "orange",
  },
  ios: {
    backgroundColor: "blue",
    color: props.color,
  },
});

describe("createPlatformStyles", () => {
  test("works with Android", () => {
    Platform.OS = "android";

    const result = {
      backgroundColor: "green",
      fontSize: "20px",
      fontWeight: "bold",
    };

    expect(createPlatformStyles(mockStyles)).toEqual(result);
    expect(createPlatformStyles(mockStylesFunc({ fontSize, color }))).toEqual({
      ...result,
      fontSize,
      color,
    });
  });

  test("works with iOS", () => {
    Platform.OS = "ios";

    const result = {
      backgroundColor: "blue",
      fontSize: "20px",
      fontWeight: "bold",
    };

    expect(createPlatformStyles(mockStyles)).toEqual(result);
    expect(createPlatformStyles(mockStylesFunc({ fontSize, color }))).toEqual({
      ...result,
      fontSize,
      color,
    });
  });
  test("works with Web", () => {
    Platform.OS = "web";

    const result = {
      backgroundColor: "orange",
      fontSize: "20px",
      fontWeight: "bold",
    };

    expect(createPlatformStyles(mockStyles)).toEqual(result);
    expect(createPlatformStyles(mockStylesFunc({ fontSize, color }))).toEqual({
      ...result,
      fontSize,
      color,
    });
  });

  test("works with fallback", () => {
    Platform.OS = "";

    expect(createPlatformStyles(mockStyles)).toEqual({
      fontSize: "20px",
      fontWeight: "bold",
    });
    expect(createPlatformStyles(mockStylesFunc({ fontSize, color }))).toEqual({
      fontWeight: "bold",
      fontSize,
    });
  });
});
