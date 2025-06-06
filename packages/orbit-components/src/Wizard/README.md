# Wizard

During larger tasks such as purchasing tickets or setting up an account, it helps users to know how much progress they’ve made and what’s left to do. Nudge them to complete the task by using a wizard to clearly show all of the steps done and what’s coming next.

To implement a Wizard you need to import components `Wizard` and `WizardStep`, then use `Wizard` as a container for multiple `WizardStep`s:

```jsx
import Wizard, { WizardStep } from "@kiwicom/orbit-components/lib/Wizard";
```

Then use `Wizard` as the container for multiple `WizardStep`s:

```jsx
<Wizard id="wizard" completedSteps={3} activeStep={3} onChangeStep={() => {}}>
  <WizardStep title="Search" />
  <WizardStep title="Passenger details" />
  <WizardStep title="Ticket fare" />
  <WizardStep title="Customize your trip" />
  <WizardStep title="Overview & Payment" />
</Wizard>
```

## Wizard props

| Name             | Type                                                      | Default   | Description                                                                                                                          |
| :--------------- | :-------------------------------------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `id`             | `string`                                                  |           | Unique identifier for the wizard, required for accessibility.                                                                        |
| `activeStep`     | `number`                                                  |           | Zero-based index marking the current Wizard step. Should be lower than or equal to the value of `completedSteps`.                    |
| `children`       | `React.ChildrenArray<React.Element<WizardStepComponent>>` |           | `WizardStep` elements.                                                                                                               |
| `completedSteps` | `number`                                                  |           | Number of completed steps, ranging from 0 to total number of steps.                                                                  |
| `onChangeStep`   | `(stepIndex: number) => void \| Promise<any>`             |           | Function which handles when a Wizard step is clicked. It's called with the step index, so you can use it to change `activeStep`.     |
| `lockScrolling`  | `boolean`                                                 | `true`    | Whether to prevent scrolling of the rest of the page while Modal is open. This is on by default to provide a better user experience. |
| `direction`      | `row \| column`                                           | `row`     | Allows to use `column` direction on desktop                                                                                          |
| `dataTest`       | `string`                                                  |           | Optional prop for testing purposes.                                                                                                  |
| `labelClose`     | `string`                                                  | `"Close"` | Property for passing translation string to close Button title                                                                        |
| `labelProgress`  | `React.Node`                                              |           | Property for passing translation string to progress text                                                                             |

## WizardStep props

| Name          | Type                            | Default | Description                         |
| :------------ | :------------------------------ | :------ | :---------------------------------- |
| `title`       | `string`                        |         | Name of the step.                   |
| `onClick`     | `event => void \| Promise<any>` |         | Function which handles click event. |
| `isCompleted` | `boolean`                       |         | Marks current step as completed.    |
