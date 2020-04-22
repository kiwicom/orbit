# ButtonPrimitive

To implement ButtonPrimitive component into your project you'll need to add the import:

```jsx
import ButtonPrimitive from "@kiwicom/orbit-components/lib/primitives/ButtonPrimitive";
```

After adding import into your project you can use it simply like:

```jsx
<ButtonPrimitive>Hello!</ButtonPrimitive>
```

## Props

Table below contains all types of the props available in ButtonPrimitive component.

| Name            | Type         | Default | Description                                                          |
| :-------------- | :----------- | :------ | :------------------------------------------------------------------- |
| asComponent      | `string`     |         | Background of a BadgePrimitive. Can use gradients and images         |
| ariaControls     | `string`     |         | Color of the border that is always solid and one pixel.              |
| ariaExpanded | `string`     |         | Foreground color, controling color of a text and icon.               |
| background        | `React.Node` |         | The content of the BadgePrimitive.                                   |
| backgroundHover        | `string`     |         | Optional prop for testing purposes.                                  |
| backgroundActive            | `React.Node` |         | The displayed icon on the left.                                      |
| backgroundFocus       | `string`     |         | Adds prop adds `aria-label` to an element, useful for screenreaders. |
| boxShadow       | `string`     |         | Adds prop adds `aria-label` to an element, useful for screenreaders. |
| boxShadowHover       | `string`     |         | Adds prop adds `aria-label` to an element, useful for screenreaders. |
| boxShadowActive       | `string`     |         | Adds prop adds `aria-label` to an element, useful for screenreaders. |
| boxShadowFocus       | `string`     |         | Adds prop adds `aria-label` to an element, useful for screenreaders. |

        circled={circled}
        dataTest={dataTest}
        disabled={disabled}
        external={external}
        fontSize={fontSize}
        fontWeight={fontWeight}
        foreground={foreground}
        foregroundHover={foregroundHover}
        foregroundFocus={foregroundFocus}
        foregroundActive={foregroundActive}
        fullWidth={fullWidth}
        height={height}
        href={href}
        iconLeft={IconLeft && <IconLeft />}
        iconRight={IconRight && <IconRight />}
        icons={icons}
        loading={loading}
        onClick={action("onClick")}
        padding={padding}
        role={role}
        size={size}
        spaceAfter={spaceAfter}
        submit={submit}
        title={title}
        tabIndex={tabIndex}
        width={width}
      >
        {children}
