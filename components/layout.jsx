import Head from "next/head";
import Footer from "./footer";
import NavbarMenu from "./navbarMenu";

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>LapCenter</title>
    </Head>
    <header>
      <NavbarMenu />
    </header>
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
