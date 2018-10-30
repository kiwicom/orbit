// @flow

import * as React from "react";
// eslint-disable-next-line no-restricted-imports
import { Platform, TouchableNativeFeedback, TouchableOpacity } from "react-native";

import styled from "../styled";

import type { Props } from "./index";

const StyledTouchableOpacity = styled(TouchableOpacity, (props: Props) => ({
  width: props.width,
}));

const StyledTouchableNativeFeedback = styled(TouchableNativeFeedback, (props: Props) => ({
  width: props.width,
}));

/**
 * Touchable renders a touchable that looks native on both iOS and Android.
 * It provides an abstraction on top of TouchableNativeFeedback and
 * TouchableOpacity. On iOS you can pass the props of TouchableOpacity, on
 * Android pass the props of TouchableNativeFeedback.
 */
export default class Touchable extends React.Component<Props> {
  static defaultProps = {
    borderlessRipple: false,
    rippleColor: "rgba(0, 0, 0, .32)",
    disabled: false,
    accessibilityRole: "button",
    width: "auto",
  };

  /**
   * TouchableNativeFeedback.Ripple causes a crash on old Android versions,
   * therefore only enable it on Android Lollipop and above.
   */
  supportsRippleEffect = () => {
    if (this.props.noRipple === true) {
      return false;
    }
    return Platform.OS === "android" && Platform.Version >= 21;
  };

  render = () => {
    // React.Children.only is only necessary for TouchableNativeFeedback
    // but since we are building for both platforms it is here as well
    // to discover this mistake as soon as possible
    const children = React.Children.only(this.props.children);

    // All touchables on Android should have the ripple effect according to
    // platform design guidelines.
    if (this.supportsRippleEffect()) {
      let useForeground = TouchableNativeFeedback.canUseNativeForeground();
      if (this.props.borderlessRipple) {
        useForeground = false;
      }

      return (
        <StyledTouchableNativeFeedback
          {...this.props}
          useForeground={useForeground}
          background={TouchableNativeFeedback.Ripple(
            this.props.rippleColor,
            this.props.borderlessRipple,
          )}
        >
          {children}
        </StyledTouchableNativeFeedback>
      );
    }

    return (
      <StyledTouchableOpacity activeOpacity={0.5} accessibilityRole="button" {...this.props}>
        {children}
      </StyledTouchableOpacity>
    );
  };
}
