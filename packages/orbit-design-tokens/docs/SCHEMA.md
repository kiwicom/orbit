# Schema of @kiwicom/orbit-design-tokens

Orbit design tokens could be considered as a simple way to describe, document and use the visual language of Orbit design system, but there are multiple requirements that it needs to meet and support.

Therefore, we use a structured and standardized way to create, store and work with Orbit design tokens.

## Namespace / Object / Variant / Property

In similarity with the **Category / Type / Item** schema, defined by [style-dictionary](https://amzn.github.io/style-dictionary/#/), we aim to have design tokens defined by some hierarchical tree structure.

This hierarchical tree structure brings a consistent approach to how our design tokens are being defined in a systematic way. Therefore, you will see that every definition of our design tokens will look like this:

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

The above example is being translated with custom attribute transforms. For information on how we work with the `namespace.object.variant.property` hierarchical tree structure, check the transforms document.

### Namespace

In our design tokens, a `namespace` is considered the top-level layer of a token. It determines the intention of the token – where and how exactly it will be used.

Possible values of the `namespace`:

- The `foundation` is being used for the internal design tokens that are used as aliases for `global` and `component` design tokens, and/or interpretation of values that can be overwritten by custom theming,
- the `global` is being used for the most common design tokens that interpret the fundamental visual language of the Orbit design system,
- the `component` is being used for grouped design tokens that can be used for similar components, e.g. shared design token for the height of the buttons and/or inputs.

### Object

The `Object` attribute is used to specify either the name of some component (component group) or the [foundation object](#foundation-objects).

#### Foundation objects

– palette
– border-radius
– breakpoint
– duration
– elevation
– space
– typography (font-family, font-size, line-height, font-weight)
– z-index

### Variant

The `variant` level exists to be able to specify more exact contextual usage. In most cases, the value of some of supported [variants](#list-of-values-for-variant-attributes) or [palette shades](#list-of-values-for-variant-and-sub-variant-attributes-of-palette-shades) are used.

### Property (or either sub-variant)

Following after the `variant` attribute, there is a need to specify either a `property` (e.g. `height`) or, sometimes, an allowed sub-variant for some Object. This is especially handy when the token is more complex and has more specificity, like [additional palette shades](#list-of-values-for-variant-and-sub-variant-attributes-of-palette-shades).

## Design token definition types

Because design tokens are data representation of the visual language, we need to use many types of them. All the following types of design tokens have their transformers available either by the default implementation from `style-dictionary` or by custom implementation. For more information about the architecture check the [architecture](https://amzn.github.io/style-dictionary/#/architecture).

– border-radius
– color
– breakpoint
– duration
– box-shadow
– size
– font-family
– font-weight
– z-index
– modifier
– spacing
– opacity

### Deprecated token

For the case of token deprecation, it's possible to use three special additional attributes that helps us with the migration/deprecation process:

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
          "deprecated-version": "6.0.0"
        }
      }
    }
  }
}
```

### Internal token

We take advantage of how style-dictionary handles aliases for achieving the goal of providing a _themeable_ design system. This is done by separate and doubled implementation of the foundation visual elements.

The whole foundation visual language is defined and stored in the `foundation` namespace and then referenced via aliases into `global` namespace. Since we don't want to have the same design tokens twice in the generated output, we need to mark them with the `internal` boolean attribute.

Therefore, the implementation of `foundation.space.small` design token will be the following:

```json
{
  "foundation": {
    "space": {
      "small": {
        "type": "size",
        "value": 12,
        "internal": true
      }
    }
  }
}
```

## List of values for variant attributes

For all the variants (and sub-variants) we use a predefined set of possible names, so we can ensure consistent and good developer/designer experience throughout the whole design system.

### Sizing scale

The sizing scale in our tokens is based on t-shirt sizes that we are used to from the real world.

The following values can be used as variants for size:

- extra-small
- small
- medium (or normal)
- large
- extra-large

These values are being used in the most cases, because they describe the contextual size of the component, or any other object, in systematical way.

However, there are few exceptions related to the sizing scale, which don't follow the t-shirt size taxonomy. All of them are special and should be used sparingly:

- `circle` that could be used when element has circled shade – same width and height,
- `normal` that could be used when we need to set up a concrete default value, for e.g. button component.

To be able to determinate if `normal` should be used, following conditions should be used:

- use `medium`, when there is no preferred size for the variant or attribute,
- use `normal`, when it should be the default variant/size and used in the majority of possible cases.

### Variant types

Orbit design tokens use many contextual types – from statuses (e.g. success) to simple importance variant (e.g. primary).

Status types:

– info
– success
– warning
– critical
– neutral

Ordered importance types:

– primary
– secondary
– tertiary

We also use additional types connected to some specific behaviour, such as:

– selected
– compact

And lastly, there can be types connected to visual language:

– inverted
– white
– dark
– subtle

### Duration of transitioning

For transitioning, we use simple scale of three values that represents relative speed:

– slow
– normal

– fast

### Typography scale

For typography, we use a combination of the [sizing scale](#sizing-scale) and a scale that represents the visual hierarchy of heading levels:

– display
– displaySubtitle
– title1 to title5 according to existing HTML heading tags

### Elevation scale

Based on our [elevation system](https://orbit.kiwi/foundation/elevation-hierarchy/), we use only the following naming variants for the definition of elevation:

– suppressed
– flat
– action
– fixed
– fixedReverse
– raised
– raisedReverse
– overlay

### Viewports

smallMobile, mediumMobile, largeMobile, tablet, desktop, largeDesktop

### Component interactive states/variants

In some cases we need to use a word describing the interactive state of component, so it's easy to differentiate it from the default state:

– filled
– hover
– active
– focused
– disabled

## List of values for variant and sub-variant attributes of palette shades

Due to the two-directional color palette system, we allow only pre-defined values for the `sub-variant` level.

Based on our structure of color palette, it could be split into vertical and horizontal direction.

Possible vertical shades:

- light
- normal
- dark
- darker

Possible horizontal shades:

– primary (the name is implicit and not used)
– secondary
– tertiary

The main reason why we don't call our horizontal shades according to the interactive state is lack of usage flexibility and also because we want to maintain restricted usage of these horizontal shades.

Therefore, we allow usage of `secondary` or `tertiary` in the following cases:

– when the usage is contextual in interactive states – such as `:hover`, `:focus` etc.,
– when the user needs to define more layered and subtle UI at the same time, because usage of vertical shades would only make the UI interface too heavy.

In the end, if we look at a real example of a definition of a color palette token `foundation.palette.blue.light-secondary`, it can be defined like this:

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
