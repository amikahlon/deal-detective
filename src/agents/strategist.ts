import type { State, Update } from "../graph/state.js";

export async function strategist(state: State): Promise<Update> {
  const [best] = [...state.approved].sort((a, b) => a.price - b.price);

  if (!best) {
    return {
      recommendation: { action: "skip", reason: "No trustworthy deals found." },
    };
  }

  return {
    recommendation: {
      action: "buy",
      deal: best,
      reason: `Lowest verified price, at ${best.store}.`,
    },
  };
}
