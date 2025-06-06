import React from "react";
import cx from "clsx";

import { Stack } from "@kiwicom/orbit-components";
import { Check, Close } from "@kiwicom/orbit-components/icons";

import { h2 as H2, h3 as H3 } from "./Heading";

interface Props {
  children: React.ReactNode;
}

export function Usage({ children }: Props) {
  return (
    <>
      <H2>Usage of the component</H2>
      <div
        className={cx(
          "gap-600 de:flex-row flex flex-col",
          "[.orbit-docs-heading-anchor+&]:!mt-200",
          "[&+.orbit-docs-heading-anchor]:!mt-800",
        )}
      >
        {children}
      </div>
    </>
  );
}

const Section = ({ children }: Props) => {
  return <div className="[&_ul]:ml-100 [&_li+li]:mt-100 [&_ul]:list-none">{children}</div>;
};

const HeadingWithIcon = ({ variant }: { variant?: "use" | "dontUse" }) => {
  return (
    <div
      className={cx(
        "size-icon-medium p-50 grid place-content-center rounded-full",
        variant === "use" && "bg-green-light",
        variant === "dontUse" && "bg-red-light",
        "[&_svg]:size-full",
      )}
    >
      {variant === "use" ? <Check color="success" /> : <Close color="critical" />}
    </div>
  );
};

function ListWithIcon({ children, icon }) {
  return React.Children.map(children, ul => ({
    ...ul,
    props: {
      ...ul.props,
      children: React.Children.map(ul.props.children, li => {
        if (!React.isValidElement(li)) return null;

        const liElement = li as React.ReactElement<{ children: React.ReactNode }>;

        return (
          <li>
            <Stack inline>
              <div className="!-mt-50">{icon}</div>
              <div>{liElement.props.children}</div>
            </Stack>
          </li>
        );
      }),
    },
  }));
}

export function UsageUse({ children }: Props) {
  return (
    <Section>
      <Stack inline spacing="200">
        <HeadingWithIcon variant="use" />
        <H3>Use</H3>
      </Stack>
      <ListWithIcon icon={<Check size="small" color="success" />}>{children}</ListWithIcon>
    </Section>
  );
}

export function UsageDontUse({ children }: Props) {
  return (
    <Section>
      <Stack inline spacing="200">
        <HeadingWithIcon variant="dontUse" />
        <H3>Don't use</H3>
      </Stack>
      <ListWithIcon icon={<Close size="small" color="critical" />}>{children}</ListWithIcon>
    </Section>
  );
}
