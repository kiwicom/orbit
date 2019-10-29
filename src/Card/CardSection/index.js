// @flow
import * as React from "react";

import KEY_CODE_MAP from "../../common/keyMaps";
import CardWrapper from "../components/CardWrapper";
import { useCard } from "../CardContext";
import SectionHeader from "./components/SectionHeader";
import SectionContent from "./components/SectionContent";

import type { Props } from "./index";

const CardSection = ({
  title,
  icon,
  description,
  children,
  expandable = false,
  expanded,
  initialExpanded = false,
  onClose,
  header,
  onExpand,
  dataTest,
  actions,
  noSeparator,
  dataA11ySection,
}: Props) => {
  const [opened, setOpened] = React.useState(initialExpanded || expanded);

  const { onToggle, setExpandedSections, index, roundedBorders, noBorderTop } = useCard();

  React.useEffect(() => {
    if (expandable && (initialExpanded || expanded)) {
      setExpandedSections([index]);
    }

    if (!initialExpanded) {
      setOpened(expanded);
    }

    return () => {
      setExpandedSections([]);
    };
  }, [expandable, expanded, index, initialExpanded, setExpandedSections]);

  const handleClick = () => {
    if (expanded == null) {
      onToggle();
      setOpened(state => !state);
    }

    if (opened && onClose) {
      onClose();
    }

    if (!opened && onExpand) {
      onExpand();
    }
  };

  const handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLDivElement>) => {
    if (ev.keyCode === KEY_CODE_MAP.SPACE) {
      ev.preventDefault();
    }

    if (ev.keyCode === KEY_CODE_MAP.ENTER || ev.keyCode === KEY_CODE_MAP.SPACE) {
      handleClick();
    }
  };

  return (
    <CardWrapper
      dataTest={dataTest}
      roundedTop={roundedBorders.top}
      roundedBottom={roundedBorders.bottom}
      expanded={opened}
      expandable={expandable}
      noBorderTop={noBorderTop}
    >
      {(title || header) && (
        <SectionHeader
          title={title}
          icon={icon}
          header={header}
          expandable={expandable}
          expanded={opened}
          actions={actions}
          onClick={expandable ? handleClick : undefined}
          description={description}
          handleKeyDown={handleKeyDown}
          dataA11ySection={dataA11ySection}
        />
      )}

      {children ? (
        <SectionContent
          expanded={opened}
          hasPaddingTop={!!(title != null || header != null || expanded)}
          noSeparator={noSeparator}
          expandable={expandable}
        >
          {children}
        </SectionContent>
      ) : null}
    </CardWrapper>
  );
};

export default CardSection;
