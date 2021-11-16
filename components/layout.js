import Head from "next/head";
import Container from "react-bootstrap/Container";
import Footer from "./footer";
import NavbarMenu from "./navbarMenu";

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My next app</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
        rel="stylesheet"
      />
    </Head>
    
    <header>
      <NavbarMenu />
    </header>
    <Container>
      <main>{children}</main>
    </Container>
    <Footer />
  </div>
);

export default Layout;
