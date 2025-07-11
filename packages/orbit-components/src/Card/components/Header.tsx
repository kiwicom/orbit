import * as React from "react";
import cx from "clsx";

import type * as Common from "../../common/types";
import type { As } from "../../Heading/types";
import ChevronDown from "../../icons/ChevronDown";
import Stack from "../../Stack";
import Heading from "../../Heading";
import Text from "../../Text";
import Close from "../../icons/Close";
import ButtonLink from "../../ButtonLink";

interface Props {
  description?: React.ReactNode;
  actions?: React.ReactNode;
  onClose?: Common.Event<React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>>;
  title?: React.ReactNode;
  titleAs?: As;
  labelClose?: string;
  isSection?: boolean;
  dataA11ySection?: string;
  expandable?: boolean;
  expanded?: boolean;
  header?: React.ReactNode;
}

const Header = ({
  description,
  title,
  titleAs,
  isSection,
  labelClose,
  actions,
  dataA11ySection,
  onClose,
  header,
  expandable,
  expanded,
}: Props) => (
  <Stack align="center" spacing="300">
    {(title || description) && !header && (
      <Stack
        flex
        shrink={!!actions || expandable}
        align="stretch"
        direction="column"
        spacing={isSection ? "none" : "100"}
      >
        <Stack inline spacing="300" align="center">
          {title && (
            <Heading
              type={isSection ? "title4" : "title3"}
              as={titleAs}
              role={undefined} // To avoid requiring the `level` prop
              dataA11ySection={dataA11ySection}
            >
              {title}
            </Heading>
          )}
        </Stack>
        {description && <Text as="div">{description}</Text>}
      </Stack>
    )}
    {header}
    {expandable && !actions && (
      <ChevronDown
        className={cx("duration-fast transition-transform ease-in-out", expanded && "-rotate-180")}
        color="secondary"
        ariaHidden
      />
    )}
    {actions && (
      <Stack inline grow={false} justify="end">
        {actions}
      </Stack>
    )}
    {onClose && !actions && (
      <div className="absolute end-0 top-0">
        <ButtonLink
          type="secondary"
          size="small"
          iconLeft={<Close ariaHidden />}
          onClick={onClose}
          title={labelClose}
        />
      </div>
    )}
  </Stack>
);

export default Header;
