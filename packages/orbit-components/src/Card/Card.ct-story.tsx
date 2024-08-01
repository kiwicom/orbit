import React from "react";

import ButtonLink from "../ButtonLink";
import Text from "../Text";

import Card, { CardSection } from ".";

export default function CardVisualStory() {
  return (
    <div className="space-y-200 bg-ink-light flex flex-col">
      <Card title="Somebody once" />
      <Card title="Somebody once" description="Told me the world is gonna roll me" />
      <Card
        title="Somebody once"
        description="Told me the world is gonna roll me"
        actions={
          <ButtonLink compact size="small">
            Sharpest tool
          </ButtonLink>
        }
      />
      <Card title="Somebody once" description="Told me the world is gonna roll me">
        <CardSection title="I ain't">
          <Text>The sharpest tool in the shed</Text>
        </CardSection>
      </Card>
      <Card title="Somebody once" description="Told me the world is gonna roll me">
        <CardSection title="I ain't" expandable>
          <Text>The sharpest tool in the shed</Text>
        </CardSection>
      </Card>
      <Card title="Somebody once" description="Told me the world is gonna roll me">
        <CardSection title="I ain't" expandable initialExpanded>
          <Text>The sharpest tool in the shed</Text>
        </CardSection>
      </Card>
      <Card title="Somebody once" description="Told me the world is gonna roll me">
        <CardSection title="I ain't">
          <Text>The sharpest tool in the shed</Text>
        </CardSection>
        <CardSection title="I ain't" expandable>
          The sharpest tool in the shed
        </CardSection>
        <CardSection title="I ain't" expandable initialExpanded>
          The sharpest tool in the shed
        </CardSection>
        <CardSection
          expandable
          title="I ain't"
          actions={
            <ButtonLink compact size="small">
              All star
            </ButtonLink>
          }
        >
          <Text>The sharpest tool in the shed</Text>
        </CardSection>
      </Card>
    </div>
  );
}
