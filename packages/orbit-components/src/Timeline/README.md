# Timeline

To implement Timeline component into your project you'll need to add the import:

```jsx
import Timeline, { TimelineStep } from "@kiwicom/orbit-components/lib/Timeline";
```

After adding import into your project you can use it simply like:

```jsx
<Timeline>
  <TimelineStep step="In Progress" time="20.05.2020" status="success">
    We’ll wait for the carrier(s) to send us the refund and contact them again if necessary.
  </TimelineStep>
</Timeline>
```

## Props

Table below contains all types of the props available in the **Timeline** component.

| Name         | Type         | Default | Description                                                                                                                                                    |
| :----------- | :----------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children** | `React.Node` |         | List of [`TimelineStep`](#TimelineStep) components                                                                                                             |
| dataTest     | `string`     |         | Optional prop for testing purposes.                                                                                                                            |
| spaceAfter   | `enum`       |         | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |

## Subcomponents

### TimelineStep

```jsx
import TimelineStep from "@kiwicom/orbit-components/lib/Timeline/components/TimelineStep";
```

#### Props

Table below contains all types of the props in **TimelineStep** component.

| Name         | Type            | Default | Description                                                               |
| :----------- | :-------------- | :------ | :------------------------------------------------------------------------ |
| **children** | `React.Node`    |         | The content of the component                                              |
| step         | `string`        |         | Text for [`Badge`](https://orbit.kiwi/components/badge/) component inside |
| status       | [`enum`](#enum) |         | Status of current process step                                            |
| time         | `string`        |         | Time of current process step                                              |

### enum

| status     |
| :--------- |
| "success"  |
| "warning"  |
| "critical" |
