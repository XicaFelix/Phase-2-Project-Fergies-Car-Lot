function Sort({ sortTerm, setSortTerm, handleCategoryChange}){
  function onCategoryChange(e){
    setSortTerm((sortTerm)=> sortTerm = e.target.value)
    
    handleCategoryChange(sortTerm);
  }

    return (
    <div>
      <br/>
      <form>
        <label htmlFor="sort" style={{color: 'whitesmoke', marginRight: 7, fontSize: 18}}>Sort Cars</label>
        <select name="sort" id='sort' onChange={onCategoryChange}>
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