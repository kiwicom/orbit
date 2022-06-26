import * as React from "react";

import SearchModal from "./SearchModal";

interface Props extends Pick<React.ComponentProps<typeof SearchModal>, "onClose"> {}

export default function Search({ onClose }: Props) {
  return <SearchModal onClose={onClose} />;
}
