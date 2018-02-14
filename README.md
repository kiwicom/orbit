# Kiwi UI

Welcome! This is a set of UI components used at [kiwi.com](https://www.kiwi.com/en/).

## Usage

```js
import { Button } from "react-kiwi-ui";

const MyComponent = () => (
  <>
    <h1>Yo</h1>
    <Button onClick={console.log}>Click</Button>
  </>
);

export default MyComponent;
```

## Contributing

Write **tests**! The following checks must pass:
* `yarn test`
* `yarn flow`
* `yarn lint`

### Tasks

* `yarn storybook` - starts Storybook at **:6006**
* `yarn build` - builds the thing

## License

MIT
