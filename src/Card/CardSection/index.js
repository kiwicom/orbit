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
  const {
    toggleSection,
    addSection,
    removeSection,
    index,
    roundedBorders,
    noBorderTop,
    isOpened,
  } = useCard();

  const isControlled = React.useMemo(() => expanded != null, [expanded]);

  React.useEffect(() => {
    if (isControlled) {
      if (expanded) {
        addSection(index);
      } else {
        removeSection(index);
      }
    }
  }, [addSection, expanded, index, isControlled, removeSection, toggleSection]);

  React.useEffect(() => {
    if (initialExpanded) {
      addSection(index);
    }
  }, [addSection, index, initialExpanded]);

  const handleClick = () => {
    if (!isControlled) {
      toggleSection(index);
    }

    if (isOpened && onClose) {
      onClose();
    }

    if (!isOpened && onExpand) {
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
      expanded={isOpened}
      expandable={expandable}
      noBorderTop={noBorderTop}
    >
      {(title || header) && (
        <SectionHeader
          title={title}
          icon={icon}
          header={header}
          expandable={expandable}
          expanded={isOpened}
          actions={actions}
          onClick={expandable ? handleClick : undefined}
          description={description}
          handleKeyDown={handleKeyDown}
          dataA11ySection={dataA11ySection}
        />
      )}

      {children ? (
        <SectionContent
          expanded={isOpened}
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
