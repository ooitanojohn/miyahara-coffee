/* eslint-disable react/jsx-key */
import { ArticleTitle } from "@/components/parts/ArticleTitle";
import { sectionList } from "@/data/pocily";

const Policy = () => {
  return (
    <div>
      <ArticleTitle title="プライバシーポリシー" />
      {sectionList.map((section) => (
        <Section title={section.title} desc={section.desc} />
      ))}
    </div>
  );
};

const Section = (props: any) => {
  return (
    <section style={{ backgroundColor: "#EBE4DE", paddingBottom: "50px" }}>
      <div
        style={{
          backgroundColor: "#FAFAF8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
        <h3
          style={{
            fontSize: "x-large",
            textAlign: "center",
            paddingBottom: "50px",
          }}
        >
          {props.title}
        </h3>
        <pre
          style={{
            paddingBottom: "50px",
          }}
        >
          {props.desc}
        </pre>
      </div>
    </section>
  );
};

export default Policy;
