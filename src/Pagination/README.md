# Pagination
To implement Pagination component into your project you'll need to the import:
```jsx
import Pagination from "@kiwicom/orbit-components/lib/Pagination";
```

After adding import into your project you can use it simply like:
```jsx
<Pagination pageCount={1337} selectedPage={69} />
```
## Props
Table below contains all types of the props available in the Pagination component.

| Name              | Type          | Default         | Description                      |
| :---------------- | :------------ | :-------------- | :------------------------------- |
| dataTest          | `string`      |                 | Optional prop for testing purposes.
| **pageCount**     | `number`      |                 | The page count to render into separated buttons. [See Functional specs](#functional-specs)
| selectedPage      | `number`      | `1`             | The index number of the selected page.
| previousLabel     | `string`      | `"Previous"`    | The label to display in the previous button.
| nextLabel         | `string`      | `"Next"`        | The label to display in the next button.
| **onPageChange ** | `func`        |                 | Function for handling onPageChange event. [See Functional specs](#functional-specs)
  
### Functional specs
* If the `pageCount` will be bigger than 7, the compact version will be rendered.

* The prop `onPageChange` will return the new index of selected page. Use arrow function for it, e.g.:
```jsx
<Pagination onPageChange={(selectedPage) => doSomething(selectedPage)} />
```

