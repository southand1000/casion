export const dashboardData = {
  stats: {
    revenue30: 18500,
    orders30: 12,
    delivered30: 8,
  },

  status: {
    consult: 3,
    proposal: 2,
    working: 6,
    delivered: 8,
  },

  deadlines: [
    {
      id: 1,
      title: "KING",
      client: "〇〇様",
      dueIn: -2,
    },
    {
      id: 2,
      title: "青と夏",
      client: "△△様",
      dueIn: 0,
    },
    {
      id: 3,
      title: "少女レイ",
      client: "□□様",
      dueIn: 1,
    },
    {
      id: 4,
      title: "花に亡霊",
      client: "☆☆様",
      dueIn: 5,
    },
  ],

  gantt: [
    {
      id: 1,
      title: "KING",
      start: 0,
      end: 35,
      status: "working" as const,
    },
    {
      id: 2,
      title: "少女レイ",
      start: 20,
      end: 65,
      status: "proposal" as const,
    },
    {
      id: 3,
      title: "青と夏",
      start: 60,
      end: 95,
      status: "consult" as const,
    },
  ],
};