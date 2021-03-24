import * as React from "react";
import { Heading, Stack, Text, Truncate } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack>
      <Heading as="h3" type="title3">
        Width in parent
      </Heading>
      <Text>You can use relative and absolute widths. The default is 100% of the parent.</Text>
      <Stack>
        <Truncate>
          When you&apos;re using progressive disclosure, you might have text that you&apos;ve
          decided is too long to display all at once. You don&apos;t want to overwhelm your users,
          so you want to keep it hidden but accessible. Use a Truncate component to make sure your
          text fits within its parent and doesn&apos;t take over your designs.
        </Truncate>
        <Truncate maxWidth="50%">
          When you&apos;re using progressive disclosure, you might have text that you&apos;ve
          decided is too long to display all at once. You don&apos;t want to overwhelm your users,
          so you want to keep it hidden but accessible. Use a Truncate component to make sure your
          text fits within its parent and doesn&apos;t take over your designs.
        </Truncate>
        <Truncate maxWidth="42px">
          When you&apos;re using progressive disclosure, you might have text that you&apos;ve
          decided is too long to display all at once. You don&apos;t want to overwhelm your users,
          so you want to keep it hidden but accessible. Use a Truncate component to make sure your
          text fits within its parent and doesn&apos;t take over your designs.
        </Truncate>
      </Stack>
      <Stack>
        <Heading as="h3" type="title3">
          Multiple Truncates in one parent
        </Heading>
        <Text>
          If you use relative widths within a row Stack, the next Truncate component automatically
          fits the space remaining unless specified otherwise.
        </Text>
        <Stack direction="row">
          <Truncate maxWidth="20%">
            When you&apos;re using progressive disclosure, you might have text that you&apos;ve
            decided is too long to display all at once. You don&apos;t want to overwhelm your users,
            so you want to keep it hidden but accessible. Use a Truncate component to make sure your
            text fits within its parent and doesn&apos;t take over your designs.
          </Truncate>
          <Truncate>
            When you&apos;re using progressive disclosure, you might have text that you&apos;ve
            decided is too long to display all at once. You don&apos;t want to overwhelm your users,
            so you want to keep it hidden but accessible. Use a Truncate component to make sure your
            text fits within its parent and doesn&apos;t take over your designs.
          </Truncate>
        </Stack>
        <Stack direction="row">
          <Truncate maxWidth="20%">
            When you&apos;re using progressive disclosure, you might have text that you&apos;ve
            decided is too long to display all at once. You don&apos;t want to overwhelm your users,
            so you want to keep it hidden but accessible. Use a Truncate component to make sure your
            text fits within its parent and doesn&apos;t take over your designs.
          </Truncate>
          <Truncate maxWidth="20%">
            When you&apos;re using progressive disclosure, you might have text that you&apos;ve
            decided is too long to display all at once. You don&apos;t want to overwhelm your users,
            so you want to keep it hidden but accessible. Use a Truncate component to make sure your
            text fits within its parent and doesn&apos;t take over your designs.
          </Truncate>
          <Truncate>
            When you&apos;re using progressive disclosure, you might have text that you&apos;ve
            decided is too long to display all at once. You don&apos;t want to overwhelm your users,
            so you want to keep it hidden but accessible. Use a Truncate component to make sure your
            text fits within its parent and doesn&apos;t take over your designs.
          </Truncate>
        </Stack>
        <Stack direction="row">
          <Truncate maxWidth="20%">
            When you&apos;re using progressive disclosure, you might have text that you&apos;ve
            decided is too long to display all at once. You don&apos;t want to overwhelm your users,
            so you want to keep it hidden but accessible. Use a Truncate component to make sure your
            text fits within its parent and doesn&apos;t take over your designs.
          </Truncate>
          <Truncate maxWidth="20%">
            When you&apos;re using progressive disclosure, you might have text that you&apos;ve
            decided is too long to display all at once. You don&apos;t want to overwhelm your users,
            so you want to keep it hidden but accessible. Use a Truncate component to make sure your
            text fits within its parent and doesn&apos;t take over your designs.
          </Truncate>
          <Truncate maxWidth="20%">
            When you&apos;re using progressive disclosure, you might have text that you&apos;ve
            decided is too long to display all at once. You don&apos;t want to overwhelm your users,
            so you want to keep it hidden but accessible. Use a Truncate component to make sure your
            text fits within its parent and doesn&apos;t take over your designs.
          </Truncate>
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Width",
    description: "You can control the maximum width the truncate component will take up.",
  },
};
