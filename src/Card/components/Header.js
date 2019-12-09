// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import ChevronDown from "../../icons/ChevronDown";
import Stack from "../../Stack";
import Heading from "../../Heading";
import Text from "../../Text";

const ChevronIcon = styled(ChevronDown)`
  transform: ${({ expanded }) => expanded && "rotate(-180deg)"};
  transition: transform ${({ theme }) => theme.orbit.durationFast} ease-in-out;
`;

ChevronIcon.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  description?: React.Node,
  icon?: React.Node,
  actions?: React.Node,
  title?: React.Node,
  isSection?: boolean,
  dataA11ySection?: string,
  expandable?: boolean,
  expanded?: boolean,
  header?: React.Node,
|};

const Header = ({
  description,
  icon,
  title,
  isSection,
  actions,
  dataA11ySection,
  header,
  expandable,
  expanded,
}: Props) => (
  <Stack align={actions && !header ? "start" : "center"} spacing={header ? "compact" : "none"}>
    {(title || description || icon) && !header && (
      <Stack inline direction="column" spacing={isSection ? "none" : "tight"}>
        <Stack inline spacing="compact">
          {icon}

          {title && (
            <Heading type="title3" element="h2" dataA11ySection={dataA11ySection}>
              {title}
            </Heading>
          )}
        </Stack>

        {description && <Text>{description}</Text>}
      </Stack>
    )}

    {header && icon}

    {header}

    {expandable && !actions && <ChevronIcon expanded={expanded} color="secondary" />}

    {actions && (
      <Stack inline grow={false} justify="end">
        {actions}
      </Stack>
    )}
  </Stack>
);

export default Header;
