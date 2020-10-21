# How to use component types (Typescript | Flow)

In `Orbit`, every component exports their `Props` object, so it can be then imported into your project and use it to access its fields.

A common use case would be, for example, to be able type the different `enums` that `Orbit` has like Popover `alignment` or text `weight`.

In the following snippet (using `Typescript`), the type checker will complain because `type` is not the `enum` type but a general `string` type.

```jsx
import Text from "@kiwicom/orbit-components/lib/Text";

interface Props {
  type: string;
}

const WrappedText = ({ children, type }) => <Text type={type}>{children}</Text>;

export default WrappedText;
```

To solve this, we need to have a way to access the different `Props` fields to correctly type the fields that are passed onto the `Orbit` components. Fortunately there is a way to do so with the different typechecking systems.

## Typescript

In `Typescript` we can access the fields using [Index Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types), for example, creating a type which contains `field_name` from a given `TypeName` would be done like `TypeName["field_name"]`, so our issue could be solved by just doing:

```jsx
import Text, { Props as TextProps } from "@kiwicom/orbit-components/lib/Text";

interface Props {
  type: TextProps["type"];
}

const WrappedText = ({ children, type }) => <Text type={type}>{children}</Text>;

export default WrappedText;
```

## Flow

In `Flow`, we can access the fields using [\$PropertyType](https://flow.org/en/docs/types/utilities/#toc-propertytype), so our example would be fixed as follows:

```jsx
import Text from "@kiwicom/orbit-components/lib/Text";
import type { Props as TextProps } from "@kiwicom/orbit-components/lib/Text";

type Props = {|
  type: $PropertyType<TextProps, "type">,
|};

const WrappedText = ({ children, type }) => <Text type={type}>{children}</Text>;

export default WrappedText;
```
