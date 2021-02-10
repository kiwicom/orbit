# Schema of @kiwicom/orbit-design-tokens

Orbit design tokens could be considered as a simple way how to describe, document and use the design language of Orbit design system, but there are multiple requirements that it needs to meet and support.

Therefore we use structured and standardized way how Orbit design tokens are being created, stored and how we work with them.

## Namespace / Object / Variant

In similarity with [**Category / Type / Item**](https://amzn.github.io/style-dictionary/#/properties?id=category-type-item) defined by style-dictionary we aim to have design tokens defined by some hierarchical tree structure.

This hierarchical tree structure brings consistent approach how our design tokens are being defined in systematical way. Therefore you will see that every definition of our design token will look like this:

```json
{
  "foundation": {
    "border-radius": {
      "small": {
        "value": 2
      }
    }
  }
}
```

The above example is being translated with custom attribute transforms. For information how we work with `namespace.objec.variant` hierarchical tree structure check transforms document.

### Namespace

In our design tokens an `object` is considered the top-level layer of design tokens that determines the intention of the token – where and how exactly it will be used.

Possible values of the object level are:

- `foundation`: internal design tokens that are used as aliases for `global` and `variant` design tokens, and/or interpretation of values that can be overwritten by custom theming,
- `global`: the most common design tokens that interprets the visual language of the Orbit design system,
- `variant`: grouped design tokens that can be used for similar components, e.g. shared design token for the height of the buttons and inputs.

### Object

An `object` level is attribute to specify either `property` or `component` for which we want to define design tokens. In real world example it can be `border-radius`, `button` or `palette` object that defines all colors used in our design system.

### Variant

The `variant` level exists to be able to specify contextual usage. In most cases, value of some of supported [scales](#scales) or [palette shades](#palette-shades) will be used.

#### SubVariant

In addition to variant level, there is a possibility to specify `subVariant` if the tokens definition requires so. This is especially handy when the token is more complex and has more specificity, like [color palette shades](#palette-shades).

### Palette shades

Due to the simplicity of our color palette, we allow only pre-defined values for the `subVariant` level.

Based on our structure of color palette, it could be split into vertical and horizontal direction.

Possible vertical shades:

- `lighter`
- `light`
- `normal`
- `dark`
- `darker`

Possible horizontal shades:

- `primary` (the name is implicit and not used)
- `secondary`
- `tertiary`

The main reason why we don't call our horizontal shades according to the interactive state is lack of usage flexibility and also because we want to maintain restricted usage of these horizontal shades.

Therefore we allow usage of `secondary` or `tertiary` in following cases:

- when the usage is contextual in interactive states – such as `:hover`, `:focus` etc.,
- when the user needs to define more layered and subtle UI at the same time, because usage of vertical shades only would make the UI interface too heavy.

In the end, if we would look on real example of definition of color palette token `foundation.palette.blue.light-secondary`, it would translate to this hierarchical tree structure:

- `namespace: foundation`,
- `object: palette`,
- `variant: blue`,
- `subVariant: light-secondary`.

## Scales

To be able to define design tokens for various and flexible use cases, we have defined more scales that are being used on the `variant` or `subVariant` level.

### The base value

For the intention of unified and standardized sizing or spacing scales in the whole Orbit design system we use the base value – `4px`.

This base value influences the whole UI and applies to various design decisions we may did, or will do.

### Proportion scale for spacing

For spacing scale that is established on the base value we use only proportion-based scale that multiples it, or is a proportion of it.

Therefore values of spacing can be composed only in following way:

- `2-x`: which translates into two times base value (e.g. 8 pixels, `if base value = 4 pixels`)
- `half-x`: which translates into half of base value (e.g. 2 pixels, `if base value = 4 pixels`)

### Sizing scale

In a difference with scale for spacing, the sizing scale is based on t-shirt sizes that we are used to from real world.

Therefore it's possible to use following values as variants:

- `extra-small`
- `small`
- `medium`
- `large`
- `extra-large`

These values are being used in the most cases, because it describes the contextual size of the component, or any other object in systematic way.

There are few exceptions related to the sizing scale, which don't follow t-shirt taxonomy. All of them are special and should be used sparingly:

- `circle`: could be used when element has circled shade – same width and height,
- `medium`:

To be able to determinate if `normal` should be used, following conditions should be used:

- use `medium`, when TBA,
- use `normal`, when TBA.

### Types

Orbit design tokens use many contextual types – from statuses (e.g. success) to simple importance variant (e.g. primary).

Status types:
– `info`
– `success`

- `warning`
  – `critical`
- `neutral`

Ordered importance types:

- `primary`
  – `secondary`
  – `tertiary`

We also use additional types connected to some specific behaviour, such as:

- `selected`
- `compact`

And lastly, there can be types connected to visual language:

- `inverted`
- `white`
- `dark`

### Durations

For interaction, we use simple scale of three values that represents relative speed:

– `slow`
– `normal`
- `fast`

### Typography scale

For typography we use combination of the [sizing scale](#sizing-scale) and scale that represents the visual hierarchy of heading levels:

- `display`
- `displaySuntitle`
- `title1` to `title5` according to existing HTML heading tags.

### Elevation scale

Suppressed, flat, action, fixed, raised, overlay

### Viewports

smallMobile, mediumMobile, largeMobile, tablet, desktop, largeDesktop

### Component interactive states

filled, hover, active, focused, disabled
