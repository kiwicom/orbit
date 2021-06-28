import * as React from "react";
import { ButtonLink, InputField, Stack, Tag, Text } from "@kiwicom/orbit-components";
import { Plus } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    const [tags, setTags] = React.useState({
      london: { present: true, selected: false },
      manchester: { present: true, selected: false },
      liverpool: { present: true, selected: false },
    });

    const getFirstLetterUppercase = string =>
      `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;

    const addTag = name => {
      const newTags = { ...tags };
      return (
        <Tag
          selected={tags[name].selected}
          onClick={() => {
            newTags[name] = { present: true, selected: !tags[name].selected };
            setTags(newTags);
          }}
          onRemove={() => {
            newTags[name] = { present: false, selected: false };
            setTags(newTags);
          }}
        >
          {getFirstLetterUppercase(name)}
        </Tag>
      );
    };

    const getAddInfo = name => (
      <Stack align="center" justify="between">
        <Text>{getFirstLetterUppercase(name)}</Text>
        <ButtonLink
          onClick={() => {
            const newTags = { ...tags };
            newTags[name] = { present: true };
            setTags(newTags);
          }}
          iconLeft={<Plus ariaLabel="Add" />}
        />
      </Stack>
    );
    return (
      <>
        <InputField
          label="Destination"
          value=""
          tags={
            <>
              {tags.london.present && addTag("london")}
              {tags.manchester.present && addTag("manchester")}
              {tags.liverpool.present && addTag("liverpool")}
            </>
          }
        />
        <div style={{ maxWidth: "10em", paddingTop: "1em" }}>
          <Stack spacing="XXSmall">
            {!tags.london.present && getAddInfo("london")}
            {!tags.manchester.present && getAddInfo("manchester")}
            {!tags.liverpool.present && getAddInfo("liverpool")}
          </Stack>
        </div>
      </>
    );
  },
  info: {
    title: "",
    description: "",
  },
};
