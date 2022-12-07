import * as React from "react";
import styled, { css } from "styled-components";

import Loading from "../Loading";
import CardWrapper from "./components/CardWrapper";
import { Provider as SectionProvider } from "./CardContext";
import defaultTheme from "../defaultTheme";
import getSpacingToken from "../common/getSpacingToken";
import Header from "./components/Header";
import { ELEMENT_OPTIONS } from "../Heading/consts";
import type { Props } from "./types";
import type * as Common from "../common/types";
import useTheme from "../hooks/useTheme";
import { marginUtility } from "../utils/common";

export const StyledCard = styled.div<{
  spaceAfter?: Common.SpaceAfterSizes;
  margin?: Props["margin"];
}>`
  ${({ margin, theme }) => css`
    width: 100%;
    box-sizing: border-box;
    position: relative;
    font-family: ${theme.orbit.fontFamily};
    ${marginUtility(margin)}
  `};
`;

StyledCard.defaultProps = {
  theme: defaultTheme,
};

const Card = ({
  title,
  titleAs = ELEMENT_OPTIONS.H2,
  icon,
  actions,
  description,
  children,
  dataTest,
  id,
  onClose,
  loading,
  margin,
  header,
  spaceAfter,
  dataA11ySection,
}: Props) => {
  const [expandedSections, setExpandedSections] = React.useState<number[]>([]);
  const theme = useTheme();

  // handles array of expanded sections
  const addSection = React.useCallback((index: number) => {
    setExpandedSections(prev => (prev.indexOf(index) === -1 ? [...prev, index] : prev));
  }, []);

  const removeSection = React.useCallback((index: number) => {
    setExpandedSections(prev =>
      prev.indexOf(index) !== -1 ? prev.filter(val => val !== index) : prev,
    );
  }, []);

  // Currently disable that code, becuase of IE 11, where it does not work
  // It will be fixed later, when we'll find solution
  const renderSection = item => {
    if (React.isValidElement(item)) {
      // if (item.props.children && item.type.name !== "CardSection") {
      //   return React.createElement(CardSection, {
      //     ...item.props.children.props,
      //     key: index,
      //   });

      return React.cloneElement(item);
    }

    return null;
  };

  return (
    <StyledCard
      // TODO: remove spaceAfter in the next major version
      margin={spaceAfter ? { bottom: getSpacingToken({ spaceAfter, theme }) } : margin}
      data-test={dataTest}
      id={id}
    >
      {(title || header) && !loading && (
        <CardWrapper bottomBorder={!children || expandedSections.some(val => val === 0)}>
          <Header
            icon={icon}
            description={description}
            dataA11ySection={dataA11ySection}
            actions={actions}
            title={title}
            titleAs={titleAs}
            onClose={onClose}
            header={header}
          />
        </CardWrapper>
      )}

      {children
        ? React.Children.map(children, (item, key) => {
            if (!item) return null;
            const topRoundedBorder =
              expandedSections.indexOf(key - 1) !== -1 || expandedSections.indexOf(key) !== -1;
            const bottomRounderBorder =
              expandedSections.indexOf(key + 1) !== -1 || expandedSections.indexOf(key) !== -1;

            // This is used for the case when user wants to map sections and change their order
            // related issue: #1005
            // @ts-expect-error TODO
            const index = Number(item.key) || key;

            return (
              <SectionProvider
                value={{
                  addSection,
                  removeSection,
                  roundedBorders: {
                    top: topRoundedBorder,
                    bottom: bottomRounderBorder,
                  },
                  index,
                  noBorderTop: index === 0 && Boolean(title),
                  isOpened: expandedSections.some(val => val === index),
                }}
              >
                {loading ? (
                  <CardWrapper noPadding>
                    <Loading loading={loading} type="boxLoader">
                      {renderSection(item)}
                    </Loading>
                  </CardWrapper>
                ) : (
                  renderSection(item)
                )}
              </SectionProvider>
            );
          })
        : null}
    </StyledCard>
  );
};

export default Card;
export { default as CardSection } from "./CardSection";
