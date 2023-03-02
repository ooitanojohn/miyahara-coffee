import Link from "next/link";
const nav = [
  { href: "#concept", title: "豆の魅力" },
  { href: "#drink", title: "美味しい淹れ方" },
  { href: "/product", title: "商品" },
  { href: "#shop", title: "ご購入方法" },
  { href: "/help", title: "お問い合わせ" },
];
// const url =

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
            cursor: pointer;
          }
        `}
      </style>
      {nav.map((link, index: number) =>
        index === 0 || index === 1 || index === 3 ? (
          <a href={link.href} id="nav" key={index}>
            <p>{link.title}</p>
          </a>
        ) : (
          <Link id="nav" key={index} href={link.href}>
            <p>{link.title}</p>
          </Link>
        )
      )}
    </nav>
  );
};
