import { Container, Navbar } from "react-bootstrap";

function Header(){

    return(
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Entrada de productos</Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default Header;