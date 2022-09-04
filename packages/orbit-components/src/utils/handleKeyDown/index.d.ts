import React from "react";

import * as Common from "../../common/common";

type Event<T> = Common.Event<React.SyntheticEvent<T>> | React.KeyboardEventHandler<T>;

declare const HandleKeyDown: <K>(
  onClick?: Event<K>,
  action?: () => void,
) => React.KeyboardEventHandler<K>;

export { HandleKeyDown, HandleKeyDown as default };
