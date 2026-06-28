import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    clientId: 1,

    title: "KING",

    referenceUrl: "",

    status: "working",

    orderDate: "2026-07-01",
    deliveryDate: "2026-07-10",

    price: 2000,
    income: 1700,

    tags: ["ボカロ", "フルコーラス"],

    memo: "",

    works: {
      pitch: true,
      timing: true,
      noise: true,
      harmony: false,
      space: true,
    },

    createdAt: "2026-07-01",
    updatedAt: "2026-07-03",
  },

  {
    id: 2,
    clientId: 2,

    title: "青と夏",

    referenceUrl: "",

    status: "proposal",

    orderDate: "2026-07-02",
    deliveryDate: "2026-07-12",

    price: 1500,
    income: 1200,

    tags: ["ワンコーラス"],

    memo: "",

    works: {
      pitch: true,
      timing: true,
      noise: false,
      harmony: false,
      space: true,
    },

    createdAt: "2026-07-02",
    updatedAt: "2026-07-04",
  },

  {
    id: 3,
    clientId: 3,

    title: "少女レイ",

    referenceUrl: "",

    status: "consult",

    orderDate: "2026-07-03",
    deliveryDate: "",

    price: 3000,
    income: 0,

    tags: ["デュエット"],

    memo: "",

    works: {
      pitch: false,
      timing: false,
      noise: false,
      harmony: false,
      space: false,
    },

    createdAt: "2026-07-03",
    updatedAt: "2026-07-03",
  },
];