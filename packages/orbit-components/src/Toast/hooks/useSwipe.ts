import { useCallback, useEffect, useState } from "react";

import { SWIPE_DISMISS_DELAY } from "../consts";

export default function useSwipeToDismiss(
  ref: React.RefObject<HTMLElement>,
  onDismiss: () => void,
  distanceBeforeDismiss: number,
  direction: "left" | "right",
): { swipeOffset: number; swipeOpacity: number } {
  const node = ref.current;
  const [removing, setRemoving] = useState(false);
  const [pressedPosition, setPressedPosition] = useState(0);
  const [positionLeft, setPositionLeft] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const remove = useCallback(() => {
    setTimeout(() => {
      onDismiss();
    }, SWIPE_DISMISS_DELAY);
  }, [onDismiss]);

  const onMouseUp = useCallback(() => {
    if (!removing) {
      setPressedPosition(0);
      setPositionLeft(0);
      setOpacity(1);
    }
  }, [removing]);

  const onMouseMove = useCallback(
    (ev: MouseEvent) => {
      if (removing) return;

      if (pressedPosition && node) {
        let newPositionLeft = ev.screenX - pressedPosition;
        const directionValue = direction === "right" ? 1 : -1;

        if (
          (direction === "right" &&
            newPositionLeft >= (node.offsetWidth * distanceBeforeDismiss) / 100) ||
          (direction === "left" &&
            newPositionLeft * directionValue >= (node.offsetWidth * distanceBeforeDismiss) / 100)
        ) {
          newPositionLeft += node.offsetWidth * directionValue;
          setRemoving(true);
          remove();
        } else if (direction === "right") {
          newPositionLeft = newPositionLeft < 0 ? 0 : newPositionLeft;
        } else {
          newPositionLeft = newPositionLeft > 0 ? 0 : newPositionLeft;
        }
        setPositionLeft(newPositionLeft);
        setOpacity((100 - (newPositionLeft * directionValue * 100) / (node.offsetWidth * 2)) / 100);
      }
    },
    [removing, pressedPosition, direction, distanceBeforeDismiss, node, remove],
  );

  const onMouseDown = useCallback(
    (ev: React.MouseEvent<HTMLElement>) => setPressedPosition(ev.screenX),
    [setPressedPosition],
  );

  useEffect(() => {
    if (!node) setOpacity(1.1);
    // @ts-expect-error TODO
    else node.addEventListener("mousedown", onMouseDown);
    return () => {
      // @ts-expect-error TODO
      if (node) node.removeEventListener("mousedown", onMouseDown);
    };
  }, [node, onMouseDown, setOpacity]);

  useEffect(() => {
    document.body?.addEventListener("mouseup", onMouseUp);
    document.body?.addEventListener("mousemove", onMouseMove);

    return () => {
      document.body?.removeEventListener("mouseup", onMouseUp);
      document.body?.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseUp, onMouseDown, onMouseMove]);

  return { swipeOffset: positionLeft, swipeOpacity: opacity };
}
