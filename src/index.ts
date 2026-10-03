import { graph } from "./graph/graph.js";

const input = {
  request: "Noise cancelling earbuds for running, up to 600 ILS",
};

const stream = await graph.stream(input, { streamMode: "updates" });

for await (const chunk of stream) {
  for (const [node, update] of Object.entries(chunk)) {
    console.log(`→ ${node}`);
    if (update?.recommendation) console.log(update.recommendation);
  }
}
