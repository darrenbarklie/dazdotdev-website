import { createSignal, onMount, onCleanup, Show } from "solid-js";

const glyphs = "!@#$%^&*()_+-=[]{}|;:',.<>?/\\`~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export default function PageTransition() {
  const [isTransitioning, setIsTransitioning] = createSignal(false);
  const [transitionText, setTransitionText] = createSignal<string[]>([]);
  const [phase, setPhase] = createSignal<"out" | "in">("out");

  let intervalId: number | undefined;

  const getRandomGlyph = () => glyphs[Math.floor(Math.random() * glyphs.length)];

  const generateRandomLines = (count: number) => {
    return Array.from({ length: count }, () =>
      Array.from({ length: 60 + Math.floor(Math.random() * 20) }, () =>
        Math.random() > 0.3 ? getRandomGlyph() : " "
      ).join("")
    );
  };

  const startScramble = (phaseType: "out" | "in") => {
    setPhase(phaseType);
    setIsTransitioning(true);

    let frame = 0;
    const maxFrames = phaseType === "out" ? 8 : 12;

    intervalId = setInterval(() => {
      frame++;

      if (phaseType === "out") {
        // Dissolving out - fewer lines as we progress
        const lineCount = Math.max(1, Math.floor(15 * (1 - frame / maxFrames)));
        setTransitionText(generateRandomLines(lineCount));
      } else {
        // Generating in - more lines as we progress, then fade
        const progress = frame / maxFrames;
        if (progress < 0.7) {
          const lineCount = Math.floor(15 * (progress / 0.7));
          setTransitionText(generateRandomLines(lineCount));
        } else {
          const lineCount = Math.max(0, Math.floor(15 * (1 - (progress - 0.7) / 0.3)));
          setTransitionText(generateRandomLines(lineCount));
        }
      }

      if (frame >= maxFrames) {
        if (intervalId) clearInterval(intervalId);
        if (phaseType === "in") {
          setIsTransitioning(false);
          setTransitionText([]);
        }
      }
    }, 40);
  };

  onMount(() => {
    // Listen for Astro page transitions
    document.addEventListener("astro:before-preparation", () => {
      startScramble("out");
    });

    document.addEventListener("astro:after-swap", () => {
      startScramble("in");
    });
  });

  onCleanup(() => {
    if (intervalId) clearInterval(intervalId);
  });

  return (
    <Show when={isTransitioning()}>
      <div
        class="fixed inset-0 z-50 pointer-events-none overflow-hidden"
        style={{
          background: phase() === "out" ? "transparent" : "var(--term-bg)",
          transition: "background 0.15s"
        }}
      >
        <div class="absolute inset-0 flex flex-col justify-center items-center font-mono text-xs leading-tight">
          {transitionText().map((line, i) => (
            <div
              class="text-term-muted whitespace-pre"
              style={{
                opacity: phase() === "out"
                  ? 1 - (i / transitionText().length) * 0.5
                  : 0.3 + (i / transitionText().length) * 0.4
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </Show>
  );
}
