import { Navbar, Nav } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

function Navigation(){
   return( 
    <>
    <Navbar expand='lg'>
      <IndexLinkContainer to='/home' activeClassName='selected'>
      <Navbar.Brand href="#home">Fergie's Car Dealership</Navbar.Brand>
      </IndexLinkContainer>
      <Nav>
        <IndexLinkContainer to='/home' activeClassName='selected'>
          <Nav.Link href='#home'>Home</Nav.Link>
        </IndexLinkContainer>
        <IndexLinkContainer to='/new' activeClassName='selected'>
          <Nav.Link href='#addCar'>Add Car</Nav.Link>
        </IndexLinkContainer>
      </Nav>
    </Navbar>
    </>
  )

}

export default Navigation;