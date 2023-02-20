/* eslint-disable react/jsx-key */
import Link from "next/link";
const nav = [
  { href: "", title: "豆の魅力" },
  { href: "", title: "美味しい淹れ方" },
  { href: "product", title: "商品" },
  { href: "product", title: "ご購入方法" },
  { href: "", title: "お問い合わせ" },
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
      <style jsx>
        {`
          #nav:hover {
            border-bottom: 1px solid red;
          }
        `}
      </style>
      {nav.map((link, index: number) => (
        <Link
          id="nav"
          key={index}
          href={
            `${index === 0 || index === 1 || index === 3 ? "/" : "/"}` +
            link.href
          }
        >
          <p>{link.title}</p>
        </Link>
      ))}
    </nav>
  );
};
