# default-theme

The aim of this rule is to prevent a wrong usage of the defaultTheme object from @kiwicom/orbit-components.

## Rule details

The following patterns are considered errors:

```jsx
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

const failedStatus = {
  isActive: true,
  activeColor: defaultTheme.orbit.paletteOrangeNormal,
  node: <CloseCircle color="warning" />,
  content: getContentPerStatus(activeStatus, true),
};
```

```jsx
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

const Wrapper = styled.div`
  color: ${defaultTheme.orbit.paletteProductNormal};
`;
```

```jsx
import theme from "@kiwicom/orbit-components/lib/defaultTheme";
```

```jsx
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

const {
  borderWidthCard,
  borderStyleCard,
  borderColorCard,
  borderRadiusNormal,
  spaceMedium,
} = defaultTheme.orbit;
```

Proper usage of defaultTheme is:

```jsx
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.orbit.paletteWhite};
`;

Wrapper.defaultProps = {
  theme: defaultTheme,
};
```

In order to access theme for other cases, you should use `useTheme()` hook or `ThemeConsumer`

## Rule options

```
"orbit-components/default-theme": <enabled>
```
