import Link from "next/link";
import Image from "next/image";

export const Title = (props: any) => {
  return (
    <Link
      href="/"
      style={{
        display: "flex",
        justifyContent: `${props.jusCon}`,
        alignItems: "center",
        flexBasis: "60%",
      }}
    >
      <Image
        src="/image/n_1_o@2x.png"
        alt="宮原珈琲ロゴ"
        width={50}
        height={50}
      ></Image>
      <h1 style={{ lineHeight: "80px" }}>宮原珈琲</h1>
    </Link>
  );
};
