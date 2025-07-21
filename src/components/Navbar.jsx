import { Navbar, Container, Nav } from 'react-bootstrap';


function myNavbar({onClickPage}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="justify-content-center">
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link onClick={()=> onClickPage ("Home")}>Home</Nav.Link>
            <Nav.Link onClick={()=>onClickPage ("Menu")}>Menu</Nav.Link>
            <Nav.Link onClick={()=>onClickPage ("About")}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default myNavbar;

