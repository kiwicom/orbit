# Timeline

To implement the `Timeline` component into your project you'll need to add the import:

```jsx
import Timeline, { TimelineStep } from "@kiwicom/orbit-components/lib/Timeline";
```

After adding import to your project you can use it simply like:

```jsx
<Timeline>
  <TimelineStep label="In Progress" type="success">
    We'll wait for the carrier(s) to send us the refund and contact them again if necessary.
  </TimelineStep>
</Timeline>
```

## Props

The table below contains all types of props available in the **Timeline** component.

| Name         | Type                | Default | Description                                                                               |
| :----------- | :------------------ | :------ | :---------------------------------------------------------------------------------------- |
| **children** | `React.Node`        |         | List of [`TimelineStep`](#TimelineStep) components.                                       |
| dataTest     | `string`            |         | Optional prop for testing purposes.                                                       |
| id           | `string`            |         | Set `id` for `Timeline`.                                                                  |
| spaceAfter   | [`enum`](#enum)     |         | Additional `margin-bottom` after component.                                               |
| direction    | `"column" \| "row"` |         | Allows to set direction, by default on desktop is `row` and on mobile is set to `column`. |

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

## Subcomponents

### TimelineStep

```jsx
import TimelineStep from "@kiwicom/orbit-components/lib/Timeline/TimelineStep";
```

#### Props

The table below contains all types of the props in **TimelineStep** component.

| Name         | Type            | Default | Description                                 |
| :----------- | :-------------- | :------ | :------------------------------------------ |
| **children** | `React.Node`    |         | Optional. The content of the `TimelineStep` |
| label        | `React.Node`    |         | Text for `label` component inside.          |
| subLabel     | `React.Node`    |         | Text for `subLabel` component inside.       |
| type         | [`enum`](#enum) |         | Type of current process step.               |
| active       | `boolean`       |         | Controlled state of the step.               |
| spaceAfter   | [`enum`](#enum) |         | Additional `margin-bottom` after component. |

#### enum

| type       |
| :--------- |
| "success"  |
| "warning"  |
| "critical" |
| "info"     |
