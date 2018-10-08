// @flow

import * as React from "react";
import styled from "styled-components";

import type { StylePropType } from "../types/StylesPropType";

/**
 * Now we can use styled like:
 * const Pinky = styled(View, {
 *  backgroundColor: 'pink'
 * });
 *
 * const ColoredView = styled(View, (props) => ({ backgroundColor: props.color}))
 *
 * and we get flow validating our styles
 */

export default (
  Component: React.Node,
  styles: StylePropType | ((props: Object) => StylePropType),
) => styled(Component)([], styles);
