# Component testing conventions

Testing new components is very important, that’s why we’ve written this document. Every component in `orbit-components` has its own `enzyme` tests. For more informations check their [docs](https://airbnb.io/enzyme/docs/api/). These tests have different cases in terms of component type:

- **Stateless component**
  - A simple test without testing states
- **Stateful component**

  - A more complex test with testing states

## Stateless component

With stateless components we don’t have to test any state changes. We just have to check if the Component was rendered properly with all its props, compare snapshots and, if there are some handlers of functions, we need to test them to determine if they have been called.

### Shallow wrapper

We prefer to use a shallow wrapper instead of a mount wrapper. The best practise is to use constants that you’ve already defined in `consts.js`.

```jsx
import { shallow } from "enzyme";

const text = "This is test text!";
const size = SIZE_OPTIONS.SMALL;
const component = shallow(<Component size={size}>{text}</Component>);
```

### Test

This section should contain all test occurrences that you want to test. Function `describe` should always be the name of the Component and it’s used only once. `it` function name always starts with “should” and continues with the appropriate name for the test occurrence. E.g. “should match snapshot”

```jsx
describe("Component", () => {
  it("should have text", () => {
    expect(component.find("Component__StyledComponent").text()).toBe(text);
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
```

## Stateful component

We test stateful components the same way we test stateless components, but additionally we also test changes of states.

```jsx
describe("Component", () => {
  it("should render closed", () => {
    const component = shallow(<Component onClose={jest.fn()} onClick={jest.fn()} />);
    const node = component.instance();
    node.setState({ isOpen: false });
    expect(component.getElement()).toMatchSnapshot();
  });
});
```

## Browser compatibility

This part of testing is often abandoned by people, but we are aware of how important this is for users. It’s recommended that you test your new components across different platforms and browsers. New components should work on these browsers:

- **Chrome**
- **Firefox**
- **Safari**
- **Edge**
- **IE10/11**
