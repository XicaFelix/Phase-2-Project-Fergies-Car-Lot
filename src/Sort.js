import { useEffect } from "react";

function Sort({ sortTerm, setSortTerm, handleCategoryChange}){

  useEffect(()=>{
    handleCategoryChange(sortTerm)
  }, [sortTerm])

    return (
    <div>
      <br/>
      <form>
        <label htmlFor="sort" style={{color: 'whitesmoke', marginRight: 7, fontSize: 18}}>Sort Cars</label>
        <select name="sort" id='sort' onChange={(e)=> setSortTerm((sortTerm)=> sortTerm=e.target.value)}>
        <option value = 'All'>All</option>
          <option value='Year'>Year</option>
          <option value='Model'>Model</option>
          <option value='Price'>Price</option>
          <option value='Make'>Make</option>
        </select>
      </form>
      <br/>
    </div>
    )
}

export default Sort;