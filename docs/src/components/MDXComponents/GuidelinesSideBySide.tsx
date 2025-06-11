import React from "react";
import cx from "clsx";
import { CheckCircle, CloseCircle, Check, Close } from "@kiwicom/orbit-components/icons";
import { Stack, Grid, Text } from "@kiwicom/orbit-components";

interface GuidelineItemProps {
  children: React.ReactNode;
  type: "do" | "dont";
}

const GuidelineIcons = ({ type }) =>
  type === "do" ? (
    <CheckCircle color="success" ariaLabel="Do" size="large" />
  ) : (
    <CloseCircle color="critical" ariaLabel="Don't" size="large" />
  );

const GuidelineItemIcons = ({ type }) =>
  type === "do" ? (
    <Check color="success" ariaLabel="Do" size="large" />
  ) : (
    <Close color="critical" ariaLabel="Don't" size="large" />
  );

const GuidelineItem = ({ children, type }: GuidelineItemProps) => (
  <Stack flex spacing="200" spaceAfter="small">
    <GuidelineItemIcons type={type} />
    <div>{children}</div>
  </Stack>
);

const GuidelineContainer = ({ children, type }) => {
  console.log(children);
  return (
    <div
      className={cx(
        "py-400 px-600 bg-cloud-light rounded-100 w-full",
        "de:border-t-0 de:border-l-[3px] border-0 border-t-[3px] border-solid",
        type === "do" ? "border-green-normal" : "border-red-normal",
        "[&_p+p]:mt-300",
      )}
    >
      <Stack
        flex
        direction="row-reverse"
        tablet={{ direction: "row", justify: "start" }}
        spacing="200"
        justify="between"
        align="center"
      >
        <GuidelineIcons type={type} />
        {type === "do" ? (
          <Text type="success" weight="bold">
            Do
          </Text>
        ) : (
          <Text type="critical" weight="bold">
            Don’t
          </Text>
        )}
      </Stack>
      <div className="pt-600">
        {React.Children.map(children.props?.children, child => {
          if (!React.isValidElement(child)) return null;

          const childElement = child as React.ReactElement<{ children: React.ReactNode }>;

          return <GuidelineItem type={type}>{childElement.props.children}</GuidelineItem>;
        })}
      </div>
    </div>
  );
};

export const Do = ({ children }) => <GuidelineContainer type="do">{children}</GuidelineContainer>;

export const Dont = ({ children }) => (
  <GuidelineContainer type="dont">{children}</GuidelineContainer>
);

export default function GuidelinesSideBySide({ children }) {
  return (
    <Grid columns="1fr" gap="1rem" tablet={{ columns: "repeat(2, 1fr)" }}>
      {children}
    </Grid>
  );
}
