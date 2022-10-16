import Sort from "./Sort"
import Navigation from "./NavBar";
import { LoginContext } from "./Providers/LoginData";
import { useContext } from "react";
import { Container } from "react-bootstrap";

function Header({ sortTerm, setSortTerm, handleCategoryChange}){
    const {user, setUser} = useContext(LoginContext);

    return (
        <Container fluid>
            <Navigation/>
            <h3 style={{display: 'flex', justifyContent:'center'}}>
                Welcome {user.username}!
            </h3>
            <Sort sortTerm={sortTerm} setSortTerm={setSortTerm} handleCategoryChange={handleCategoryChange}/>
        </Container>)
}

export default Header;