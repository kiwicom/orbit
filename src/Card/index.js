// @flow
import * as React from "react";
import styled from "styled-components";

import Loading from "../Loading";
import CardWrapper from "./components/CardWrapper";
import { Provider as SectionProvider } from "./CardContext";
import defaultTheme from "../defaultTheme";
import getSpacingToken from "../common/getSpacingToken";
import Header from "./components/Header";

import type { Props } from "./index";

const StyledCard = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  margin-bottom: ${getSpacingToken};
`;

StyledCard.defaultProps = {
  theme: defaultTheme,
};

const Card = ({
  title,
  icon,
  actions,
  description,
  children,
  dataTest,
  loading,
  header,
  spaceAfter,
  dataA11ySection,
}: Props) => {
  const [expandedSections, setExpandedSections] = React.useState([]);

  // handles array of expanded sections
  const toggleSection = React.useCallback((index: number) => {
    setExpandedSections(prev =>
      prev.indexOf(index) === -1 ? [...prev, index] : prev.filter(val => val !== index),
    );
  }, []);

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
  // eslint-disable-next-line no-unused-vars
  const renderSection = (item, index) => {
    if (React.isValidElement(item)) {
      // if (item.props.children && item.type.name !== "CardSection") {
      //   return React.createElement(CardSection, {
      //     ...item.props.children.props,
      //     key: index,
      //   });
      // }
      return React.cloneElement(item);
    }

    return null;
  };

  console.log(expandedSections);
  return (
    <StyledCard spaceAfter={spaceAfter} data-test={dataTest}>
      {title && !loading && (
        <CardWrapper bottomBorder={!children || expandedSections.some(val => val === 0)}>
          <Header
            icon={icon}
            description={description}
            dataA11ySection={dataA11ySection}
            actions={actions}
            title={title}
            header={header}
          />
        </CardWrapper>
      )}

      {children
        ? React.Children.map(children, (item, index) => {
            const topRoundedBorder =
              expandedSections.indexOf(index - 1) !== -1 || expandedSections.indexOf(index) !== -1;
            const bottomRounderBorder =
              expandedSections.indexOf(index + 1) !== -1 || expandedSections.indexOf(index) !== -1;

            return (
              <SectionProvider
                value={{
                  toggleSection,
                  addSection,
                  removeSection,
                  roundedBorders: {
                    top: topRoundedBorder,
                    bottom: bottomRounderBorder,
                  },
                  index,
                  noBorderTop: index === 0 && title,
                  isOpened: expandedSections.indexOf(index) !== -1,
                }}
              >
                {loading ? (
                  <CardWrapper noPadding>
                    <Loading loading={loading} type="boxLoader">
                      {renderSection(item, index)}
                    </Loading>
                  </CardWrapper>
                ) : (
                  renderSection(item, index)
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
