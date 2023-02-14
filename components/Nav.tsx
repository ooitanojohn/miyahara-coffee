/* eslint-disable react/jsx-key */
import Link from "next/link";
const nav = [
  { href: "concept", title: "豆の魅力" },
  { href: "drink", title: "美味しい淹れ方" },
  { href: "product", title: "商品" },
  { href: "shop", title: "ご購入方法" },
  { href: "help", title: "お問い合わせ" },
];
export const Nav = (props: any) => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        backgroundColor: `${props.backgroundColor}`,
        height: "50px",
      }}
    >
      {nav.map((link, index: number) =>
        index == 3 ? (
          <Link key={index} href={"/" + link.href}>
            <p>{link.title}</p>
          </Link>
        ) : (
          <a key={index} href={"#" + link.href}>
            {link.title}
          </a>
        )
      )}
    </nav>
  );
};
