import Link from "next/link";
import Image from "next/image";

export const Title = (Props: any) => {
  return (
    <Link
      href="/"
      style={{ display: "flex", width: "100%", justifyContent: "center" }}
    >
      <Image src="" alt="宮原珈琲ロゴ" width={80} height={80}></Image>
      <h1 style={{ lineHeight: "80px" }}>宮原珈琲</h1>
    </Link>
  );
};
