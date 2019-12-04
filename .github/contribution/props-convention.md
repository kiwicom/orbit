# Props naming convention

This section will help you properly name your component’s new props. Defining new props is one of the most important and, often, harder things to do during development.

Everyone should agree with this naming convention and its rules and ensure each prop is compliant.

## General

In the best case, all props should be descriptive, meaningful and straightforward one-word names in lowercase. If it’s necessary, you can use compound words, but only with camelCase. Also, we are trying to choose prop names differently from the essential `HTML` attributes.

E.g., when forcing a link to open in a new tab we don't use `target` as a prop name (native in `HTML`), but instead, we use `external` prop. You can also use prop names that are the same as the native `HTML` names, but only when it’s necessary, ie, due to some technical issues.

## Method props

As is usually the case, method props should be named using `on` as a prefix. Most of the time you use them for handling an action, e.g., `onClick`, `onChange` or `onClose`.

## Boolean props

There’re two cases of boolean props. In the first case, for instance, props use `uppercase` to tell our `<Text>` component to render text bold.

The other case occurs when there’s a conflict between two props, and we need to separate and show the difference between them. E.g., when we need to use `error` for one component and `hasError` for the other. `error` stands for the `string` or `React.Node` type and `hasError` stands for the `boolean`.
