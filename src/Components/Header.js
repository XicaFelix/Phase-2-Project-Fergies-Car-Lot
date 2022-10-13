import Search from "./Search";
import Sort from "./Sort"


function Header({onSearch, search, setSearch, sortTerm, setSortTerm, handleCategoryChange}){

    return (
        <div>
            <h3>
                Welcome User!
            </h3>
            <Search onSearch={onSearch} setSearch={setSearch} search={search}/>
            <Sort sortTerm={sortTerm} setSortTerm={setSortTerm} handleCategoryChange={handleCategoryChange}/>
        </div>)
}

export default Header;