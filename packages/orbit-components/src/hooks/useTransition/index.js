// @flow
import * as React from "react";

import typeof UseTransitionType from ".";

const useTransition: UseTransitionType = ({ show, appear = false }) => {
  // if appear is true, we want to start from unmounted state, so that we can transition in
  const [mounted, setMounted] = React.useState(!appear && show);
  const [enter, setEnter] = React.useState(!appear && show);
  const [done, setDone] = React.useState(!appear || !show);
  const ref = React.useRef(null);
  const firstRender = React.useRef(true);

  // const [, updateState] = React.useState()
  // const forceUpdate = React.useCallback(() => updateState({}), [])

  // if (module.hot) {
  //   module.hot.dispose(() => {
  //     firstRender.current = true
  //     setMounted(!appear && show)
  //     setEnter(!appear && show)
  //     setDone(!appear || !show)
  //     forceUpdate()
  //   })
  // }

  React.useEffect(() => {
    if (firstRender.current) {
      if (appear && show) {
        setMounted(true);
      }
    }
  }, [appear, show]);

  React.useEffect(() => {
    let listener;
    const el = ref.current;
    if (!firstRender.current) {
      if (show) {
        setMounted(true);
      } else {
        setEnter(false);
        setDone(false);
        listener = () => {
          setMounted(false);
          setDone(true);
        };
        el?.addEventListener("transitionend", listener);
      }
    }
    return () => {
      el?.removeEventListener("transitionend", listener);
    };
  }, [show]);

  React.useEffect(() => {
    let listener;
    const el = ref.current;
    if (!firstRender.current) {
      if (mounted) {
        // reading from properties like scrollTop forces a repaint, which we need
        // to make transition work immediately after mount
        // eslint-disable-next-line babel/no-unused-expressions
        ref.current?.scrollTop;
        setEnter(true);
        setDone(false);
        listener = () => {
          setDone(true);
        };
        el?.addEventListener("transitionend", listener);
      }
    }
    return () => {
      el?.removeEventListener("transitionend", listener);
    };
  }, [mounted]);

  React.useEffect(() => {
    firstRender.current = false;
  }, []);

  return { ref, mounted, enter, done };
};

export default useTransition;
