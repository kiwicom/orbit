import React from "react";
import { Text, Checkbox, Stack, Heading, Grid, Button } from "@kiwicom/orbit-components";
import { StarEmpty, StarFull } from "@kiwicom/orbit-components/icons";
import styled, { css } from "styled-components";

import Tile from "../Tile";
import AddBookmark from "./AddBookmark";
import RecentBookmarks from "./RecentBookmarks";
import { useBookmarks } from "../../services/bookmarks";

const getButtonTextStatus = ({ isEditing, selected }) => {
  if (isEditing && selected === 0) return `Done`;
  if (isEditing && selected > 0) return `Remove selected(${selected})`;
  return `Edit bookmarks`;
};

const getButtonTypeStatus = ({ isEditing, selected }) => {
  if (isEditing && selected === 0) return `primary`;
  if (isEditing && selected > 0) return `critical`;
  return `secondary`;
};

const tileMixin = css`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    border-radius: 16px;
    box-sizing: border-box;
    padding: ${theme.orbit.spaceXLarge};
    box-shadow: ${theme.orbit.boxShadowAction};
    > div {
      height: 100%;
      margin-right: ${theme.orbit.spaceXSmall};
    }

    label {
      align-items: center;
      width: 20px;
    }
  `}
`;

const StyledTile = styled.div`
  ${tileMixin};
`;

const StarIcon = styled(StarEmpty)`
  display: inline;
  vertical-align: -0.2em;
`;

const StyledNowrap = styled.span`
  white-space: nowrap;
`;

const BookmarkContent = ({ title, description, slug }) => (
  <Stack flex shrink direction="column" spacing="XXSmall">
    <Heading type="title3">{title}</Heading>
    <Stack direction="column" spacing="small">
      <Text size="small" type="secondary">
        {slug}
      </Text>
      <Text>{description}</Text>
    </Stack>
  </Stack>
);

const Bookmarks = () => {
  const { bookmarks, removeBookmark } = useBookmarks();
  const [isEditing, setIsEditing] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const [checked, setChecked] = React.useState(() =>
    Object.values(bookmarks).reduce((acc, { title }) => {
      if (!acc[title]) acc[title] = false;
      return acc;
    }, {}),
  );

  return bookmarks && Object.keys(bookmarks).length > 0 ? (
    <Stack direction="column" align="end">
      <Grid width="100%" columns="1fr" gap="1rem" tablet={{ columns: "1fr 1fr" }}>
        {isEditing
          ? Object.entries(bookmarks).map(
              ([slug, props]) =>
                props.title && (
                  <StyledTile key={slug}>
                    <BookmarkContent {...props} slug={slug} />
                    <Checkbox
                      name={props.title}
                      checked={checked[props.title]}
                      onChange={event => {
                        const { name } = event.currentTarget;
                        if (!checked[props.title]) setSelected(prev => prev + 1);
                        else setSelected(prev => prev - 1);
                        setChecked(prevState => ({ ...prevState, [name]: !checked[name] }));
                      }}
                    />
                  </StyledTile>
                ),
            )
          : Object.entries(bookmarks).map(
              ([slug, props]) =>
                props.title && (
                  <Tile isBookmark key={slug} href={slug} title={props.title} icon={<StarFull />}>
                    {props.description}
                  </Tile>
                ),
            )}
      </Grid>
      <Button
        circled
        type={getButtonTypeStatus({ isEditing, selected })}
        onClick={() => {
          if (isEditing) {
            if (selected > 0) {
              setIsEditing(false);
              setSelected(0);
              Object.entries(checked).forEach(([name, val]) => {
                // @ts-expect-error TODO
                const { href } = Object.values(bookmarks).find(({ title }) => title === name);
                if (val) removeBookmark(href);
              });
            }
            if (selected === 0) setIsEditing(false);
          } else setIsEditing(true);
        }}
      >
        {getButtonTextStatus({ isEditing, selected })}
      </Button>
    </Stack>
  ) : (
    <Text type="secondary">
      No bookmarks yet. You can can bookmark pages by clicking on{" "}
      <StyledNowrap>
        &ldquo;
        <StarIcon size="small" />
        &rdquo;
      </StyledNowrap>{" "}
      next to the page title.
    </Text>
  );
};

export default Bookmarks;
export { RecentBookmarks, AddBookmark };
