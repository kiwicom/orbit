# Schema of @kiwicom/orbit-design-tokens

Orbit design tokens could be considered as a simple way to describe, document and use the visual language of Orbit design system, but there are multiple requirements that it needs to meet and support.

Therefore, we use a structured and standardized way to create, store and work with Orbit design tokens.

Tokens are defined in `.json` files stored inside the _definitions_ directory, located in `src/dictionary/definitions/`. Any time a new token is to be added, modified or removed, it should be done in a file inside that path. All other files are generated and should not be modified manually.

This document describes the token definition schema and provides [examples](#examples) to better understand how to manage them.

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

- **foundation**: used for the internal design tokens that are used as aliases for `global` and `component` design tokens, and/or interpretation of values that can be overwritten by custom theming.
- **global**: used for the most common design tokens that interpret the fundamental visual language of the Orbit design system.
- **component**: used for grouped design tokens that can be used for a specific component or a set of similar components, e.g. shared design token for the height of the buttons and/or inputs.

For each namespace, there is a dedicated folder on the _definitions_ directory.

```
src/dictionary/definitions/
├── foundation/
|   |── ...
├── global/
|   |── ...
└── component/
    |── ...
```

### Object

The `Object` attribute is used to specify either the name of some component (eg: button, form-element...) or the [foundation object](#foundation-objects).

#### Foundation objects

– palette
– border-radius
– breakpoint
– duration
– elevation
– space
– typography (font-family, font-size, line-height, font-weight)
– z-index

For each object, there is a dedicated folder or file on the corresponding namespace directory.

```
src/dictionary/definitions/
├── global
|   |── palette
|   |   |── ...
|   |── border-radius.json
|   |── ...
├── foundation
|   |── palette
|   |   |── ...
|   |── border-radius.json
|   |── ...
└── component
    |── button
    |   |── ...
    |── form-element
    |   |── ...
    |── ...
```

The sub-division of the objects is based on the complexity of each and the number of variants and properties that the object can have.

For example, the `button` component object can have many variants and properties. But the conjunction of multiple properties with different values produces semantic variants. Therefore, each variant is stored in its own file.

```
src/dictionary/definitions/
└── component
    |── button
    |   |── button-primary.json
    |   |── button-critical.json
    |   |── ...
```

Alternatively, the `form-element` component object organizes each property in its own file, because they are simpler and are not tied to each other to create meaningful semantic variants.

```
src/dictionary/definitions/
└── component
    |── form-element
    |   |── form-element-background.json
    |   |── form-element-padding.json
    |   |── ...
```

### Variant

The `variant` level **is optional** for each token and allows to specify a more exact contextual usage. In most cases, the value of a supported [variant](#list-of-values-for-variant-attributes) or [palette shades](#list-of-values-for-variant-and-sub-variant-attributes-of-palette-shades) are used.

The variant name can be tied to the property it describes (like the `form-element` example above):

```json
{
  "component": {
    "form-element": {
      "disabled": {
        "background": {
          ...
        }
      }
    }
  }
}
```

Alternatively, it can be a meaningful name that describes the effect of multiple properties in one context (like the `button` example above).

```json
{
  "component": {
    "button": {
      "primary": {
        "background": {
          "type": "color",
          "value": "{foundation.palette.product.normal}"
        },
        "background-hover": {
          "type": "color",
          "value": "{foundation.palette.product.normal-hover}"
        },
        ...
      }
    }
  }
}
```

### Property

Following the `variant` attribute (if it exists), there is a need to specify either a `property` (e.g. `height`) or, sometimes, an allowed sub-variant for some Object. This is especially handy when the token is more complex and has more specificity, like [additional palette shades](#list-of-values-for-variant-and-sub-variant-attributes-of-palette-shades).

A property is specified with a `type` and a `value` attribute. The `type` attribute is used to specify the [type of the token](#design-token-definition-types), and the `value` attribute is used to specify the actual value of the token.

```json
{
  "component": {
    "button": {
      "large": {
        "height": {
          "type": "size",
          "value": "{foundation.size.600}"
        }
      }
    }
  }
}
```

## Design token definition types

Because design tokens are data representation of the visual language, we have many different types of them. All the following types of design tokens have their transformers available either by the default implementation from `style-dictionary` or by custom implementation. For more information about the architecture check the [architecture documentation](https://amzn.github.io/style-dictionary/#/architecture).

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

### Deprecated tokens

For the case of token deprecation, it is possible to use three special additional attributes that helps us with the migration/deprecation process:

- The `deprecated` boolean attribute to tell the generator the token is deprecated.
- the optional `deprecated-replace` attribute to specify the existing replacement via alias, if it exists.
- the `deprecated-version` attribute to specify from which version the token is expected to be deleted.

If we want to deprecate the `component.button.large.height` design token, it would be defined the following way:

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

### Internal tokens

We take advantage of style-dictionary's alias handling to create a themeable design system. This is achieved through separate and duplicate implementations of the foundation's visual elements.

The whole foundation visual language is defined and stored in the `foundation` namespace and then referenced via aliases on the `global` namespace. Since we don't want to have the same design tokens twice in the generated output, we need to mark them with the `internal` boolean attribute.

For example, the implementation of `foundation.space.300` design token will be the following:

```json
{
  "foundation": {
    "space": {
      "300": {
        "type": "size",
        "value": 12,
        "internal": true
      }
    }
  }
}
```

Then, the token that is actually included on the output is defined on the global namespace:

```json
{
  "global": {
    "space": {
      "300": {
        "type": "size",
        "value": "{foundation.space.300}"
      }
    }
  }
}
```

With this, the exported theme object will contain only one token: `space300`.

## List of values for variant attributes

For all the variants (and sub-variants) we use a predefined set of possible names, so we can ensure consistent and good developer/designer experience throughout the whole design system.

### Sizing scale

The sizing scale in our tokens is numeric and follows a progression of 4px for each 100 units.

Therefore, a size token with value 100 is equal to 4px, 200 is equal to 8px, 300 is equal to 12px, and so on. Half units are also allowed, so 150 is equal to 6px.

These values are being used in the most cases for spacing and sizing. However, for some component specific tokens we can use a semantic scale, like `small`, `medium`, `large`, etc.

### Variant types

Orbit design tokens can also use contextual types – from statuses (e.g. success) to simple importance variants (e.g. primary).

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

And there can also be types connected to visual language:

– inverted
– white
– dark
– subtle

### Duration of transitioning

For transitioning, we use a simple scale of three values that represents relative speed:

– slow
– normal
– fast

### Typography scale

For typography, we use a custom size scale:

- small
- normal
- large
- extraLarge

And a scale that represents the visual hierarchy of heading levels:

– display
– displaySubtitle
– title0 to title6

### Elevation scale

Based on our [elevation system](https://orbit.kiwi/foundation/elevation-hierarchy/), we use the following naming variants for the definition of elevation:

– suppressed
– flat
– level 1 to level 4
– level 3 reverse
– fixed
– fixedReverse

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

Based on our structure of color palette, it can be split into vertical and horizontal direction.

Possible vertical shades:

- light
- normal
- dark
- darker

Possible horizontal shades:

– primary (the name is implicit and not used)
– secondary
– tertiary

The main reason why we don't call our horizontal shades according to the interactive state is the lack of usage flexibility and also because we want to maintain restricted usage of these horizontal shades.

Therefore, we allow usage of `secondary` or `tertiary` in the following cases:

– when the usage is contextual in interactive states – such as `:hover` or `:focus`,
– when the user needs to define more layered and subtle UI at the same time, because usage of vertical shades would only make the UI interface too heavy.

## Examples

This section aims at providing examples of how to define design tokens in multiple contexts.

All the values here are mere examples.

### Color tokens

When dealing with colors, it is important to understand if we want a token to be used just for a specific component or for the whole design system. In the first case, we should define the token in the `component` namespace, and in the second case, in the `foundation` namespace as _internal_, with a correspondent `global` definition.

#### Foundation palette token

**Token name on theme object:** _unavailable_

**Definition file:** `src/dictionary/definitions/foundation/palette/blue.json`

```json
{
  "foundation": {
    "palette": {
      "blue": {
        "light": {
          "type": "color",
          "value": "#E8F4FD",
          "internal": true
        }
      }
    }
  }
}
```

Notice how the token is defined as _internal_. It means that it will not be included on the output file, but can be referenced by other tokens, namely on the `global` and `component` namespaces.

#### Global palette token

**Token name on theme object:** `paletteBlueLight`

**Definition file:** `src/dictionary/definitions/global/palette/blue.json`

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

#### Component palette tokens

**Token names on theme object:** `buttonPrimaryBackground` & `buttonPrimaryForeground`

**Definition file:** `src/dictionary/definitions/component/button/button-primary.json`

```json
{
  "component": {
    "button": {
      "primary": {
        "background": {
          "type": "color",
          "value": "{global.palette.blue.light}"
        },
        "foreground": {
          "type": "color",
          "value": "#003866"
        }
      }
    }
  }
}
```

Notice how the `background` token references the `global` palette token, while the `foreground` token has a direct value. It means that if the theme is customized and the foundation value for `blue.light` changes, the `background` token will also change. But the `foreground` token will remain the same, as it is defined with a constant value.

### Variant and Non-variant component token

As mentioned above, variants are optional. The example below shows the definition of two tokens on the `country-flag` component namespace, one with a variant and the other without.

**Token names on theme object:** `countryFlagBackground` & `countryFlagSmallHeight`

**Definition file:** `src/dictionary/definitions/component/country-flag.json`

```json
{
  "component": {
    "country-flag": {
      "background": {
        "type": "color",
        "value": "transparent"
      },
      "small": {
        "height": {
          "type": "height",
          "value": "9px"
        }
      }
    }
  }
}
```

Notice how the `background` token does not have a variant, while the `height` token has the `small` variant.

It allows definition of an `height` token for other variants, like `medium` or `large`, if needed.

**Token names on theme object:** `countryFlagSmallHeight` & `countryFlagMediumHeight`

**Definition file:** `src/dictionary/definitions/component/country-flag.json`

```json
{
  "component": {
    "country-flag": {
      "small": {
        "height": {
          "type": "height",
          "value": "9px"
        }
      },
      "medium": {
        "height": {
          "type": "height",
          "value": "11px"
        }
      }
    }
  }
}
```

It also allows the definition of other properties for the `small` variant, like `width`, for example.

**Token names on theme object:** `countryFlagSmallHeight` & `countryFlagSmallWidth`

**Definition file:** `src/dictionary/definitions/component/country-flag.json`

```json
{
  "component": {
    "country-flag": {
      "small": {
        "height": {
          "type": "height",
          "value": "9px"
        },
        "width": {
          "type": "width",
          "value": "9px"
        }
      }
    }
  }
}
```

### Complex property token

In some cases, a property can be more complex to define. This complex definition is valid in `global` and `component` namespaces.

**Token name on theme object:** `elevationLevel1BoxShadow`

**Definition file:** `src/dictionary/definitions/global/elevations.json`

```json
{
  "global": {
    "elevation": {
      "level1": {
        "box-shadow": {
          "type": "box-shadow",
          "value": "{foundation.palette.ink.dark}",
          "attributes": {
            "box-shadow": [
              {
                "x": 0,
                "y": 0,
                "blur": 2,
                "spread": 0,
                "color": "{foundation.palette.ink.dark}",
                "opacity": 16
              },
              {
                "x": 0,
                "y": 1,
                "blur": 4,
                "spread": 0,
                "color": "{foundation.palette.ink.dark}",
                "opacity": 12
              }
            ]
          }
        }
      }
    }
  }
}
```

Notice how the `box-shadow` token has an `attributes` attribute that defines the actual values for the box-shadow property. The transforms functions will take care of converting this definition into a valid CSS box-shadow property.
