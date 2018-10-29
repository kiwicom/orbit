// @flow

import * as React from "react";
import styled from "styled-components";

import type { Style as _Style } from "../types/Style";

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

export default (Component: React.ElementType, styles: _Style | ((props: Object) => _Style)) =>
  styled(Component)([], styles);

export type Style = _Style;
