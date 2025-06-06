import React from "react";
import cx from "clsx";
import { CheckCircle, CloseCircle } from "@kiwicom/orbit-components/icons";
import { Stack, Text, Grid } from "@kiwicom/orbit-components";
import useTheme from "@kiwicom/orbit-components/lib/hooks/useTheme";

import { slugify } from "../../utils/common";

const isImage = (element: React.ReactNode): boolean => {
  return (
    React.isValidElement(element) &&
    (element.type === "img" ||
      (typeof element.type === "string" && element.type.toLowerCase() === "img"))
  );
};

const extractContent = data => {
  return React.Children.toArray(data).reduce(
    (acc: Content, cur) => {
      if (isImage(cur)) acc.images.push(cur);
      else acc.content = cur;

      return acc;
    },
    { images: [], content: null },
  );
};

export interface Content {
  images: React.ReactNode[];
  content: React.ReactNode;
}
interface Props {
  title: string;
  svgs: React.ComponentType<unknown>[];
  children: React.ReactNode;
  type: "do" | "dont";
}

const ImageContainer = ({
  children,
  type,
  middleAlign,
}: {
  children: React.ReactNode;
  type: "do" | "dont";
  middleAlign?: boolean;
}) => {
  return (
    <div
      className={cx(
        "bg-white-normal rounded-100 p-500 de:p-400 flex h-full content-center border-0 border-t-[3px] border-solid",
        type === "do" ? "border-green-normal" : "border-red-normal",
        middleAlign && "align-middle",
      )}
    >
      {children}
    </div>
  );
};

const Image = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cx("flex size-full justify-center", "[&_svg]:max-w-full", "[&_p]:w-full")}>
      {children}
    </div>
  );
};

export const DoDontHeader = ({ type }: { type: "do" | "dont" }) => (
  <Stack
    flex
    spacing="200"
    justify="between"
    direction="row-reverse"
    tablet={{ direction: "row", justify: "start" }}
  >
    {type === "do" ? (
      <CheckCircle color="success" size="large" />
    ) : (
      <CloseCircle color="critical" size="large" />
    )}
    <Text weight="bold" type={type === "do" ? "success" : "critical"}>
      {type === "do" ? "Do" : "Don't"}
    </Text>
  </Stack>
);

export default function Guideline({ type = "do", title, svgs = [], children }: Props) {
  const { images, content } = extractContent(children);
  const typeOpposite = type === "do" ? "dont" : "do";
  const theme = useTheme();

  const vectors =
    svgs.length > 0 ? svgs.map((Component: React.ComponentType<unknown>) => <Component />) : [];
  const allImages = [...vectors, ...images];
  const coloredBorder = !(images.length > 1);

  return (
    <div
      id={slugify(title)}
      className={cx(
        "bg-cloud-light rounded-100 p-400",
        "de:border-t-0 de:border-l-[3px] border-0 border-t-[3px] border-solid",
        coloredBorder && type === "do" && "border-green-normal",
        coloredBorder && type === "dont" && "border-red-normal",
        !coloredBorder && "border-ink-dark",
        "[p+&]:mt-600",
        "[&+.orbit-docs-heading-anchor]:mt-800",
        "[&_li]:list-inside [&_li]:list-disc [&_li]:list-image-none",
      )}
    >
      <Grid
        columns="1fr"
        desktop={{ columns: `repeat(${allImages.length + 1}, 1fr)` }}
        gap={theme.orbit.space800}
      >
        <Stack flex shrink direction="column">
          <Stack
            justify="between"
            direction="row-reverse"
            spacing="200"
            tablet={{ direction: "row", justify: "start" }}
          >
            {allImages.length < 2 &&
              (type === "do" ? (
                <CheckCircle color="success" ariaLabel="Do" size="large" />
              ) : (
                <CloseCircle color="critical" ariaLabel="Don't" size="large" />
              ))}
            <Stack>
              <Text weight="bold">{title}</Text>
              {content}
            </Stack>
          </Stack>
        </Stack>
        {allImages.length === 1 && (
          <ImageContainer type={type} middleAlign>
            <Image>{allImages[0]}</Image>
          </ImageContainer>
        )}
        {allImages.length > 1 && (
          <>
            <Stack shrink align="stretch" direction="column" spacing="200">
              <DoDontHeader type={type} />
              <ImageContainer type={type}>
                <Image>{allImages[0]}</Image>
              </ImageContainer>
            </Stack>
            <Stack shrink align="stretch" direction="column" spacing="200">
              <DoDontHeader type={typeOpposite} />
              <ImageContainer type={typeOpposite}>
                <Image>{allImages[1]}</Image>
              </ImageContainer>
            </Stack>
          </>
        )}
      </Grid>
    </div>
  );
}
