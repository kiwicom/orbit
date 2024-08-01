import * as React from "react";
import cx from "clsx";

import type * as Common from "../../../common/types";
import Stack from "../../../Stack";
import Heading from "../../../Heading";
import ChevronDown from "../../../icons/ChevronDown";
import NewWindow from "../../../icons/NewWindow";
import ChevronForward from "../../../icons/ChevronForward";

interface Props {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  expandable?: boolean;
  expanded?: boolean;
  external?: boolean;
  onClick?: Common.Event<
    React.SyntheticEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
  >;
  onKeyDown?: Common.Event<React.KeyboardEvent<HTMLDivElement>>;
  header?: React.ReactNode;
  role?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  id?: string;
  tabIndex?: string | number;
  noHeaderIcon?: boolean;
}

const IconRight = ({
  external,
  expandable,
  className,
}: {
  external?: Props["external"];
  // eslint-disable-next-line react/no-unused-prop-types
  expanded?: Props["expanded"];
  expandable?: Props["expandable"];
  className?: string;
}) => {
  if (expandable) return <ChevronDown color="secondary" className={className} />;
  if (external) return <NewWindow className={className} />;

  return <ChevronForward color="secondary" className={className} reverseOnRtl />;
};

const TileHeader = ({
  icon,
  title,
  description,
  expandable,
  expanded,
  external,
  onClick,
  header,
  role,
  ariaExpanded,
  ariaControls,
  id,
  tabIndex,
  onKeyDown,
  noHeaderIcon,
}: React.PropsWithChildren<Props>) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- has been like this before
  <div
    className="p-400 text-normal duration-fast lm:p-600 w-full cursor-pointer leading-normal transition-colors ease-in-out"
    onClick={onClick}
    onKeyDown={onKeyDown}
    role={role}
    aria-expanded={ariaExpanded}
    aria-controls={ariaControls}
    id={id}
    tabIndex={tabIndex ? Number(tabIndex) : undefined}
  >
    <Stack align="center" justify="between" shrink spacing="none">
      {icon && (
        <div className="text-icon-primary-foreground me-200 shrink-0 items-center self-start">
          {icon}
        </div>
      )}
      {header ||
        ((title || description) && (
          <Stack spacing="none" direction="column" shrink>
            {title && (
              <div className="flex w-full items-center">
                <Heading type="title4" as="h3">
                  {title}
                </Heading>
              </div>
            )}
            {description && (
              <div
                className={cx(
                  "font-base text-normal text-primary-foreground w-full font-normal leading-normal",
                  title != null && "mt-100",
                )}
              >
                {description}
              </div>
            )}
          </Stack>
        ))}
      {!noHeaderIcon && (
        <IconRight
          className={cx(
            "orbit-tile-header-icon-right text-icon-secondary-foreground ms-300 duration-fast transition-all ease-in-out",
            expanded === true && "-rotate-180",
          )}
          external={external}
          expandable={expandable}
          expanded={expanded}
        />
      )}
    </Stack>
  </div>
);

export default TileHeader;
