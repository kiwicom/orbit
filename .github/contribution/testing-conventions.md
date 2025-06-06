# Component testing conventions

For testing Orbit components we're using [Testing Library](https://testing-library.com/). We expect every new component to have tests, so be sure to familiarize yourself with this library. This document provides some conventions we follow when writing tests.

## Test format

Test files should generally consist of one root `describe` block which is named after the unit that you're testing, containing multiple `it` blocks which should generally start with `should`, so that test names read like sentences. Sometimes you want to nest another `describe` block within the root one to group multiple `it` blocks related to the same aspect of the unit.

```jsx
import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "../";

describe("Button", () => {
  const user = userEvent.setup();

  it("should be accessible", async () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });
  it("should trigger the click handler", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    await user.click(screen.getByRole("button", { name: "Click me" }));
    expect(onClick).toHaveBeenCalled();
  });
  describe("when disabled", () => {
    it("should not trigger the click handler", () => {
      const onClick = jest.fn();
      render(
        <Button onClick={onClick} disabled>
          Click me
        </Button>,
      );

      await user.click(screen.getByRole("button", { name: "Click me" }));
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
```

## Prefer `ByRole` queries

Unless you're asserting that `dataTest` prop is being passed correctly, prefer [`ByRole`](https://testing-library.com/docs/dom-testing-library/api-queries#byrole) queries, that way you can test behavior and accessibility at the same time.

## Pass literal props directly

It's not necessary to save every prop value in a variable just because you're asserting it later, only save objects like `onClick` because you need the reference to test it:

```jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "../";

describe("Button", async () => {
  const user = userEvent.setup();

  it("default", () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick}>
        Click me {/* it's not necessary to save this into a variable */}
      </Button>,
    );

    const button = screen.getByRole("button");
    await user.click(button);
    expect(button).toHaveTextContent("Click me"); // you can just repeat it
    expect(onClick).toHaveBeenCalled();
  });
});
```

## Visual regression testing

We use [Playwright component testing](https://playwright.dev/docs/test-components) for visual
regression testing, it takes screenshots of components and compares them against existing
references. See [Playwright docs](https://playwright.dev/docs/test-snapshots) for more information.

Commands:

- `yarn components test-ct` - test components, both behaviour and screenshots
- `yarn components test-ct --update-snapshots` - update screenshots
- `yarn components test-ct path/to/a/component` - test a single component

### Writing the tests

The tests are written in `*.ct.tsx` files next to the component. The test file should have the
following structure:

```tsx
// src/components/Component/Component.ct.tsx

import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { ComponentStoryTest } from "./Component.ct-story";

import { Component } from ".";

test("<meaningful name>", async ({ mount }) => {
  const component = await mount(<Component />);

  await expect(component).toMatchScreenshot();
});

test("<another meaningful name>", async ({ mount }) => {
  const component = await mount(<ComponentStoryTest />);

  await expect(component).toMatchScreenshot();
});
```

You may have noticed that we are importing `ComponentStoryTest` from the same directory. This is because
it is not possible to mount components with other JSX elements as props. This is a limitation of
Playwright that is documented in their [official documentation](https://playwright.dev/docs/test-components#test-stories).
While using the component directly is possible, we recommend using the story instead, as it is
more versatile.

A test story file should have the following structure:

```tsx
// src/components/Component/Component.ct-story.tsx

import * as React from "react";

import * as Icons from "../icons";

import { Component } from ".";

export function TestComponentStory() {
  return (
    <div className="p-100 inline-block">
      <Component
        icon={<Icons.Airplane />}
        title="Lorem ipsum dolor"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae magna eget odio euismod aliquam."
      />
    </div>
  );
}
```

### Snapshots

Snapshots are OS-specific. Our CI runs tests on both Linux and macOS platforms to ensure cross-platform compatibility. In order to generate CI-compatible snapshots locally, you can:

1. For Linux snapshots: Run the tests in Docker

   - `docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.52.0-jammy /bin/bash`
   - `yarn run docker:reset`
   - `yarn components test-ct --update-snapshots`

2. For macOS snapshots: Run the tests directly on your macOS machine
   - `yarn components test-ct --update-snapshots`

> Note: you may encounter some installation script errors. This is normal and can be ignored. The
> same applies to running the tests the first time.

After you're done with Docker, reset the environment after exiting:

- `yarn run docker:reset`

Both `darwin` and `linux` snapshots are kept:

- `darwin` snapshots are for macOS compatibility and local development experience
- `linux` snapshots are for Linux compatibility and CI

The snapshots for both platforms are stored in the repository and checked in CI. This ensures our components display correctly across different operating systems. When developing a new feature in a component that produces visual changes, make sure to update snapshots for both platforms.

It is possible that when executing the tests locally some tests fail with minimal differences. In that case, it is up to the developer to understand if it is caused by having snapshots generated on different machines or if it is really a visual change. If it is an actually intended visual change, the developer should update the snapshots using the dedicated GitHub Action workflow.

#### Colima

To use [Colima](https://github.com/abiosoft/colima) as your Docker engine, set it up as so:

```shell
brew install colima
brew install docker docker-compose
mkdir -p ~/.docker/cli-plugins
ln -sfn $(brew --prefix)/opt/docker-compose/bin/docker-compose ~/.docker/cli-plugins/docker-compose
brew install docker-buildx
ln -sfn $(brew --prefix)/opt/docker-buildx/bin/docker-buildx ~/.docker/cli-plugins/docker-buildx
colima start --cpu 4 --memory 4 --disk 100
```

Make sure to execute `colima stop` after you're done with the tests on the docker container.

#### Reviewing the changes

If some tests fail locally, you can see the difference in the `test-results` folder, that should be inside the src folder.
If the changes are expected, re-run the script to update the snapshots.

After you're satisfied with the results, commit any changes and push them to the repository. In GitHub, the
reviewer can conveniently see difference in before/after images when checking side-by-side.

On the CI, the Github PR checks will show if the snapshots failed. If that is the case, a report
is deployed, allowing to compare the actual and expected snapshots.
The report is available in https://kiwicom-orbit-test-report-BRANCH-NAME.surge.sh
where `BRANCH-NAME` is the name of the branch where the PR is located
(with any eventual slash `/` replaced by a dash `-`).
This report is deleted automatically once the PR is closed or merged.

#### Updating Visual Tests with GitHub Actions

If changes to the visual tests are expected, you can update snapshots for both Linux and macOS platforms by running the "Update Visual Tests" workflow in the GitHub Actions tab. This will:

1. Run the visual tests on both Ubuntu and macOS
2. Collect the updated snapshots from both platforms
3. Commit all changes with a single commit

To use this workflow:

1. Go to the GitHub Actions tab
2. Select the "Update Visual Tests" workflow
3. Click "Run workflow"
4. Select the correct branch
5. Provide a meaningful commit message
6. Click "Run workflow"

This is especially useful when you need to update snapshots for a pull request, as it ensures both platforms are updated consistently.

### Track down the regression with `git bisect`

If you aren't sure where the visual regression came from, which is often the case for this workflow
because the tests are being run only before releasing, you can instruct git to automatically find
out which commit caused it using `git bisect`.

Make sure that Docker Engine and Storybook are still running, and run:

```sh
# decide which commit contains the regression (e.g. HEAD),
# and which doesn't (e.g. when the reference was added)
git bisect start <bad commit> <good commit>
# this starts the search, kick back and relax, drink some tea
git bisect run yarn components test-ct
# once git finds the commit, it will stop there
# run the following to return to your starting position
git bisect reset
```

Keep in mind that the wider the range between bad and good commit is, the longer the search will take.

## Browser compatibility

This part of testing is often abandoned by people, but we are aware of how important this is for users. It's recommended that you test your new components across different platforms and browsers. New components should work on these browsers:

<!-- AUTO-GENERATED-CONTENT:START (SUPPORTED_BROWSERS) -->

- Chrome for Android 128
- Chrome 128
- Chrome 127
- Chrome 126
- Chrome 109
- Edge 128
- Edge 127
- Firefox 129
- Safari on iOS 17.6
- Safari on iOS 17.5
- Safari on iOS 17.4
- Safari on iOS 17.3
- Safari on iOS 17.2
- Safari on iOS 17.1
- Safari on iOS 17.0
- Safari on iOS 16.6-16.7
- Safari on iOS 16.5
- Safari on iOS 16.4
- Safari on iOS 16.3
- Safari on iOS 16.2
- Safari on iOS 16.1
- Safari on iOS 16.0
- Safari on iOS 15.6-15.8
- Safari on iOS 15.5
- Safari on iOS 15.4
- Safari on iOS 15.2-15.3
- Safari on iOS 15.0-15.1
- Safari on iOS 14.5-14.8
- Opera Mobile 80
- Safari 17.5
- Safari 17.4
- Safari 17.3
- Safari 17.2
- Safari 17.1
- Safari 17.0
- Safari 16.6
- Safari 16.5
- Safari 16.4
- Safari 16.3
- Safari 16.2
- Safari 16.1
- Safari 16.0
- Safari 15.6
- Safari 15.5
- Safari 15.4
- Safari 15.2-15.3
- Safari 15.1
- Safari 15
- Safari 14.1
- Samsung Internet 25

<!-- AUTO-GENERATED-CONTENT:END -->
