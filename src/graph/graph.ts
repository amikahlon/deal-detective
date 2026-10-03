import { END, START, StateGraph } from "@langchain/langgraph";
import { hunter } from "../agents/hunter.js";
import { skeptic } from "../agents/skeptic.js";
import { strategist } from "../agents/strategist.js";
import { afterSkeptic } from "./routes.js";
import { DealState } from "./state.js";

export const graph = new StateGraph(DealState)
  .addNode("hunter", hunter)
  .addNode("skeptic", skeptic)
  .addNode("strategist", strategist)
  .addEdge(START, "hunter")
  .addEdge("hunter", "skeptic")
  .addConditionalEdges("skeptic", afterSkeptic, ["hunter", "strategist"])
  .addEdge("strategist", END)
  .compile();
