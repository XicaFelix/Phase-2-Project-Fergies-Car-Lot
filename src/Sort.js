function Sort({ sortTerm, setSortTerm, handleCategoryChange}){
  function onCategoryChange(e){
    setSortTerm(e.target.value)
    handleCategoryChange(sortTerm);
  }

    return (
    <div>
      <br/>
      <form>
        <label htmlFor="sort">Sort Cars</label>
        <select name="sort" id='sort' onChange={onCategoryChange} value={sortTerm}>
          <option value='Make'>Make</option>
          <option value='Model'>Model</option>
          <option value='Price'>Price</option>
          <option value='Year'>Year</option>
        </select>
      </form>
      <br/>
    </div>
    )
}

export default Sort;