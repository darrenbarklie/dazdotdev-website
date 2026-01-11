import { createSignal, onMount, onCleanup, For } from "solid-js";

interface TypeRevealProps {
  text: string;
  delay?: number;
  speed?: number;
  class?: string;
}

const glyphs = "!@#$%^&*()_+-=[]{}|;:',.<>?/\\`~0123456789";

export default function TypeReveal(props: TypeRevealProps) {
  const delay = props.delay ?? 0;
  const speed = props.speed ?? 50;
  const [revealed, setRevealed] = createSignal(0);
  const [chars, setChars] = createSignal<string[]>([]);

  let intervalId: number | undefined;
  let revealTimeoutId: number | undefined;

  const getRandomGlyph = () =>
    glyphs[Math.floor(Math.random() * glyphs.length)];

  onMount(() => {
    // Initialize with random glyphs
    setChars(
      props.text.split("").map((c) => (c === " " ? " " : getRandomGlyph())),
    );

    // Cycle through random glyphs
    intervalId = setInterval(() => {
      setChars((prev) =>
        prev.map((c, i) => {
          if (i < revealed()) return props.text[i];
          if (props.text[i] === " ") return " ";
          return getRandomGlyph();
        }),
      );
    }, 30);

    // Start revealing after delay
    revealTimeoutId = setTimeout(() => {
      const revealInterval = setInterval(() => {
        setRevealed((prev) => {
          if (prev >= props.text.length) {
            clearInterval(revealInterval);
            if (intervalId) clearInterval(intervalId);
            setChars(props.text.split(""));
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }, delay);
  });

  onCleanup(() => {
    if (intervalId) clearInterval(intervalId);
    if (revealTimeoutId) clearTimeout(revealTimeoutId);
  });

  return (
    <span class={props.class}>
      <For each={chars()}>
        {(char, i) => (
          <span
            style={{
              color:
                i() < revealed() ? "var(--foreground0)" : "var(--foreground2)",
              transition: "color 0.1s",
            }}
          >
            {char}
          </span>
        )}
      </For>
    </span>
  );
}
