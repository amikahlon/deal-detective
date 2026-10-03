import type { CheckedDeal, Deal } from "../schemas/deal.js";
import type { State, Update } from "../graph/state.js";

const SUSPICIOUS_DISCOUNT = 0.5;

export async function skeptic(state: State): Promise<Update> {
  const checked = state.candidates.map(check);
  const approved = checked.filter((deal) => deal.flags.length === 0);

  return {
    approved,
    feedback: approved.length ? undefined : describeRejections(checked),
  };
}

function check(deal: Deal): CheckedDeal {
  const flags: string[] = [];

  if (deal.listPrice) {
    const discount = 1 - deal.price / deal.listPrice;
    if (discount > SUSPICIOUS_DISCOUNT) {
      flags.push(
        `${Math.round(discount * 100)}% off looks like an inflated list price`,
      );
    }
  }

  return { ...deal, trust: flags.length ? 30 : 80, flags };
}

function describeRejections(deals: CheckedDeal[]) {
  return deals
    .map((deal) => `${deal.store}: ${deal.flags.join(", ")}`)
    .join("\n");
}
