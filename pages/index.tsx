import Link from "next/link";
import { ArticleTitle } from "@/components/parts/ArticleTitle";
import { Graph } from "@/components/parts/Graph";
import { Concept, Recipe, RecipeTwo } from "@/components/page/Index";
import { RecipeList, conceptList } from "@/data";

export default function Home() {
  return (
    <article style={{ backgroundColor: "#E8E4DE", paddingBottom: "100px" }}>
      <ArticleTitle
        title="宮原コーヒーが独自ブレンドして作り出した味わい。"
        id="#concept"
      />
      {/* concept */}
      <Concept
        title={conceptList[0].title}
        desc={conceptList[0].desc}
        src={conceptList[0].src}
        mb="50px"
        Direction={"row"}
      />
      <Concept
        title={conceptList[1].title}
        desc={conceptList[1].desc}
        src={conceptList[1].src}
        Direction="row-reverse"
        mb={""}
      />
      {/* Graph */}
      <section
        style={{
          display: "flex",
          height: "300px",
          justifyContent: "center",
          backgroundColor: "#EDEBE9",
          gap: "300px",
          padding: "50px",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "x-large",
              paddingBottom: "50px",
            }}
          >
            テイスティング評
          </h3>
          <pre>ビターチョコレートのような甘味を重視したブレンド。</pre>
          <pre>毎日飲んでも飽きない味わいと、柔らからな口当たりです。</pre>
        </div>
        <Graph />
      </section>
      {/* drink */}
      <ArticleTitle title="コーヒー豆の美味しい淹れ方" id="#drink" />
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#FAFAF8",
          height: "300px",
        }}
      >
        <h3
          style={{
            fontSize: "large",
            paddingBottom: "40px",
            marginTop: "40px",
          }}
        >
          『美味しいコーヒー』には淹れ方にこだわりがあります。
        </h3>
        <pre style={{ width: "38rem", paddingBottom: "20px" }}>
          東京、お茶の水で創業して長年愛されているコーヒーの味には豆の挽き方から
          実際に淹れるまで、豆のポテンシャルを最大限に活かした美味しさを追求しております。
        </pre>
        <pre>
          オンラインショップを通じて、店舗での味わえる美味しさを体感していただく為に、
        </pre>
        <pre>店舗でも行っているこだわりポイントをご紹介します。</pre>
      </section>
      {/* recipe */}
      {RecipeList.map((item, index: number) =>
        index === 3 || index === 4 ? (
          <RecipeTwo
            key={index}
            imgUrl={item.imgUrl}
            index={index + 1}
            title={item.title}
            sectionTitle={item.sectionTitle}
            desc={item.desc}
            sectionTitle2={item.sectionTitle2}
            desc2={item.desc2}
          />
        ) : (
          <Recipe
            key={index}
            imgUrl={item.imgUrl}
            index={index + 1}
            title={item.title}
            desc={item.desc}
          />
        )
      )}
      <Concept
        title="カップにコーヒーを注いで完成"
        desc="コーヒーを淹れるのにかかった時間は15時20分。\n 普段よりもちょっと丁寧に淹れたコーヒーで心豊かなひとときを過ごしてみてはいかがでしょうか。"
        src="/image/n_14@2x.png"
        mb={""}
        Direction={""}
      />
      {/* shop */}
      <ArticleTitle title="ご購入方法" id="#shop" />
      <section
        style={{
          backgroundColor: "#FAFAF8",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <h3
          style={{
            fontSize: "large",
            paddingTop: "50px",
          }}
        >
          ご購入ページからご購入いただけます。
        </h3>
        <p>
          宮原珈琲が独自にこだわってブレンドしたコーヒー豆を量や製法を選択してご購入いただけます。
        </p>
        <Link
          href="/product"
          style={{ padding: "20px 40px", border: "1px grey solid" }}
        >
          ご購入ページへ
        </Link>
      </section>
    </article>
  );
}
