# Schema of @kiwicom/orbit-design-tokens

Orbit design tokens could be considered as a simple way how to describe, document and use the visual language of Orbit design system, but there are multiple requirements that it needs to meet and support.

Therefore, we use structured and standardized way how Orbit design tokens are being created, stored and how we work with them.

## Namespace / Object / Variant / Property

In similarity with [**Category / Type / Item**](https://amzn.github.io/style-dictionary/#/properties?id=category-type-item) defined by style-dictionary we aim to have design tokens defined by some hierarchical tree structure.

This hierarchical tree structure brings consistent approach how our design tokens are being defined in systematical way. Therefore, you will see that every definition of our design token will look like this:

```json
{
  "component": {
    "button": {
      "large": {
        "height": {
          "type": "size",
          "value": "{foundation.size.extra-large}"
        }
      }
    }
  }
}
```

The above example is being translated with custom attribute transforms. For information how we work with `namespace.object.variant.property` hierarchical tree structure check transforms document.

### Namespace

In our design tokens an `namespace` is considered the top-level layer of design tokens that determines the intention of the token – where and how exactly it will be used.

Possible values of the object level are:

- The `foundation` is being used for the internal design tokens that are used as aliases for `global` and `component` design tokens, and/or interpretation of values that can be overwritten by custom theming,
- the `global` is being used for the most common design tokens that interprets the fundamental visual language of the Orbit design system,
- the `component` is being used for grouped design tokens that can be used for similar components, e.g. shared design token for the height of the buttons and/or inputs.

### Object

The `object` is an attribute to specify either the name of some component (component group) or [foundation object](#foundation-objects).

#### Foundation objects

- palette
- border-radius
- breakpoint
- duration
- elevation
- space
- typography (font-family, font-size, line-height, font-weight)
- z-index

### Variant

The `variant` level exists to be able to specify more exact contextual usage. In most cases, value of some of supported [variants](#list-of-variants) or [palette shades](#palette-shades) will be used.

### Property (or either sub-variant)

Following after the `variant` attribute, there is a need to specify either `property` (e.g. `height`) or sometimes allowed sub-variants for some objects. This is especially handy when the token is more complex and has more specificity, like [additional palette shades](#palette-shades).

## Design token definition types

Because design tokens are data representation of the visual language, we need to use many types of them. All the following types of design tokens have their transformers available either by the default implementation from `style-dictionary` or by custom implementation. For more information about the architecture check the [...]() document.

- border-radius
- color
- breakpoint
- duration
- box-shadow
- size
- font-family
- font-weight
- z-index
- modifier
- spacing
- opacity

## Additional attributes

For some cases we define and use additional attributes that help us maintain the whole structure of Orbit design tokens.

### Deprecated token

For the case of token deprecation, it's possible to use three special additional attributes that helps us with migration/deprecation process:

- The `deprecated` boolean attribute to tell the generator the token is deprecated,
- the optional `deprecated-replace` attribute to specify the existing replacement via alias, if it exists,
- the `deprecated-version` attribute to specify from which version the design token will be deleted.

For instance, if we want to deprecate the `component.button.large.height` design token, it would be defined in this way:

```json
{
  "component": {
    "button": {
      "large": {
        "height": {
          "type": "size",
          "value": "{foundation.size.extra-large}",
          "deprecated": true,
          "deprecated-replace": "{optional.alias.to.specify.the.replacement.token}",
          "deprecated-version": "1.0.0"
        }
      }
    }
  }
}
```

### Internal token

We take advantage of how style-dictionary is handling aliases for the meeting the goal of providing theme-able design system. This is done by separate and doubled implementation of the foundation visual elements. You can read more about the theming in separate [document](#link).

The whole foundation visual language is defined and stored in the `foundation` namespace and then referenced via aliases into `global` namespace. Since we don't want to have the same design tokens twice in the generated output, we need to mark them with `internal` additional boolean attribute.

Therefore, the implementation of `foundation.space.one-x` design token will be following:

```json
{
  "foundation": {
    "space": {
      "one-x": {
        "type": "size",
        "value": 4,
        "internal": true
      }
    }
  }
}
```

## List of values for variant attributes

TODO

### Proportion scale for spacing

For the intention of unified and standardized sizing or spacing scales in the whole Orbit design system we use the base value – `4px`. This base value influences the whole visual language and applies to various design decisions we did, or will do.

For spacing scale that is established on the base value we use only proportion-based scale that multiples it, or is a proportion of it.

Therefore, values of spacing can be composed only in following way:

- `2-x` which translates into two times base value (e.g. 8 pixels, `if base value = 4 pixels`)
- `half-x` which translates into half of base value (e.g. 2 pixels, `if base value = 4 pixels`)

### Sizing scale

In a difference with scale for spacing, the sizing scale is based on t-shirt sizes that we are used to from real world.

We don't use the shorten variant of t-shirt sizes, because it doesn't provide a good developer experience. Therefore, it's possible to use following values as variants:

- extra-small
- small
- medium (or normal)
- large
- extra-large

These values are being used in the most cases, because it describes the contextual size of the component, or any other object in systematical way.

However, there are few exceptions related to the sizing scale, which don't follow t-shirt taxonomy. All of them are special and should be used sparingly:

- `circle` that could be used when element has circled shade – same width and height,
- `normal` that could be used when we need to set up concrete default value for e.g. button component.

To be able to determinate if `normal` should be used, following conditions should be used:

- use `medium`, when there is no preferred size for the variant or attribute,
- use `normal`, when it should be the default variant/size and used in the majority of possible cases.

### Variant types

Orbit design tokens use many contextual types – from statuses (e.g. success) to simple importance variant (e.g. primary).

Status types:
– info
– success

- warning
  – critical
- neutral

Ordered importance types:

- primary
  – secondary
  – tertiary

We also use additional types connected to some specific behaviour, such as:

- selected
- compact

And lastly, there can be types connected to visual language:

- inverted
- white
- dark
- subtle

### Duration of transitioning

For transitioning, we use simple scale of three values that represents relative speed:

– slow
– normal

- fast

### Typography scale

For typography, we use combination of the [sizing scale](#sizing-scale) and scale that represents the visual hierarchy of heading levels:

- display
- displaySubtitle
- title1 to title5 according to existing HTML heading tags

### Elevation scale

Based on our [elevation system](https://orbit.kiwi/foundation/elevation-hierarchy/), we use only following naming variants for the defition of them:

- suppressed
- flat
- action
- fixed
- raised
- overlay

### Viewports

smallMobile, mediumMobile, largeMobile, tablet, desktop, largeDesktop

### Component interactive states/variants

In some cases we need to use a word describing the interactive state of component, so it's easy to differentiate it from the default state:

- filled
- hover
- active
- focused
- disabled

## List of values for variant and sub-variant attributes of palette shades

Due to the two-directional color palette system, we allow only pre-defined values for the `sub-variant` level.

Based on our structure of color palette, it could be split into vertical and horizontal direction.

Possible vertical shades:

- lighter
- light
- normal
- dark
- darker

Possible horizontal shades:

- primary (the name is implicit and not used)
- secondary
- tertiary

The main reason why we don't call our horizontal shades according to the interactive state is lack of usage flexibility and also because we want to maintain restricted usage of these horizontal shades.

Therefore, we allow usage of `secondary` or `tertiary` in following cases:

- when the usage is contextual in interactive states – such as `:hover`, `:focus` etc.,
- when the user needs to define more layered and subtle UI at the same time, because usage of vertical shades only would make the UI interface too heavy.

In the end, if we would look on real example of definition of color palette token `foundation.palette.blue.light-secondary`, it would be defined like this:

```json
{
  "global": {
    "palette": {
      "blue": {
        "light": {
          "type": "color",
          "value": "{foundation.palette.blue.light}"
        }
      }
    }
  }
}
```
