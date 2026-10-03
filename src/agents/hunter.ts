import { sampleRounds } from "../fixtures/deals.js";
import type { State, Update } from "../graph/state.js";

export async function hunter(state: State): Promise<Update> {
  const round = state.round + 1;

  return {
    round,
    requirements: state.requirements ?? {
      product: state.request,
      mustHave: [],
    },
    candidates: sampleRounds[round - 1] ?? [],
  };
}
