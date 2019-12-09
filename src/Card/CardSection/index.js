// @flow
import * as React from "react";

import KEY_CODE_MAP from "../../common/keyMaps";
import CardWrapper from "../components/CardWrapper";
import { useCard } from "../CardContext";
import SectionHeader from "./components/SectionHeader";
import SectionContent from "./components/SectionContent";
import randomID from "../../utils/randomID";

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
}: Props) => {
  const { addSection, removeSection, index, roundedBorders, noBorderTop, isOpened } = useCard();
  const [opened, setOpened] = React.useState(isOpened || initialExpanded);

  const isControlled = React.useMemo(() => expanded != null, [expanded]);

  // effect that solves controlled component
  React.useEffect(() => {
    if (isControlled) {
      if (expanded) {
        addSection(index);
        setOpened(true);
      } else {
        removeSection(index);
        setOpened(false);
      }
    }
  }, [addSection, expanded, index, isControlled, removeSection]);

  // effect that solves initialExpanded behavior
  React.useEffect(() => {
    if (initialExpanded) {
      addSection(index);
      setOpened(true);
    }
  }, [addSection, index, initialExpanded]);

  const handleClick = () => {
    if (!isControlled) {
      if (!opened) {
        addSection(index);
        setOpened(true);
      } else {
        removeSection(index);
        setOpened(false);
      }
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

  const slideID = React.useMemo(() => randomID("slideID"), []);
  const labelID = React.useMemo(() => randomID("labelID"), []);

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
          slideID={slideID}
          labelID={labelID}
          header={header}
          expandable={expandable}
          expanded={opened}
          actions={actions}
          onClick={expandable ? handleClick : undefined}
          description={description}
          handleKeyDown={handleKeyDown}
        />
      )}

      {children ? (
        <SectionContent
          expanded={opened}
          slideID={slideID}
          labelID={labelID}
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
