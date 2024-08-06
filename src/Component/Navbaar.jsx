import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/Logo.png';
import '../Style/Navbaar.css';
function Navbaar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
       <img src={Logo} alt='logo' className='logo'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#home" className="nav-link-bold">About Us</Nav.Link>
            <Nav.Link href="#blogs" className="nav-link-bold">Blogs</Nav.Link>
            <Nav.Link href="#career" className="nav-link-bold">Career</Nav.Link>
            <Nav.Link href="#technology" className="nav-link-bold">Technology</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-bold">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;
