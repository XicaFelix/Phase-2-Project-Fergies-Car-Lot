import { Navbar, Nav } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

function Navigation(){
   return( 
    <>
    <Navbar expand='lg' bg='dark' variant='dark' sticky='top' style={{marginBottom: 25}}>
      <IndexLinkContainer to='/home' activeClassName='selected'>
      <Navbar.Brand href="#home">Fergie's Car Dealership</Navbar.Brand>
      </IndexLinkContainer>
      <Nav fill className="justify-content-end">
        <IndexLinkContainer to='/home' activeClassName='selected'>
          <Nav.Link href='#home'>Home</Nav.Link>
        </IndexLinkContainer>
        <IndexLinkContainer to='/new' activeClassName='selected'>
          <Nav.Link href='#addCar'>Add Car</Nav.Link>
        </IndexLinkContainer>
        <IndexLinkContainer to='/' activeClassName='selected'>
          <Nav.Link href='#logout'>Logout</Nav.Link>
        </IndexLinkContainer>
      </Nav>
    </Navbar>
    </>
  )

}

export default Navigation;