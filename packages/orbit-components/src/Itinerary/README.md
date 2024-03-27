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

After adding import to your project you can use it simply like:

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

| Name       | Type              | Required           | Default | Description                                 |
| ---------- | ----------------- | ------------------ | ------- | ------------------------------------------- |
| children   | `React.ReactNode` | :heavy_check_mark: |         | The content of Itinerary component          |
| dataTest   | `string`          |                    |         | Optional prop for testing purposes.         |
| spaceAfter | `enum`            |                    |         | Additional `margin-bottom` after component. |

### enum

| spaceAfter   |
| :----------- |
| `"none"`     |
| `"smallest"` |
| `"small"`    |
| `"normal"`   |
| `"medium"`   |
| `"large"`    |
| `"largest"`  |

## ItinerarySegment

The ItinerarySegment component serves as a wrapper of atomic unit `ItinerarySegmentStop` and `ItinerarySegmentDetail, have a status prop for showing important information about the connection between two segments of a journey.

## Props

| Name        | Type              | Required           | Default | Description                                            |
| ----------- | ----------------- | ------------------ | ------- | ------------------------------------------------------ |
| label       | `React.ReactNode` |                    |         | Status message of ItinerarySegment                     |
| children    | `React.ReactNode` | :heavy_check_mark: |         | The content of ItinerarySegment                        |
| dataTest    | `string`          |                    |         | Optional prop for testing purposes.                    |
| id          | `string`          |                    |         | Set `id` for `Itinerary`                               |
| noElevation | `boolean`         |                    |         | Turn off elevation (box-shadow) for a segment.         |
| spaceAfter  | `enum`            |                    |         | Additional `margin-bottom` after component.            |
| actionable  | `boolean`         |                    | `true`  | Applies actionable styles for ItinerarySegment wrapper |
| banner      | `React.Node`      |                    |         | Additional information for `ItinerarySegment`          |

### enum

| spaceAfter   |
| :----------- |
| `"none"`     |
| `"smallest"` |
| `"small"`    |
| `"normal"`   |
| `"medium"`   |
| `"large"`    |
| `"largest"`  |

## ItinerarySegmentStop

ItinerarySegmentStop is an atomic unit of the Itinerary component, shows two locations, date and time, have the warning property which changes the icon to `<AlertCircle color="warning" />` to attract user attention to some important information about a journey.

## Props

| Name             | Type              | Required           | Default       | Description                                              |
| ---------------- | ----------------- | ------------------ | ------------- | -------------------------------------------------------- |
| date             | `React.Node`      |                    |               | The date of `ItinerarySegmentStop`                       |
| time             | `React.Node`      |                    |               | The time of `ItinerarySegmentStop`                       |
| cancelledTime    | `React.Node`      |                    |               | The cancelled time of `ItinerarySegmentStop`             |
| cancelledDate    | `React.Node`      |                    |               | The cancelled date of `ItinerarySegmentStop`             |
| cancelledStation | `React.Node`      |                    |               | The cancelled station of `ItinerarySegmentStop`          |
| cancelledCity    | `React.Node`      |                    |               | The cancelled city of `ItinerarySegmentStop`             |
| city             | `React.Node`      | :heavy_check_mark: |               | The city of `ItinerarySegmentStop`                       |
| station          | `React.Node`      | :heavy_check_mark: |               | The station of `ItinerarySegmentStop`                    |
| hidden           | `boolean`         |                    |               | `ItinerarySegmentStop` which status is hidden            |
| hiddenCityText   | `React.Node`      |                    | `Hidden city` | Text which appears above city                            |
| icon             | `React.Node`      |                    |               | `ItinerarySegmentStop` custom icon                       |
| canceled         | `boolean`         |                    |               | Shows segment stop as canceled with striked through Text |
| type             | [`Status`](#enum) |                    |               | The color of `ItinerarySegmentStop` icon                 |
| minWidth         | `number`          |                    | `70`          | sets min-width for first column with date and time       |

## ItineraryStatus

ItineraryStatus is a wrapper for `ItinerarySegment` or a group of segments. Shows the [status](#enum) of the `Itinerary` or `ItinerarySegment`

### Props

| Name       | Type              | Required           | Default | Description                                   |
| ---------- | ----------------- | ------------------ | ------- | --------------------------------------------- |
| type       | [`Status`](#enum) |                    |         | The type of `ItineraryStatus` component       |
| label      | `React.Node`      |                    |         | The label of the `ItineraryStatus`            |
| offset     | `number`          |                    | `0`     | The offset for the label                      |
| actionable | `boolean`         |                    | true    | Applies actionable styles for ItineraryStatus |
| children   | `React.ReactNode` | :heavy_check_mark: |         | The content of `ItineraryStatus` component    |

## ItinerarySegmentDetail

ItinerarySegmentDetail serves as a connection between two ItinerarySegmentStop components (segments)

### Props

| Name     | Type              | Required           | Default        | Description                                                               |
| -------- | ----------------- | ------------------ | -------------- | ------------------------------------------------------------------------- |
| summary  | `React.ReactNode` | :heavy_check_mark: |                | The content of ItinerarySegmentDetail component, when it's not expanded   |
| duration | `string`          | :heavy_check_mark: |                | The duration between two ItinerarySegmentStop components                  |
| content  | `ContentItem[]`   |                    |                | The content of ItinerarySegmentDetail component, shown when it's expanded |
| icon     | `React.ReactNode` |                    | `<Airplane />` | The icon of ItinerarySegmentDetail component                              |

### ContentItem

The table below contains the types of props of objects of type `ContentItem`.

| Name  | Type              | Description                   |
| :---- | :---------------- | :---------------------------- |
| title | `React.Node`      | The title of the content item |
| items | `ContentDetail[]` | The items of the content item |

### ContentDetail

The table below contains the types of props of objects of type `ContentDetail`.

| Name  | Type         | Description |
| :---- | :----------- | :---------- |
| icon  | `React.Node` |             |
| name  | `React.Node` |             |
| value | `React.Node` |             |

## ItinerarySegmentBanner

| Name     | Type              | Required           | Default | Description                                                |
| -------- | ----------------- | ------------------ | ------- | ---------------------------------------------------------- |
| children | `React.ReactNode` | :heavy_check_mark: |         | The content of ItinerarySegmentBanner component,           |
| onClick  | `React.ReactNode` |                    |         | for handling `onClick` callback in`ItinerarySegmentBanner` |

## ItinerarySeparator

### Props

| Name     | Type              | Required           | Default | Description                                   |
| :------- | :---------------- | :----------------- | :------ | :-------------------------------------------- |
| children | `React.ReactNode` | :heavy_check_mark: |         | The content of `ItinerarySeparator` component |
| type     | [`Status`](#enum) |                    |         | The type of `ItinerarySeparator` component    |
| color    | `"string"`        |                    |         | The color of `ItinerarySeparator` component   |

### enum

| Status       | Type       |
| ------------ | ---------- |
| `"warning"`  | `"dashed"` |
| `"critical"` | `"dotted"` |
| `"info"`     | `"solid"`  |
| `"success"`  | `"none"`   |
| `"neutral"`  | `"double"` |
