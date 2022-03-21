import React from "react";
import { Heading, TextLink, Stack, Text } from "@kiwicom/orbit-components";
import { upperFirst } from "lodash";
import { graphql, PageRendererProps, navigate } from "gatsby";

import { isLoggedIn } from "../../services/auth";
import DocLayout from "../../components/DocLayout";
import Members from "./components/Members";
import ComponentList from "./components/ComponentList";
import UsageByCategory from "./components/UsageByCategory";
import { Trail } from "../../components/DocNavigation";

// TODO: use types from tracking cli tool after move to monorepo
export interface TrackingProperty {
  name: string;
  used: number;
}
export interface TrackingProp {
  used: number;
  name: string;
  values: TrackingProperty[];
}

interface Maintainer {
  id?: string;
  name: string;
  avatarUrl: string;
  bot: boolean;
  state: "active" | "blocked" | "deactivated";
  webUrl: string;
  webPath: string;
  publicEmail: string;
  status: null | {
    message: string;
    availability: "NOT_SET" | "BUSY";
  };
}

export interface TrackedData {
  name: string;
  icon: boolean;
  instances: number;
  category: string;
  isDeprecated: boolean;
  props: TrackingProp[];
  sources: Array<{ url: string; props: string[] }>;
}
export interface TrackingNode {
  id: string;
  name: string;
  url: string;
  orbitVersion: string;
  lastCommit: {
    sha: string;
    title: string;
    webUrl: string;
  };
  members: {
    maintainers: Maintainer[];
  };
  trackedData: TrackedData[];
}

export interface Props extends PageRendererProps {
  pageContext: {
    name: string;
    repoName?: string;
    trail: Trail;
    diff?: string;
  };
  data: {
    allTracking: {
      nodes: TrackingNode[];
    };
  };
}

export default function Tracking({ pageContext, location, data }: Props) {
  const { name: pageName, trail } = pageContext;
  const { url, members, orbitVersion, trackedData, lastCommit } = data.allTracking.nodes[0];
  const [render, setRender] = React.useState(false);

  React.useEffect(() => {
    if (!isLoggedIn()) {
      navigate(`/dashboard/login/`);
    } else {
      setRender(true);
    }
  }, [setRender]);

  const components = trackedData
    .filter(({ icon }) => !icon)
    .map(({ name, isDeprecated, instances, category }) => ({
      name,
      category,
      slug: `/dashboard/tracking/${pageName.toLowerCase()}/${name.toLowerCase()}`,
      isDeprecated,
      instances,
    }));

  return (
    render && (
      <DocLayout
        location={location}
        title={upperFirst(pageName)}
        path={location.pathname}
        trail={trail}
      >
        <Stack flex direction="column">
          <TextLink href={url}>Gitlab repository</TextLink>
          <Heading type="title3">Orbit version: {orbitVersion}</Heading>
        </Stack>

        <Stack inline spacing="XSmall">
          <Text>Last commit:</Text>
          <TextLink href={lastCommit.webUrl}>{lastCommit.title}</TextLink>
        </Stack>

        <Members members={members} />
        <ComponentList components={components} />
        <UsageByCategory components={components} />
      </DocLayout>
    )
  );
}

export const query = graphql`
  query TrackingDataQuery($name: String!) {
    allTracking(sort: { fields: createdAt, order: DESC }, filter: { name: { eq: $name } }) {
      nodes {
        id
        name
        lastCommit {
          title
          webUrl
        }
        members {
          maintainers {
            avatarUrl
            name
            id
            bot
            state
            publicEmail
            status {
              availability
              message
            }
            webUrl
            webPath
          }
        }
        trackedData {
          icon
          sources {
            url
            props {
              name
              value
            }
          }
          instances
          category
          isDeprecated
          name
          props {
            used
            name
          }
        }
        orbitVersion
        url
      }
    }
  }
`;
