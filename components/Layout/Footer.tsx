import { Nav } from "@/components/parts/Nav";
import { Title } from "@/components/parts/Title";
import Link from "next/link";

const help = [
  { href: "/", title: "利用規約" },
  { href: "/policy", title: "プライバシーポリシー" },
  { href: "/", title: "特定取引法に基づく表示" },
];

export const Footer = (Props: any) => {
  return (
    <footer style={{ padding: "50px" }}>
      <Title jusCon="center" />
      <Nav />
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap: "5px",
          paddingTop: "20px",
        }}
      >
        {help.map((link, index: number) => (
          <Link key={index} href={link.href}>
            <p
              style={{
                borderRight: `${index !== 2 ? "2px solid black" : "none"}`,
                paddingRight: "4px",
              }}
            >
              {link.title}
            </p>
          </Link>
        ))}
      </div>
    </footer>
  );
};
