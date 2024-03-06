import * as React from "react";
import cx from "clsx";

import type { Props, Option } from "../types";
import ListChoice from "../../ListChoice";
import CheckCircle from "../../icons/CheckCircle";

interface InputSelectOptionProps {
  id: Props["id"];
  active: boolean;
  isSelected: boolean;
  title: Option["title"];
  description: Option["description"];
  prefix: Option["prefix"];
  onClick: (ev: React.SyntheticEvent) => void;
}

const InputSelectOption = React.forwardRef<HTMLDivElement, InputSelectOptionProps>(
  ({ active, id, onClick, isSelected, title, description, prefix }, ref) => {
    return (
      <li className={cx(active && "[&_.orbit-list-choice]:bg-cloud-light")}>
        <ListChoice
          id={id}
          onClick={onClick}
          ref={ref}
          tabIndex={-1}
          selected={isSelected}
          action={isSelected && <CheckCircle color="info" />}
          role="option"
          title={title}
          description={description}
          icon={prefix}
        />
      </li>
    );
  },
);

export default InputSelectOption;
