import React from "react";
import { Stack, Text, TextLink } from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/icons";

import MasonryLayout from "./MasonryLayout";
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
      {(estimate || jiraNumber) && (
        <Stack direction="row">
          {estimate && (
            <Stack spacing="XXXSmall">
              <Text size="small" type="secondary">
                Estimated completion
              </Text>
              <Text>{estimate}</Text>
            </Stack>
          )}
          {jiraNumber && (
            <Stack spacing="XXXSmall">
              <Text size="small" type="secondary">
                Connected Jira epic
              </Text>
              <TextLink
                external
                href={`https://jira.kiwi.com/browse/ORBIT-${jiraNumber}`}
                iconRight={<NewWindow ariaLabel="Opens in new window" />}
                title="For Kiwi.com employees"
              >
                ORBIT-{jiraNumber}
              </TextLink>
            </Stack>
          )}
        </Stack>
      )}
    </Tile>
  );
};

interface RoadmapProps {
  roadmapQuarter: string;
}

const Roadmap = ({ roadmapQuarter }: RoadmapProps) => {
  const quarterItems = RoadmapData.find(item => item.quarter === roadmapQuarter).items;

  return (
    <MasonryLayout>
      {quarterItems.map(item => (
        <RoadmapItem
          key={item.title}
          title={item.title}
          jiraNumber={item.jiraNumber}
          estimate={item.estimate}
          description={item.description}
        />
      ))}
    </MasonryLayout>
  );
};

export default Roadmap;
