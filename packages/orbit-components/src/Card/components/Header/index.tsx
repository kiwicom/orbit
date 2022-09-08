import * as React from "react";
import styled from "styled-components";

import transition from "../../../utils/transition";
import { right } from "../../../utils/rtl";
import defaultTheme from "../../../defaultTheme";
import ChevronDown from "../../../icons/ChevronDown";
import Stack from "../../../Stack";
import Heading from "../../../Heading";
import Text from "../../../Text";
import Close from "../../../icons/Close";
import useTranslate from "../../../hooks/useTranslate";
import ButtonLink from "../../../ButtonLink";
import { Props } from "./types";

const ChevronIcon = styled(ChevronDown)<{ expanded?: Props["expanded"] }>`
  transform: ${({ expanded }) => expanded && "rotate(-180deg)"};
  transition: ${transition(["transform"], "fast", "ease-in-out")};
`;

ChevronIcon.defaultProps = {
  theme: defaultTheme,
};

const StyledCloseContainer = styled.div`
  position: absolute;
  top: 0;
  ${right}: 0;
  z-index: 1;
`;

const CardCloseButton = ({ onClick }) => {
  const translate = useTranslate();
  return (
    <ButtonLink
      type="secondary"
      size="small"
      iconLeft={<Close />}
      onClick={onClick}
      title={translate("button_close")}
    />
  );
};

const Header = ({
  description,
  icon,
  title,
  titleAs,
  isSection,
  actions,
  dataA11ySection,
  onClose,
  header,
  expandable,
  expanded,
}: Props) => (
  <Stack align={actions && !header ? "start" : "center"} spacing={header ? "small" : "none"}>
    {(title || description || icon) && !header && (
      <Stack
        flex
        shrink={!!actions || expandable}
        align="stretch"
        direction="column"
        spacing={isSection ? "none" : "XXSmall"}
      >
        <Stack inline spacing="small" align="center">
          {icon}
          {title && (
            <Heading
              type={isSection ? "title4" : "title3"}
              as={titleAs}
              dataA11ySection={dataA11ySection}
            >
              {title}
            </Heading>
          )}
        </Stack>
        {description && <Text as="div">{description}</Text>}
      </Stack>
    )}
    {header && icon}
    {header}
    {expandable && !actions && <ChevronIcon color="secondary" expanded={expanded} />}
    {actions && (
      <Stack inline grow={false} justify="end">
        {actions}
      </Stack>
    )}
    {onClose && !actions && (
      <StyledCloseContainer>
        <CardCloseButton onClick={onClose} />
      </StyledCloseContainer>
    )}
  </Stack>
);

export default Header;
