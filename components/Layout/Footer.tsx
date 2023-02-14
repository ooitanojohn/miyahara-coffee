import { Nav } from "@/components/Nav";
import { Title } from "@/components/Title";
import Link from "next/link";

const help = [
  { href: "/", title: "利用規約" },
  { href: "/policy", title: "プライバシーポリシー" },
  { href: "/", title: "特定取引法に基づく表示" },
];

export const Footer = (Props: any) => {
  return (
    <footer>
      <Title />
      <Nav />
      <div>
        {help.map((link) => (
          <Link key={link.href} href={link.href}>
            <p>{link.title}</p>
          </Link>
        ))}
      </div>
    </footer>
  );
};
