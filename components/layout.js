import Head from "next/head";
import Container from "react-bootstrap/Container";
import NavbarMenu from "./navbarMenu";

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My next app</title>
    </Head>

    <header>
      <NavbarMenu />
    </header>
    <Container>
      <main>{children}</main>
    </Container>
  </div>
);

export default Layout;
