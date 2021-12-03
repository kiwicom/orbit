import React from "react";
import { sortBy } from "lodash";
import { Text, Grid, TextLink, Heading, ButtonLink } from "@kiwicom/orbit-components";
import { GenderMan as ManIcon } from "@kiwicom/orbit-components/icons";
import Slide from "@kiwicom/orbit-components/lib/utils/Slide";
import styled from "styled-components";

const StyledAvatar = styled.img`
  border-radius: 50%;
  height: 24px;
  width: 24px;
`;

const StyledWrapper = styled.div`
  margin: 2rem 0;
`;

const Member = ({ user, email, avatar, web, status }) => {
  return (
    <Grid columns="40px 200px repeat(2, 1fr)" gap="5px">
      {avatar ? <StyledAvatar src={avatar} /> : <ManIcon color="secondary" />}
      <TextLink size="small" type="secondary" href={web}>
        {user}
      </TextLink>
      <Text>{email}</Text>
      {status && <Text>{status.message}</Text>}
    </Grid>
  );
};

const Members = ({ members }) => {
  const [height, setHeight] = React.useState(0);
  const [isExpanded, setExpanded] = React.useState(false);

  const measureRef = React.useCallback(n => {
    if (n) {
      setHeight(n.getBoundingClientRect().height);
    }
  }, []);

  const sorted = sortBy(members.maintainers, ["name"]);

  if (sorted.length < 10) {
    return (
      <StyledWrapper>
        {sorted.map(({ name: user, id, publicEmail, avatarUrl, webUrl, status }) => (
          <Member
            key={id}
            user={user}
            email={publicEmail}
            avatar={avatarUrl}
            web={webUrl}
            status={status}
          />
        ))}
      </StyledWrapper>
    );
  }

  return (
    members &&
    members.maintainers && (
      <StyledWrapper>
        <Heading type="title3" spaceAfter="normal">
          Maintainers
        </Heading>
        {sorted.slice(0, 4).map(({ name: user, id, publicEmail, avatarUrl, webUrl, status }) => (
          <Member
            key={id}
            user={user}
            email={publicEmail}
            avatar={avatarUrl}
            web={webUrl}
            status={status}
          />
        ))}
        {isExpanded ? (
          <ButtonLink onClick={() => setExpanded(prev => !prev)}>
            Click to collapse all maintainers
          </ButtonLink>
        ) : (
          <ButtonLink onClick={() => setExpanded(prev => !prev)}>
            Click to expand all maintainers
          </ButtonLink>
        )}
        <Slide maxHeight={height} expanded={isExpanded}>
          <div ref={measureRef}>
            {sorted
              .slice(4, members.maintainers.length)
              .map(({ name: user, id, publicEmail, avatarUrl, webUrl, status }) => {
                return (
                  <Member
                    key={id}
                    user={user}
                    email={publicEmail}
                    avatar={avatarUrl}
                    web={webUrl}
                    status={status}
                  />
                );
              })}
          </div>
        </Slide>
      </StyledWrapper>
    )
  );
};

export default Members;
