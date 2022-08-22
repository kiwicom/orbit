export function throttle(fn: (arg: any) => void, time: number): (args: any) => void {
  let lastTime = 0;
  return (...args) => {
    const now = new Date();
    if (+now - lastTime >= time) {
      fn(...args);
      // @ts-expect-error TODO
      lastTime = now;
    }
  };
}
