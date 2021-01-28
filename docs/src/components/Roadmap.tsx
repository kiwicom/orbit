import React from "react";
import { Inline, Separator, Stack, Text, TextLink } from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/icons";

import RoadmapData from "../data/roadmap.yaml";
import Tile from "./Tile";

interface RoadmapItemProps {
  description: string;
  estimate?: string;
  jiraNumber?: number;
  // eslint-disable-next-line react/no-unused-prop-types
  quarter?: string;
  title: string;
}

const RoadmapItem = ({ description, estimate, jiraNumber, title }: RoadmapItemProps) => {
  return (
    <Tile title={title}>
      <p>{description}</p>
      {(estimate || jiraNumber) && <Separator />}

      <Stack spacing="XXXSmall">
        <Inline>
          {estimate && (
            <>
              <Text size="small" weight="bold">
                Estimated completion
              </Text>
              <Text size="small">: {estimate}</Text>
            </>
          )}
        </Inline>
        {jiraNumber && (
          <Inline>
            <Text size="small" weight="bold">
              Connected Jira epic
            </Text>
            <Text size="small">
              :{" "}
              <TextLink
                external
                href={`https://jira.kiwi.com/browse/ORBIT-${jiraNumber}`}
                iconRight={<NewWindow ariaLabel="Opens in new window" />}
                title="For Kiwi.com employees"
              >
                ORBIT-{jiraNumber}
              </TextLink>
            </Text>{" "}
          </Inline>
        )}
      </Stack>
    </Tile>
  );
};

interface RoadmapProps {
  roadmapQuarter: string;
}

const Roadmap = ({ roadmapQuarter }: RoadmapProps) => {
  const quarterItems = RoadmapData.find(item => item.quarter === roadmapQuarter).items;
  return quarterItems.map(item => (
    <RoadmapItem
      title={item.title}
      jiraNumber={item.jiraNumber}
      estimate={item.estimate}
      description={item.description}
    />
  ));
};

export default Roadmap;
