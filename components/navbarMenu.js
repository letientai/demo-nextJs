import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/Link";

const NavbarMenu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">LAPCENTER</Navbar.Brand>
        <Nav className="me-auto">
          <Link href="/" passHref>
            <Nav.Link >Home</Nav.Link>
          </Link>
          <Link href="/about" passHref>
            <Nav.Link>About</Nav.Link>
          </Link>
          <Link href="/contact" passHref>
            <Nav.Link >Contact</Nav.Link>
          </Link>
          <Link href="/productDetail" passHref>
            <Nav.Link >Product</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavbarMenu;
