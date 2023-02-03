import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Nav";

export const Layout = ({ children: any }) => {
  return (
    <>
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};
