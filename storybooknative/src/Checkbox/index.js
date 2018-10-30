// @flow

import * as React from "react";
import { View } from "react-native";

import styled from "../styled";
import Touchable from "../Touchable";

import type { Props } from "./index";

const StyledIconPlaceholder = styled(View, () => ({}));

const StyledWrapper = styled(View, () => ({}));

const StyledLabel = styled(View, () => ({}));

const StyledCheckbox = styled(View, () => ({}));

const StyledNotChecked = styled(View, () => ({}));

export default function Checkbox(props: Props) {
  return (
    <Touchable onPress={props.onPress} disabled={false}>
      <StyledWrapper>
        <StyledLabel>{props.children}</StyledLabel>
        <StyledCheckbox>
          {props.isChecked ? <StyledIconPlaceholder /> : <StyledNotChecked />}
        </StyledCheckbox>
      </StyledWrapper>
    </Touchable>
  );
}
