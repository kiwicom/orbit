//@flow
import ReactDOM from "react-dom";
import initStoryshots, { multiSnapshotWithOptions } from "@storybook/addon-storyshots";

// https://github.com/facebook/react/issues/11565
// $FlowExpected
ReactDOM.createPortal = node => node;

initStoryshots({ test: multiSnapshotWithOptions({}) });
