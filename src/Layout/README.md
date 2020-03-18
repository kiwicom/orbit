# Layout

To implement the Layout component into your project you'll need to add the import:

```jsx
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";
```

After adding import into your project you can use it simply like:

```jsx
<Layout type="MMB">
  <LayoutColumn>This is the main section.</LayoutColumn>
</Layout>
```

## Props

Table below contains all types of the props available in the Layout component.

| Name         | Type               | Default | Description                                                                     |
| :----------- | :----------------- | :------ | :------------------------------------------------------------------------------ |
| **children** | `React.Node`       |         | The children of the Layout, use [`LayoutColumn`](#layoutcolumn) as top-wrapper. |
| dataTest     | `string`           |         | Optional prop for testing purposes.                                             |
| **type**     | [`enum`](#layouts) |         | The type of the Layout.                                                         |

### LayoutColumn

LayoutColumn component gives us a possibility how to control all accessibility and behaviour properties globally, so you don't have to worry about it.
**If you want to use `Layout` component in your project, use `LayoutComponent` also.**

Table below contains all types of the props available in the LayoutColumn component.

| Name         | Type         | Default | Description                                                                                   |
| :----------- | :----------- | :------ | :-------------------------------------------------------------------------------------------- |
| as           | `string`     | `"div"` | The HTML element in which item will be rendered                                               |
| **children** | `React.Node` |         | The children of the LayoutColumn.                                                             |
| dataTest     | `string`     |         | Optional prop for testing purposes.                                                           |
| hideOn       | `Devices[]`  |         | Array of devices - viewports to hide the children on. For more info check **Hide** component. |

## Layouts

For now, we are providing three global layouts that are necessary for our projects.
There is possibility to use `Search`, `Booking` or `MMB` layout.

### Search

The Search layout consist of three columns. The first and third column hidden on smaller devices, so we can show the main section properly.

To implement the Search layout into your project, you need to use this JSX markup:

```jsx
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";

const App = () => (
  <Layout type="Search">
    <LayoutColumn>The left SideBar for filters</LayoutColumn>
    <LayoutColumn>The main section for displaying the results</LayoutColumn>
    <LayoutColumn>The right SideBar for promotion</LayoutColumn>
  </Layout>
);
```

#### Columns behaviour:

- The left SideBar is going to be hidden on `mobile`, `mediumMobile` and `largeMobile` viewport.
- The right SideBar is going to be hidden on `mobile`, `mediumMobile`, `largeMobile`, `tablet` and `desktop` viewport.

### Booking

The Booking layout consist of two columns.

To implement the Booking layout into your project, you need to use this JSX markup:

```jsx
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";

const App = () => (
  <Layout type="Booking">
    <LayoutColumn>The main section for Booking form</LayoutColumn>
    <LayoutColumn>The left SideBar for displaying the summary</LayoutColumn>
  </Layout>
);
```

### MMB

The ManageMyBooking layout consist only of one column.

To implement the MMB layout into your project, you need to use this JSX markup:

```jsx
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";

const App = () => (
  <Layout type="MMB">
    <LayoutColumn>The main section for ManageMyBooking</LayoutColumn>
  </Layout>
);
```
