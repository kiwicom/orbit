import * as React from "react";
import styled, { css } from "styled-components";
import { graphql, useStaticQuery, Link } from "gatsby";

import { capitalize, omitNumbers } from "../../utils/common";

const StyledList = styled.ul`
  padding: 10px 0;
  & > li {
    margin-left: 10px;
    font-weight: 500;
    font-size: calc(1em - 2px);
    a {
      outline: none;
      &:focus,
      &:hover {
        color: ${({ theme }) => theme.orbit.colorTextLinkPrimary};
      }
    }
  }
`;

const StyledCollectionWrapper = styled.li<{ expanded: boolean }>`
  ${({ theme, expanded }) => css`
    padding: 10px 20px;
    margin: 0 -20px;
    cursor: pointer;
    background: #fff;
    color: ${theme.orbit.colorTextSecondary};
    outline: 0;
    span {
      color: ${expanded && theme.orbit.colorTextPrimary};
    }

    &:hover {
      background: ${theme.orbit.paletteCloudLightHover};
    }

    &:focus {
      background: ${theme.orbit.paletteCloudLight};
    }
  `}
`;

interface Props {
  name: string;
}

export default function MobileNavigation({ name }: Props) {
  const [isExpanded, setExpanded] = React.useState(false);
  const handleExpanded = () => setExpanded(prev => !prev);
  const handleKeyDown = (ev: React.KeyboardEvent<HTMLLIElement>) => {
    if (ev.key === "Enter") handleExpanded();
  };

  const { allMdx } = useStaticQuery(graphql`
    query CollectionQuery {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);

  const data = allMdx.nodes
    .filter(({ fields }) => fields.slug.includes(name))
    .map(({ fields, frontmatter }) => ({
      title: frontmatter.title,
      slug: omitNumbers(fields.slug),
    }));

  return (
    <StyledCollectionWrapper
      onClick={handleExpanded}
      role="button"
      tabIndex={0}
      expanded={isExpanded}
      aria-labelledby={name}
      aria-controls="dropdown"
      onKeyDown={ev => handleKeyDown(ev)}
    >
      <span>{capitalize(name.split("-").join(" "))}</span>

      {isExpanded && (
        // TODO: evaluate this error
        // eslint-disable-next-line jsx-a11y/role-supports-aria-props
        <StyledList
          // eslint-disable-next-line @kiwicom/orbit-internal/unique-id
          id="dropdown"
          role="menu"
          aria-labelledby="menubutton"
          aria-expanded={isExpanded}
        >
          {data.map(({ title, slug }) => (
            <li key={title}>
              <Link to={`/${slug}`}>{title}</Link>
            </li>
          ))}
        </StyledList>
      )}
    </StyledCollectionWrapper>
  );
}
