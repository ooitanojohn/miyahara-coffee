import { ArticleTitle } from "@/components/parts/ArticleTitle";
import { Graph } from "@/components/parts/Graph";
import Image from "next/image";

const Product = () => {
  return (
    <article>
      <ArticleTitle title="ご購入ページ" />
      <div style={{ display: "flex" }}>
        <section>
          <Image src="" alt="宮原ブレンド" width={500} height={500}></Image>
          <h3>テイスティング評</h3>
          <p>ビターチョコレートのような甘みを重視したブレンド。</p>
          <p>毎日飲んでも飽きない味わいと、柔らかな口当たりです。</p>
          <Graph />
        </section>
        <section>
          <h3>「 商品名 」</h3>
          {productList.map((product: any) => (
            <p
              key={product.index}
              style={{ borderBottom: "1px solid grey", paddingBottom: "5px" }}
            >
              {product.title}
            </p>
          ))}
        </section>
      </div>
    </article>
  );
};

const productList = [
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
  // {
  //   title: "焙煎度合いをお選びください",
  //   btnList: [
  //     {
  //       row: ["ハイロースト", "中煎り"],
  //     },
  //     {
  //       row: ["お店にお任せ", "シティロースト"],
  //     },
  //     {
  //       row: ["フルシティーロースト", "深煎り"],
  //     },
  //   ],
  // },
  // {
  //   title: "豆の状態をお選びください",
  //   btnList: [
  //     {
  //       row: ["豆のまま"],
  //     },
  //     {
  //       row: ["細挽き", "ペーパードリップ用"],
  //     },
  //     {
  //       row: ["中挽き", "コーヒーメーカー用"],
  //     },
  //     {
  //       row: ["粗挽き", "カフェプレス用"],
  //     },
  //   ],
  // },
];
const ProductList = (Props: any, children: any) => {
  return (
    <>
      <p style={{ borderBottom: "1px solid grey", paddingBottom: "5px" }}>
        {Props.title}
      </p>
      {children}
    </>
  );
};
// {
//   Props.btnList.map((btn: any, index: string) => (
//     <Link
//       key={btn.index}
//       href=""
//       style={{
//         display: "flex",
//         flexDirection: `${index}`,
//         gap: "5px",
//         justifyContent: "center",
//         border: "1px grey solid",
//         padding: "10px",
//       }}
//     >
//       <p>{btn.txt}</p>
//       <p>{btn.desc}</p>
//     </Link>
//   ));
// }

export default Product;
