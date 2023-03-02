import styles from "./product.module.css";
import { ArticleTitle } from "@/components/parts/ArticleTitle";
import { Graph } from "@/components/parts/Graph";
import Image from "next/image";
import { productList } from "@/data/product";
import { Concept } from "@/components/page/Index";

const Product = () => {
  return (
    <article style={{ backgroundColor: "#E8E4DE" }}>
      <ArticleTitle title="ご購入ページ" />
      {/* 注文 */}
      <div style={{ display: "flex" }}>
        {/* 画像、グラフ */}
        <section style={{ width: "50%" }}>
          <Image
            src="/image/n_2_t@2x.png"
            alt="宮原ブレンド"
            width={500}
            height={300}
            style={{ width: "100%", objectFit: "cover" }}
          ></Image>
          <div
            style={{
              padding: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#EDEBE9",
              height: "400px",
            }}
          >
            <h3
              style={{
                fontSize: "x-large",
                textAlign: "center",
                paddingBottom: "50px",
              }}
            >
              テイスティング評
            </h3>
            <p>ビターチョコレートのような甘みを重視したブレンド。</p>
            <p>毎日飲んでも飽きない味わいと、柔らかな口当たりです。</p>
            <div style={{ height: "300px" }}>
              <Graph />
            </div>
          </div>
        </section>
        <section
          style={{ padding: "50px", width: "50%", backgroundColor: "#FAFAF8" }}
        >
          <h3
            style={{
              fontSize: "x-large",
              textAlign: "center",
              width: "100%",
              paddingBottom: "50px",
            }}
          >
            「 商品名 」
          </h3>
          {productList.map((product: any, index) => (
            <ProductList key={index} title={product.title}>
              <BtnList key={index} props={product} />
            </ProductList>
          ))}
        </section>
      </div>
      {/* ボタン */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
          backgroundColor: "#FAFAF8",
          marginBottom: "100px",
        }}
      >
        <p
          style={{
            fontSize: "x-large",
            marginRight: "50px",
          }}
        >
          注文数量
        </p>
        <form
          action="/"
          style={{ height: "100px", display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              borderRight: "1px solid black",
              height: "50px",
              marginRight: "50px",
              textAlign: "center",
              fontSize: "x-large",
              lineHeight: "50px",
            }}
          >
            <input
              type="number"
              placeholder="1個"
              style={{
                width: "200px",
                border: "1px solid black",
                marginRight: "50px",
              }}
            ></input>
          </div>
          <button
            type="submit"
            style={{
              border: "1px solid black",
              height: "50px",
              width: "200px",
              textAlign: "center",
            }}
          >
            注文する
          </button>
        </form>
      </div>
      {/* 定期便 */}
      <Concept
        id=""
        title="定期便のご案内"
        desc="定期便でご注文することで、毎月の購入の手間なく
宮原珈琲を楽しめます。
通常商品よりもご優待価格でご注文のお手間なく、
定期的にお届けいたします。
お届け間隔は、毎月、2ヵ月毎、3ヵ月毎からお選びいただけます。"
        src="/image/n_2.png"
        mb={"50px"}
        Direction={""}
      />
      <div style={{ height: "50px" }}></div>
    </article>
  );
};

const ProductList = (props: any, children: any) => {
  return (
    <>
      <p
        style={{
          borderBottom: "1px solid grey",
          paddingBottom: "10px",
          marginBottom: "30px",
        }}
      >
        {props.title}
      </p>
      {props.children}
    </>
  );
};

const BtnList = ({ props }: any) => {
  return (
    <div
      className={styles.toggleWrapper}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        paddingBottom: "50px",
      }}
    >
      <button
        className={styles.toggleButton}
        style={{
          textAlign: "center",
          width: "calc(50% - 20px)",
          border: "1px grey solid",
          padding: "10px 20px",
          backgroundColor: "white",
        }}
      >
        {props.btnList1}
      </button>
      <button
        className={styles.toggleButton}
        style={{
          textAlign: "center",
          width: "calc(50% - 20px)",
          border: "1px grey solid",
          padding: "10px 20px",
          backgroundColor: "white",
        }}
      >
        {props.btnList2}
      </button>
      <button
        className={styles.toggleButton}
        style={{
          textAlign: "center",
          width: "calc(50% - 20px)",
          border: "1px grey solid",
          padding: "10px 20px",
          backgroundColor: "white",
        }}
      >
        {props.btnList3}
      </button>
      {props.btnList4 !== undefined ? (
        <button
          className={styles.toggleButton}
          style={{
            textAlign: "center",
            width: "calc(50% - 20px)",
            border: "1px grey solid",
            padding: "10px 20px",
            backgroundColor: "white",
          }}
        >
          {props.btnList4}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Product;
