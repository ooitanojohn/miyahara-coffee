import Link from "next/link";
import { Title } from "@/components/Title";

export const Header = (Props: any) => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F9F8F6",
      }}
    >
      <Title />
      <Link href="/">ログイン・登録</Link>
      <Link href="/">カート</Link>
    </header>
  );
};
