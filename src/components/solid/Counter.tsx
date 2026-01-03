import type { JSX } from "solid-js";
import { createSignal } from "solid-js";
import "./Counter.css";

interface CounterProps {
  children?: JSX.Element;
}

export default function Counter({ children }: CounterProps) {
  const [count, setCount] = createSignal(0);
  const add = () => setCount(count() + 1);
  const subtract = () => setCount(count() - 1);

  return (
    <>
      <div class="counter">
        <button onClick={subtract}>-</button>
        <pre>{count()}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="counter-message">{children}</div>
    </>
  );
}
