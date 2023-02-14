import Image from "next/image";
import { ArticleTitle } from "@/components/ArticleTitle";
import Link from "next/link";
import { Graph } from "@/components/Graph";

export default function Home() {
  return (
    <article style={{ backgroundColor: "#E8E4DE" }}>
      <ArticleTitle
        title="宮原コーヒーが独自ブレンドして作り出した味わい"
        id="#concept"
      />
      {/* concept */}
      <section
        style={{
          display: "flex",
          marginBottom: "50px",
          backgroundColor: "#F9F8F6",
        }}
      >
        <div>
          <h3>毎日飲んでも飽きのこない、真の「上質」。</h3>
          <pre>
            この銘柄は、焙煎士 土居博司が、自身が考える理想のコーヒー
            の味を具現化するために作ったものです。
            40年以上の試行錯誤のなかで、この味わいに行きつきました。
            ブラジル産銘柄をベースにコロンビア産銘柄、
            メキシコ産銘柄を加え、毎日飲んでも飽きのこないという、
            真の「上質」を大切に味作りしました。
            コーヒーのもつビターチョコレートのような甘みを重視し、
            飲みやすく、どんな料理にも合う、
            そして純粋できれいな味わいを楽しんでいただくことを
            目指してブレンドしたコーヒーです。
          </pre>
        </div>
        <Image src="" alt="コーヒーの豆の画像" width={600} height={400}></Image>
      </section>
      <section
        style={{
          display: "flex",
          paddingBottom: "20px",
          backgroundColor: "#F9F8F6",
        }}
      >
        <Image
          src=""
          alt="独自でブレンドした豆の画像"
          width={600}
          height={400}
        ></Image>
        <div>
          <h3>独自でブレンドした唯一の「」</h3>
          <pre>
            コーヒーの持つ「ビターチョコレートのような甘み」 を重視しました。
            ブラジル産銘柄をベースにコロンビア産銘柄、
            メキシコ産銘柄を加え、毎日飲んでも飽きのこない、
            すっきりとした味わいを目指して作られた「甘いブレンド」は、
            どんな料理にも合わせやすいブレンドコーヒーです。
          </pre>
        </div>
      </section>
      <section style={{ display: "flex" }}>
        <div>
          <h3>テイスティング評</h3>
          <p>
            ビターチョコレートのような甘味を重視したブレンド。
            毎日飲んでも飽きない味わいと、柔らからな口当たりです。
          </p>
        </div>
        <Graph style={{ width: "200px", height: "200px" }} />
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

      <ArticleTitle title="コーヒー豆の美味しい淹れ方" id="#drink" />
      <section>
        <h3>『美味しいコーヒー』には淹れ方にこだわりがあります。</h3>
        <p>
          東京、お茶の水で創業して長年愛されているコーヒーの味には豆の挽き方から
          実際に淹れるまで、豆のポテンシャルを最大限に活かした美味しさを追求しております。
        </p>
        <p>
          オンラインショップを通じて、店舗での味わえる美味しさを体感していただく為に、
          店舗でも行っているこだわりポイントをご紹介します。
        </p>
      </section>

      <ArticleTitle title="ご購入方法" id="#shop" />
      <div>
        <p>ご購入ページからご購入いただけます。</p>
        <p>
          宮原珈琲が独自にこだわってブレンドしたコーヒー豆を量や製法を選択してご購入いただけます。
        </p>
        <Link href="/shop">ご購入ページへ</Link>
      </div>
    </article>
  );
}

const RecipeList = [
  {
    imgUrl: "",
    title: "豆を正確に測る",
    desc: "計量スプーンで測ると豆の大きさなどで若干の誤差が出るので、スケールで測るのがおすすめ。 1杯分10g、2杯分18~20g、3杯分25～28gが目安。今回は2杯分で作ります。",
  },
  {
    imgUrl: "",
    title: "豆を挽く",
    desc: "ペーパードリップの場合は、写真の様な中挽きがおすすめです。中挽きの粒子の細かさは、グラニュー糖くらいが目安。ドリッパーでコーヒーを淹れる場合に、最も適している挽き具合で、香りがしっかりと立つのが特徴です。あまり時間をかけて豆を挽くと、豆に熱が伝わって劣化の原因になります。短時間で挽くことを心がけましょう。",
  },
  {
    imgUrl: "",
    title: "チャック部分を折る",
    desc: "細かいですが、実は重要なポイントです。フィルターのチャック部分を折ることで、ドリッパーにセットしたときにフィルターとドリッパーが密着して、まっすぐにコーヒーを落とすことができます。",
  },
  {
    imgUrl: "",
    title: "湯を準備してドリップペーパーを湯通し",
    sectionTitle: "ドリップケトルに湯を注ぐ",
    desc: "沸騰した湯を直接注ぐのはおすすめしません。　湯の温度は85～90℃がベストです。温度が高いと、苦みを強く感じるコーヒーになることがあります。沸いた湯は、一度ドリップケトルに移して温度を下げましょう。",
    sectionTitle2: "ドリップペーパーを湯通しする",
    desc2:
      "ペーパーの持つ独特な香りや味を、湯通しして洗い流しましょう。ドリップペーパーを温める役割も果たしてくれる。このとき、ペーパーをビシャビシャ濡らさないこと。",
  },
  {
    imgUrl: "",
    title: "ドリッパーに豆を淹れ、少量の湯で蒸らす",
    desc: "挽いた豆をドリッパーに移したら、ドリッパーの脇を「ポンポン」と軽くたたいて豆を平らにならす。レンジサーバー（耐熱のサーバー）にセットして、ドリップスケールの上に置きましょう。",
    desc2:
      "ドリップスケールのスタートボタンを押して、粉のまん中を目指して湯を15ccほどゆっくり注いで30秒蒸らす。蒸らすことで湯が全体にいき渡り、湯がコーヒーに浸透しやすくなります。",
  },
  {
    imgUrl: "",
    title: "ゆっくりと湯を注ぐ",
    desc: "蒸らし終わったら、湯を少しずつ注ぎます。粉がふわっと膨らむので、膨らみが少し落ち着いたところで再び湯を注ぎましょう。この流れを繰り返して、3分間で300cc～360cc位を目安に湯を注ぎましょう。",
  },
];

export const Recipe = (props: any) => {
  return (
    <section
      style={{
        display: "flex",
        height: "400px",
        padding: "50px",
        background:
          "linear-gradient(0deg, #FAFAF8 0%, #FAFAF8 70%, #E8E4DE 70%, #E8E4DE 100%)",
      }}
    >
      <div
        style={{
          padding: "20px",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image src={props.imgUrl} alt="淹れ方" width={400} height={200}></Image>
        <Image
          src="/image/arrow_bottom.png"
          alt="矢印"
          width={50}
          height={50}
          style={{ position: "relative", bottom: "-110px" }}
        ></Image>
      </div>
      <div style={{ width: "50%", padding: "20px", height: "300px" }}>
        <div
          style={{
            border: "solid 1px black",
            width: "70%",
            margin: "0 0 0 auto",
            padding: "20px",
            backgroundColor: "#EBEBEB",
          }}
        >
          <p>STEP {props.index}.</p>
          <p>{props.title}</p>
        </div>
        <pre style={{ padding: "50px 0" }}>{props.desc}</pre>
      </div>
    </section>
  );
};

export const RecipeTwo = (props: any) => {
  return (
    <section
      style={{
        display: "flex",
        height: "600px",
        padding: "50px",
        background:
          "linear-gradient(0deg, #FAFAF8 0%, #FAFAF8 70%, #E8E4DE 70%, #E8E4DE 100%)",
      }}
    >
      <div
        style={{
          padding: "20px",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image src={props.imgUrl} alt="淹れ方" width={400} height={200}></Image>
        <Image
          src="/image/arrow_bottom.png"
          alt="矢印"
          width={50}
          height={50}
          style={{ position: "relative", bottom: "-310px" }}
        ></Image>
      </div>
      <div style={{ width: "50%", padding: "20px", height: "500px" }}>
        <div
          style={{
            border: "solid 1px black",
            width: "70%",
            margin: "0 0 0 auto",
            padding: "20px",
            backgroundColor: "#EBEBEB",
          }}
        >
          <p>STEP {props.index}.</p>
          <p>{props.title}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
            gap: "20px",
          }}
        >
          <p>{props.sectionTitle}</p>
          <pre>{props.desc}</pre>
          <p>{props.sectionTitle2}</p>
          <pre>{props.desc2}</pre>
        </div>
      </div>
    </section>
  );
};
