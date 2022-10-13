import { Nav, Navbar} from "react-bootstrap";

function Navigation(){
   return( 
   <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/home">Home</a>
                </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <Nav.Item>
                Add New Car
            </Nav.Item>
        </Nav>
    </Navbar>)

}

export default Navigation;