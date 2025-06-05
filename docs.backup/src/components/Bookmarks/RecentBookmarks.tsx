import React from "react";
import { Grid } from "@kiwicom/orbit-components";
import { StarFull } from "@kiwicom/orbit-components/icons";

import Tile from "../Tile";
import { useBookmarks } from "../../services/bookmarks";

const RecentBookmarks = () => {
  const { bookmarks } = useBookmarks();

  return (
    <Grid columns="1fr" gap="1rem" desktop={{ columns: "1fr 1fr" }}>
      {bookmarks &&
        Object.keys(bookmarks).length > 0 &&
        Object.entries(bookmarks)
          .slice(0, 2)
          .map(([key, { title, description }]) => (
            <Tile isBookmark key={key} title={title} href={key} icon={<StarFull />}>
              {description}
            </Tile>
          ))}
    </Grid>
  );
};

export default RecentBookmarks;
