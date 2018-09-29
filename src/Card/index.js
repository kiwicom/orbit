// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import Close from "../icons/Close";
import ButtonLink from "../ButtonLink";
import CardSection, { StyledCardSection } from "./CardSection";
import CardHeader, { StyledCardHeader } from "./CardHeader";
import Loading, { StyledLoading } from "../Loading";
import getSpacingToken from "../common/getSpacingToken";
import { right } from "../utils/rtl";

import type { Props, State } from "./index";

const getBorder = ({ theme }) =>
  `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${theme.orbit.borderColorCard}`;

const getBorderRadius = ({ theme }) => theme.orbit.borderRadiusNormal;

// Logic of borders radius

const StyledChildWrapper = styled.div`
  ${StyledCardSection}, ${StyledCardHeader}, ${StyledLoading} {
    border-top-left-radius: ${({ roundedTopBorders }) => roundedTopBorders && getBorderRadius};
    border-top-right-radius: ${({ roundedTopBorders }) => roundedTopBorders && getBorderRadius};
    border-bottom-left-radius: ${({ roundedBottomBorders }) =>
      roundedBottomBorders && getBorderRadius};
    border-bottom-right-radius: ${({ roundedBottomBorders }) =>
      roundedBottomBorders && getBorderRadius};
    border-left: ${getBorder};
    border-right: ${getBorder};
    border-bottom: ${getBorder};
    background: ${({ theme }) => theme.orbit.backgroundCard};
  }

  + div ${StyledCardSection} {
    border-top: ${({ expanded }) => expanded && getBorder};
  }
`;

StyledChildWrapper.defaultProps = {
  theme: defaultTokens,
};

const StyledCard = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  margin-bottom: ${getSpacingToken};

  ${StyledCardHeader} {
    padding-${right}: ${({ theme, closable }) => closable && theme.orbit.spaceLarge};
    border-bottom: ${({ hasAdjustedHeader }) => hasAdjustedHeader && 0};
  }

  ${StyledChildWrapper} {
    &:first-of-type {
      ${StyledCardHeader}, ${StyledCardSection}, ${StyledLoading} {
        border-top: ${getBorder};
        border-top-left-radius: ${getBorderRadius};
        border-top-right-radius: ${getBorderRadius};
      }

      + ${StyledChildWrapper} ${StyledCardSection} {
        padding-top: ${({ hasAdjustedHeader }) => hasAdjustedHeader && 0};
      }
    }

    &:last-of-type {
      ${StyledCardHeader}, ${StyledCardSection} {
        border-bottom-left-radius: ${getBorderRadius};
        border-bottom-right-radius: ${getBorderRadius};
      }
    }
  }
`;

StyledCard.defaultProps = {
  theme: defaultTokens,
};

const CloseContainer = styled.div`
  position: absolute;
  top: 0;
  ${right}: 0;
  z-index: 1;
`;

// Logic of spacing and animation in expandable Card

const StyledExpandableSectionWrapper = styled.div`
  margin: ${({ theme, expanded }) => expanded && `${theme.orbit.spaceXSmall} 0`};
  transition: margin ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  box-shadow: ${({ expanded }) =>
    expanded && `0 4px 12px 0 rgba(23, 27, 30, 0.1)`}; //TODO Create token boxShadowCard

  // Adds top border of expanded section
  ${StyledCardSection} {
    border-top: ${({ expanded }) => expanded && getBorder};
  }
`;

StyledExpandableSectionWrapper.defaultProps = {
  theme: defaultTokens,
};

class Card extends React.Component<Props, State> {
  state = {
    expandedSections: [],
  };

  getRoundedBorders = (index: number) => {
    const { expandedSections } = this.state;

    const topBorder =
      expandedSections.indexOf(index - 1) !== -1 || expandedSections.indexOf(index) !== -1;
    const bottomBorder =
      expandedSections.indexOf(index + 1) !== -1 || expandedSections.indexOf(index) !== -1;
    return {
      top: topBorder,
      bottom: bottomBorder,
    };
  };

  getChildren = () => {
    // Loading Card Logic
    const children = React.Children.toArray(this.props.children);
    if (children[0] === undefined) {
      // Jest test
      return [];
    }

    if (children[0].type.name === Loading.name && !children[0].props.loading) {
      if (
        !Array.isArray(children[0].props.children) &&
        children[0].props.children.type.toString() === React.Fragment.toString()
      ) {
        return children[0].props.children.props.children;
      }

      return children[0].props.children;
    }
    return children;
  };

  isExpandableCardSection = (item: any) =>
    item.type.name === CardSection.name && item.props.expandable;

  isExpanded = (index: number) => this.state.expandedSections.indexOf(index) !== -1;

  handleToggleSection = (index: number) => {
    this.setState({
      expandedSections:
        this.state.expandedSections.indexOf(index) === -1
          ? [...this.state.expandedSections, index]
          : this.state.expandedSections.filter(value => value !== index),
    });
  };

  hasAdjustedHeader = () => {
    const children = this.getChildren();
    // Check if first element is Header
    if (children[0] !== undefined && children[0].type.name !== CardHeader.name) {
      return false;
    }

    // Check if first section exists
    if (children[1] === undefined) {
      return false;
    }

    return !this.isExpandableCardSection(children[1]);
  };

  renderSection = (section: any, index: number) => {
    const roundedBorders = this.getRoundedBorders(index);
    return (
      <StyledChildWrapper
        roundedTopBorders={roundedBorders.top}
        roundedBottomBorders={roundedBorders.bottom}
      >
        {section}
      </StyledChildWrapper>
    );
  };

  renderExpandableSection = (section: any, index: number) => {
    const isExpanded = this.isExpanded(index);
    const roundedBorders = this.getRoundedBorders(index);
    return (
      <StyledChildWrapper
        roundedTopBorders={roundedBorders.top}
        roundedBottomBorders={roundedBorders.bottom}
        expanded={isExpanded}
      >
        <StyledExpandableSectionWrapper expanded={isExpanded}>
          {React.cloneElement(section, {
            expanded: this.isExpanded(index),
            onClick: () => this.handleToggleSection(index),
          })}
        </StyledExpandableSectionWrapper>
      </StyledChildWrapper>
    );
  };

  render() {
    const { closable, dataTest, spaceAfter, onClose } = this.props;

    const children = this.getChildren();

    return (
      <StyledCard
        closable={closable}
        data-test={dataTest}
        spaceAfter={spaceAfter}
        hasAdjustedHeader={this.hasAdjustedHeader()}
      >
        {children &&
          React.Children.map(children, (item, index) =>
            this.isExpandableCardSection(item)
              ? this.renderExpandableSection(item, index)
              : this.renderSection(item, index),
          )}

        {closable && (
          <CloseContainer>
            <ButtonLink
              type="secondary"
              size="small"
              icon={<Close />}
              onClick={onClose}
              transparent
            />
          </CloseContainer>
        )}
      </StyledCard>
    );
  }
}

export default Card;
