import type { State } from "./state.js";

export const MAX_ROUNDS = 3;

export function afterSkeptic(state: State): "hunter" | "strategist" {
  const done = state.approved.length > 0 || state.round >= MAX_ROUNDS;
  return done ? "strategist" : "hunter";
}
