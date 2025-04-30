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
  ref?: React.Ref<HTMLDivElement>;
}

const InputSelectOption = ({
  ref,
  active,
  id,
  onClick,
  isSelected,
  title,
  description,
  prefix,
}: InputSelectOptionProps) => {
  return (
    <div className={cx(active && "[&_.orbit-list-choice]:bg-cloud-light")}>
      <ListChoice
        id={id}
        onClick={onClick}
        ref={ref}
        tabIndex={-1}
        selected={isSelected}
        action={isSelected && <CheckCircle ariaHidden color="info" />}
        role="option"
        title={title}
        description={description}
        icon={prefix}
      />
    </div>
  );
};

export default InputSelectOption;
