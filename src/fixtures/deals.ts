import type { Deal } from "../schemas/deal.ts";

export const sampleRounds: Deal[][] = [
  [
    {
      title: "Sony WF-1000XM5",
      store: "MegaDeals",
      url: "https://example.com/1",
      price: 499,
      listPrice: 1299,
    },
    {
      title: "Jabra Elite 8 Active",
      store: "FlashShop",
      url: "https://example.com/2",
      price: 349,
      listPrice: 999,
    },
  ],
  [
    {
      title: "Jabra Elite 8 Active",
      store: "TechStore",
      url: "https://example.com/3",
      price: 579,
      listPrice: 699,
    },
  ],
];
