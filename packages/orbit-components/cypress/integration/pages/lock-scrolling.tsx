import { useLockScrolling } from "../../../src";

export default function ScrollLock() {
  useLockScrolling({ current: document.body });
  return null;
}
