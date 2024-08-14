import React from "react";
import { PageProps, Link } from "gatsby";
import { Stack, Heading, Button, Illustration } from "@kiwicom/orbit-components";
import { Trip as TripIcon, Search as SearchIcon } from "@kiwicom/orbit-components/icons";

import DocLayout from "../components/DocLayout";
import Search from "../components/Search";

export default function PageNotFound({ location }: PageProps) {
  const [searchOpen, setSearchOpen] = React.useState<boolean>(false);

  return (
    <DocLayout custom noElevation title="Page not found" location={location} path="/" noTopBar>
      <Stack flex>
        <Stack spacing="800">
          <Stack spacing="300">
            <Heading as="h1" type="display">
              Page wasn&apos;t found. It probably doesn&apos;t exist.
            </Heading>
            <p>Try our search to find the content you&apos;re looking for.</p>
          </Stack>
          <Illustration name="Error404" size="large" />
          <Stack flex spacing="200">
            <Button circled type="primary" iconRight={<TripIcon />} asComponent={Link} href="/">
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
