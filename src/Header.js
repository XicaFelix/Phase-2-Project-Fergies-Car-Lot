import Search from "./Search";
import Sort from "./Sort"
import Navigation from "./NavBar";


function Header({onSearch, search, setSearch, sortTerm, setSortTerm, handleCategoryChange}){

    return (
        <div>
            <Navigation/>
            <h3>
                Welcome User!
            </h3>
            <Search onSearch={onSearch} setSearch={setSearch} search={search}/>
            <Sort sortTerm={sortTerm} setSortTerm={setSortTerm} handleCategoryChange={handleCategoryChange}/>
        </div>)
}

export default Header;