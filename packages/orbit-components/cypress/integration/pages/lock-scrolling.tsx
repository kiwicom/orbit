import { useLockScrolling } from "../../..";

export default function ScrollLock() {
  useLockScrolling({ current: document.body });
  return null;
}
