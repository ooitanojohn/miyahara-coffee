type productList = {
  title: string;
  btnList: [];
};

type btnList = {
  column: [];
};
export const productList = [
  {
    title: "量をお選びください",
    btnList: [
      {
        column: ["100g", "￥1080"],
      },
      {
        column: ["200g", "￥2080"],
      },
      {
        column: ["定期便100g", "￥980 / 月"],
      },
      {
        column: ["定期便200g", "￥1980 / 月"],
      },
    ],
  },
  {
    title: "焙煎度合いをお選びください",
    btnList: [
      {
        row: ["ハイロースト", "中煎り"],
      },
      {
        row: ["お店にお任せ", "シティロースト"],
      },
      {
        row: ["フルシティーロースト", "深煎り"],
      },
    ],
  },
  {
    title: "豆の状態をお選びください",
    btnList: [
      {
        row: ["豆のまま"],
      },
      {
        row: ["細挽き", "ペーパードリップ用"],
      },
      {
        row: ["中挽き", "コーヒーメーカー用"],
      },
      {
        row: ["粗挽き", "カフェプレス用"],
      },
    ],
  },
];

// export const btnList = [
//   {
//     one: ["100g", "￥1080"],
//     two: ["200g", "￥2080"],
//     three: ["定期便100g", "￥980 / 月"],
//     four: ["定期便200g", "￥1980 / 月"],
//   },
// ];
