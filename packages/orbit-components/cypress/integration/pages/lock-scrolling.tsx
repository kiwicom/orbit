import { useLockScrolling } from "@kiwicom/orbit-components";

export default function ScrollLock() {
  useLockScrolling({ current: document.body });
  return null;
}
