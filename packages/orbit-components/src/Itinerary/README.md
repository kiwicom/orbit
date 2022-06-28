# Itinerary

To implement the Itinerary component into your project you'll need to add the import:

```jsx
import Itinerary, {
  ItinerarySegment,
  ItineraryStatus,
  ItineraryBadgeList,
  ItinerarySegmentStop,
  ItinerarySegmentDetail,
} from "@kiwicom/orbit-components/lib/Itinerary";
```

After adding import into your project you can use it simply like:

```jsx
<Itinerary>
  <ItinerarySegment spaceAfter="large">
    <ItinerarySegmentStop
      city="Moscow"
      station="Sheremetyevo International Airport (SVO)"
      date="Fri, 19.10"
      time="14:05"
    />
    <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />}>
      <CollapsedContent />
    </ItinerarySegmentDetail>
    <ItinerarySegmentStop
      city="Prague"
      station="Václav Havel Airport Prague (PRG)"
      date="Fri, 19.10"
      time="16:35"
    />
  </ItinerarySegment>
</Itinerary>
```

## Props

| Name       | Type              | Required           | Default | Description                                                                                                                                                    |
| ---------- | ----------------- | ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children   | `React.ReactNode` | :heavy_check_mark: |         | The content of Itinerary component                                                                                                                             |
| dataTest   | `string`          |                    |         | Optional prop for testing purposes.                                                                                                                            |
| spaceAfter | `enum`            |                    |         | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |

## ItinerarySegment

ItinerarySegment component serves as a wrapper of atomic units `ItinerarySegmentStop` and `ItinerarySegmentDetail, has status prop for showing important information about the connection between two segments of journey.

## Props

| Name        | Type              | Required           | Default | Description                                                                                                                                                    |
| ----------- | ----------------- | ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label       | `React.ReactNode` |                    |         | Status message of ItinerarySegment                                                                                                                             |
| children    | `React.ReactNode` | :heavy_check_mark: |         | The content of ItinerarySegment                                                                                                                                |
| dataTest    | `string`          |                    |         | Optional prop for testing purposes.                                                                                                                            |
| id          | `string`          |                    |         | Set `id` for `Itinerary`                                                                                                                                       |
| noElevation | `boolean`         |                    |         | Turn off elevation (box-shadow) for a segment.                                                                                                                 |
| spaceAfter  | `enum`            |                    |         | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |
| actionable  | `boolean`         |                    | `true`  | Applies actionable styles for ItinerarySegment wrapper                                                                                                         |
| banner      | `React.Node`      |                    |         | Additional information for `ItinerarySegment`                                                                                                                  |

## ItinerarySegmentStop

ItinerarySegmentStop is an atomic unit of the Itinerary component, shows two locations, date and time, has warning property which changes the icon to `<AlertCircle color="warning" />` to attract user attention about some important information about journey.

## Props

| Name           | Type                | Required           | Default       | Description                                              |
| -------------- | ------------------- | ------------------ | ------------- | -------------------------------------------------------- |
| date           | `string`            | :heavy_check_mark: |               | The date of ItinerarySegmentStop                         |
| time           | `React.Node`        | :heavy_check_mark: |               | The time of ItinerarySegmentStop                         |
| city           | `React.Node`        | :heavy_check_mark: |               | The city of ItinerarySegmentStop                         |
| station        | `React.Node`        | :heavy_check_mark: |               | The station of ItinerarySegmentStop                      |
| hidden         | `boolean`           |                    |               | ItinerarySegmentStop which status is hidden              |
| hiddenCityText | `React.Node`        |                    | `Hidden city` | Text which appears above city                            |
| icon           | `React.Node`        |                    |               | ItinerarySegmentStop custom icon                         |
| canceled       | `boolean`           |                    |               | Shows segment stop as canceled with striked through Text |
| type           | [`Status`](#status) |                    |               | The color of `ItinerarySegmentStop` icon                 |
| minWidth       | `number`            |                    | `70`          | sets min-width for first column with date and time       |

## ItineraryStatus

ItineraryStatus is a wrapper for `ItinerarySegment` or group of segments. Shows the [status](#status) of the `Itinerary` or `ItinerarySegment`

### Props

| Name     | Type                | Required           | Default | Description                                |
| -------- | ------------------- | ------------------ | ------- | ------------------------------------------ |
| type     | [`Status`](#status) |                    |         | The type of `ItineraryStatus` component    |
| label    | `React.Node`        |                    |         | The label of the `ItineraryStatus`         |
| offset   | `number`            |                    | `0`     | The offset for the label                   |
| children | `React.ReactNode`   | :heavy_check_mark: |         | The content of `ItineraryStatus` component |

## ItinerarySegmentDetail

ItinerarySegmentDetail serves as connection between two ItinerarySegmentStop components (segments)

### Props

| Name     | Type              | Required           | Default        | Description                                                        |
| -------- | ----------------- | ------------------ | -------------- | ------------------------------------------------------------------ |
| summary  | `React.ReactNode` | :heavy_check_mark: |                | The content of ItineraryDetail component, when it's not expanded   |
| duration | `string`          | :heavy_check_mark: |                | The duration between two ItinerarySegmentStop components           |
| children | `React.ReactNode` | :heavy_check_mark: |                | The content of ItineraryDetail component, shown when it's expanded |
| icon     | `React.ReactNode` |                    | `<Airplane />` | The icon of ItineraryDetail component                              |

### Status

| Status       |
| ------------ |
| `"warning"`  |
| `"critical"` |
| `"info"`     |
| `"success"`  |
