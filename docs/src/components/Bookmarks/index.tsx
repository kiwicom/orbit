import React from "react";
import { Stack, Button, Portal, Drawer } from "@kiwicom/orbit-components";
import { StarEmpty } from "@kiwicom/orbit-components/icons";
import { Link } from "gatsby";
import styled from "styled-components";

import Switch from "../Switch";
import { save, load } from "../../utils/storage";
import { useBookmarks } from "../../services/bookmarks";

const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.orbit.colorTextSecondary};
  &:hover {
    color: ${({ theme }) => theme.orbit.colorTextLinkPrimary};
  }
`;

const Bookmarks = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [checked, setChecked] = React.useState<boolean>(false);
  const { bookmarks } = useBookmarks();

  React.useEffect(() => {
    if (load("devMode") === "enabled") setChecked(true);
    else setChecked(false);
  }, []);

  const handleChange = () => {
    if (load("devMode") === "enabled") {
      setChecked(false);
      save("devMode", "disabled");
    } else {
      setChecked(true);
      save("devMode", "enabled");
    }
  };

  return (
    <>
      <Button
        type="white"
        iconLeft={<StarEmpty />}
        circled
        title="Open bookmarks"
        onClick={() => setOpen(true)}
      />
      <Portal>
        <Drawer
          shown={open}
          actions={
            <Switch onChange={handleChange} checked={checked}>
              Developer Mode
            </Switch>
          }
          onClose={() => setOpen(false)}
        >
          {bookmarks && (
            <Stack direction="column">
              <h3>Your bookmarks</h3>
              {Object.entries(bookmarks).map(
                ([key, slug]) =>
                  slug && (
                    <StyledLink key={key} to={slug}>
                      {String(slug)
                        .split("/")
                        .filter(Boolean)
                        .map(s => s[0].toUpperCase().concat(s.slice(1)))
                        .join(" / ")}
                    </StyledLink>
                  ),
              )}
            </Stack>
          )}
        </Drawer>
      </Portal>
    </>
  );
};

export default Bookmarks;
