import { createResource, For } from "solid-js";

interface CatFact {
  fact: string;
  length: number;
}

interface CatFactsResponse {
  data: CatFact[];
}

export default function CatFact() {
  const [catFacts] = createResource(async (): Promise<CatFactsResponse> => {
    return fetch("https://catfact.ninja/facts").then((res) => res.json());
  });

  return (
    <>
      <ul>
        <For each={catFacts()?.data}>{(item) => <li>{item.fact}</li>}</For>
      </ul>
    </>
  );
}
