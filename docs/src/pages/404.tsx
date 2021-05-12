import React from "react";
import { PageProps } from "gatsby";
import { Stack, Heading, Button } from "@kiwicom/orbit-components";
import { Trip as TripIcon, Search as SearchIcon } from "@kiwicom/orbit-components/icons";

import DocLayout from "../components/DocLayout";
import Search from "../components/Search";

export default function PageNotFound({ location, path }: PageProps) {
  const [searchOpen, setSearchOpen] = React.useState<boolean>(false);

  return (
    <DocLayout custom title="Page not found" location={location} path={path}>
      <Stack flex direction="row">
        <Stack spacing="XLarge">
          <Stack spacing="small">
            <Heading as="h1" type="display">
              Page wasn&apos;t found. It probably doesn&apos;t exist.
            </Heading>
            <p>Try our search to find the content you&apos;re looking for.</p>
          </Stack>
          <Stack flex direction="row" spacing="XSmall">
            <Button circled type="primary" iconRight={<TripIcon />}>
              Return home
            </Button>
            <Button
              circled
              type="primarySubtle"
              iconLeft={<SearchIcon />}
              onClick={() => setSearchOpen(true)}
            >
              Search
            </Button>
            {searchOpen && <Search onClose={() => setSearchOpen(false)} />}
          </Stack>
        </Stack>
      </Stack>
    </DocLayout>
  );
}
