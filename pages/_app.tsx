import { Header } from "@/components/Layout/Header";
import { Nav } from "@/components/parts/Nav";
import { Footer } from "@/components/Layout/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Zen_Antique, M_PLUS_Rounded_1c } from "@next/font/google";

const zen_Antique = Zen_Antique({
  weight: "400",
  subsets: ["latin"],
  // display:"swap"
  // fallback: ["メイリオ", "Meiryo UI"],
});
const m_PLUS_Rounded_1c = M_PLUS_Rounded_1c({
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  // fallback: ["メイリオ", "Meiryo UI"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>宮原珈琲</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        h1,
        h2 {
          font-family: ${zen_Antique.style.fontFamily};
        }
        h3,
        a,
        p,
        pre {
          font-family: ${m_PLUS_Rounded_1c.style.fontFamily};
        }
      `}</style>
      <Header />
      <Nav backgroundColor="#DBDAD9" />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
