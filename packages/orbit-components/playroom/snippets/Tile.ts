const basic = `
<Tile
  title="Title"
  description="Some description."
  icon={<Icons.Airplane />}
  onClick={() => {}}
/>
`;

const expandable = `
<Tile
  expandable
  icon={<Icons.GenderMan />}
  header={
    <Stack align="center" direction="row" justify="between" shrink>
      <Stack direction="column" shrink spacing="none">
        <Stack align="center" direction="row" spacing="200">
          <Heading as="h4" type="title4">
            Mr. Someone
          </Heading>
          <CountryFlag code="cz" />
        </Stack>
      </Stack>
      <Stack align="center" basis="0%">
        <Badge type="infoSubtle">You</Badge>
      </Stack>
    </Stack>
  }
>
  Expanded content
</Tile>
`;

const tileGroup = `
<TileGroup>
  <Tile
    expandable
    title="Some Title"
    icon={<Icons.GenderMan />}
  >
    Expanded content
  </Tile>
  <Tile
    expandable
    title="Some Title"
    icon={<Icons.GenderMan />}
  >
    Expanded content
  </Tile>
  <Tile
    expandable
    title="Some Title"
    icon={<Icons.GenderMan />}
  >
    Expanded content
  </Tile>
  <Tile
    expandable
    title="Some Title"
    icon={<Icons.GenderMan />}
  >
    Expanded content
  </Tile>
</TileGroup>
`;

export default [
  {
    group: "Tile",
    name: "Basic Tile",
    code: basic,
  },
  {
    group: "Tile",
    name: "Expandable Tile",
    code: expandable,
  },
  {
    group: "TileGroup",
    code: tileGroup,
  },
];
