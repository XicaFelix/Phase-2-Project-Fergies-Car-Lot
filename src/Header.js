import Sort from "./Sort";
import Search from './Search';
import Navigation from "./NavBar";
import { LoginContext } from "./Providers/LoginData";
import { useContext } from "react";
import { Container } from "react-bootstrap";

function Header({ sortTerm, setSortTerm, handleCategoryChange, search, onSearch}){
    const {user, setUser} = useContext(LoginContext);

    return (
        <Container fluid>
            <Navigation/>
            <h3 style={{display: 'flex', justifyContent:'center', color: 'whitesmoke'}}>
                Welcome {user.username}!
            </h3>
            <Sort sortTerm={sortTerm} setSortTerm={setSortTerm} handleCategoryChange={handleCategoryChange}/>
            <Search search={search} onSearch={onSearch}/>
        </Container>)
}

export default Header;