import Sort from "./Sort"
import Navigation from "./NavBar";
import { LoginContext } from "./Providers/LoginData";
import { useContext } from "react";


function Header({ sortTerm, setSortTerm, handleCategoryChange}){
    const {user, setUser} = useContext(LoginContext);

    return (
        <div>
            <Navigation/>
            <h3>
                Welcome {user.username}!
            </h3>
            <Sort sortTerm={sortTerm} setSortTerm={setSortTerm} handleCategoryChange={handleCategoryChange}/>
        </div>)
}

export default Header;