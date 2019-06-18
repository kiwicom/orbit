# Translate
We have support of our `Dictionary` see [this document](https://github.com/kiwicom/orbit-components/blob/master/.github/dictionary.md)

This component adds you possibility to take some strings from our dictionary. 

## Props
Table below contains all types of the props available in Translate component.

| Name          | Type                            | Default         | Description                      |
| :------------ | :------------------------------ | :-------------- | :------------------------------- |
| tKey          | `string`                        |                 | Translation key that dictionary object must contain
| values        | [`Object`](#values)             |                 | For placeholder values [See Functional specs](#functional-specs)


**Example:**
```jsx
import en_GB from "@kiwicom/orbit-components/lib/data/dictionary/en-GB.json"; 
import ThemeProvider from "@kiwicom/orbit-components/lib/ThemeProvider";
import Button from "@kiwicom/orbit-components/lib/Button";

const App = () => 
  <ThemeProvider theme={...} dictionary={en_GB}>
    <Button>
      <Translate tKey="button_close" />
    </Button>
  </ThemeProvider>;
```

### Values
```jsx
{
  [key]: "replacement string",
  [key2]: "replacement string2"
}
```

`key` is placeholder without `__` - if placeholder is `__time__` the object will look like this

```jsx
{
  time: "today"
}
```


## Functional specs

* If you have some key that contains placeholders like `We like __placeholder__` you can easily replace by this way:`<Translate tKey="translation_key_with_placeholder" values={{ placeholder: "orbit"}} />` then the result will be `We like orbit`
