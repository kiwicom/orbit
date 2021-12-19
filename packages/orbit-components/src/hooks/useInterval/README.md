# useInterval

To implement the `useInterval` hook in your component, add the import:

```jsx
import useInterval from "@kiwicom/orbit-components/lib/hooks/useInterval";
```

Then you can use it like that:

```jsx
export default function Component() {
  // The counter
  const [count, setCount] = useState < number > 0;
  // Dynamic delay
  const [delay, setDelay] = useState < number > 1000;
  // ON/OFF
  const [isPlaying, setPlaying] = useState < boolean > false;

  useInterval(
    () => {
      // Your custom logic here
      setCount(count + 1);
    },
    // Delay in milliseconds or null to stop it
    isPlaying ? delay : null,
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDelay(Number(event.target.value));
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setPlaying(!isPlaying)}>{isPlaying ? "pause" : "play"}</button>
      <p>
        <label htmlFor="delay">Delay: </label>
        <input type="number" name="delay" onChange={handleChange} value={delay} />
      </p>
    </>
  );
}
```

More about `useInterval` hook read [here](https://usehooks-ts.com/react-hook/use-interval) and [here](https://usehooks-ts.com/react-hook/use-interval)
