import { StateSchema } from "@langchain/langgraph";
import { z } from "zod";
import {
  CheckedDeal,
  Deal,
  Recommendation,
  Requirements,
} from "../schemas/deal.js";

export const DealState = new StateSchema({
  request: z.string(),
  requirements: Requirements.optional(),
  candidates: z.array(Deal).default(() => []),
  approved: z.array(CheckedDeal).default(() => []),
  feedback: z.string().optional(),
  round: z.number().default(0),
  recommendation: Recommendation.optional(),
});

export type State = typeof DealState.State;
export type Update = typeof DealState.Update;
