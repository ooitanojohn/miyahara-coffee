import Link from "next/link";
import { Title } from "@/components/parts/Title";
import Image from "next/image";

export const Header = (Props: any) => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F9F8F6",
        width: "100%",
      }}
    >
      <Title jusCon="end" />
      <Link href="/" style={{ flexBasis: "38%", textAlign: "end" }}>
        ログイン・登録
      </Link>
      <Link
        href="/"
        style={{
          flexBasis: "12%",
          textAlign: "center",
        }}
      >
        <Image
          style={{
            padding: "10px",
            borderRadius: "50%",
            backgroundColor: "#DCDCDB",
          }}
          src="/image/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg"
          alt="カート"
          width={40}
          height={40}
        ></Image>
      </Link>
    </header>
  );
};
