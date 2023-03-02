import Image from "next/image";

type ConceptProps = {
  id: string;
  mb: string;
  Direction: string;
  title: string;
  desc: string;
  src: string;
};

export const Concept = (props: ConceptProps) => {
  return (
    <section
      id={props.id}
      style={{
        display: "flex",
        marginBottom: `${props.mb}`,
        backgroundColor: "#F9F8F6",
        flexDirection: `${props.Direction}` as "row",
      }}
    >
      <div style={{ flexBasis: "45%", padding: "40px" }}>
        <h3
          style={{
            fontSize: "x-large",
            textAlign: "center",
            paddingBottom: "50px",
          }}
        >
          {props.title}
        </h3>
        <pre style={{}}>{props.desc}</pre>
      </div>
      <Image
        style={{ flexBasis: "55%", objectFit: "cover" }}
        src={props.src}
        alt="コーヒーの豆の画像"
        width={600}
        height={400}
      ></Image>
    </section>
  );
};
type RecipeProps = {
  imgUrl: string;
  index: string | number;
  title: string;
  desc: string;
};
export const Recipe = (props: RecipeProps) => {
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
        <Image
          style={{ objectFit: "cover" }}
          src={props.imgUrl}
          alt="淹れ方"
          width={400}
          height={400}
        ></Image>
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
        <Image src={props.imgUrl} alt="淹れ方" width={400} height={400}></Image>
        <Image
          src="/image/arrow_bottom.png"
          alt="矢印"
          width={50}
          height={50}
          style={{ position: "relative", bottom: "-110px" }}
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
