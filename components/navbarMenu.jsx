import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/Link";
import { Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
const NavbarMenu = () => {
  const router = useRouter();
  const moveToHome = () => {
    router.push("/");
  };
  return (
    <div >
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="/">LAPCENTER</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link href="/productDetail" passHref>
              <Nav.Link>Product</Nav.Link>
            </Link>
          </Nav>
          <Nav className="me-auto1">
            <Icon name="cart" className="icon" />
            <Icon name="user" className="icon" />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavbarMenu;
