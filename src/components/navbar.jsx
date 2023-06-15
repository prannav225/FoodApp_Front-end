import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className='fixed-top navbar'>
      <Container>
        <Navbar.Brand href="/home"> <img src="/images/Babai Hotel Logo.png" alt=""  width="40px" style={{borderRadius:"50%"}}/>
          <img src="/images/NavLogo.png" width="200px" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-dark nav-links">
            <Nav.Link href="/home" className='px-3 links'>Home</Nav.Link>
            <Nav.Link href="/home/about" className='px-3 links'>About</Nav.Link>
            <Nav.Link href="/home/addposts" className='px-3 links'>Add Posts</Nav.Link>
            <Nav.Link href="/home/food" className='px-3 links'>Food</Nav.Link>
            <Nav.Link href="/" className='px-3 links'>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;