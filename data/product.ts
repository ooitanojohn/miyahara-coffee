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
    btnList1: "100g ￥1080",
    btnList2: "200g ￥2080",
    btnList3: "定期便100g ￥980 / 月",
    btnList4: "定期便200g ￥1980 / 月",
  },
  {
    title: "焙煎度合いをお選びください",
    btnList1: "ハイロースト\n 中煎り",
    btnList2: "お店にお任せ\n シティロースト",
    btnList3: "フルシティーロースト\n 深煎り",
  },
  {
    title: "豆の状態をお選びください",
    btnList1: "豆のまま",
    btnList2: "細挽き\n ペーパードリップ用",
    btnList3: "中挽き\n コーヒーメーカー用",
    btnList4: "粗挽き\n カフェプレス用",
  },
];
