import Form from 'react-bootstrap/Form'

function Search({onSearch, search, setSearch}){
    // function handleSubmit(e){
    //     e.preventDefault();
    //     onSearch(search)
    // }

    return (
        <>
        <Form>
            <Form.Group controlId='searchForm'>
                <Form.Label>Search</Form.Label>
                <Form.Control type='text' placeholder='Search for a Car' onChange={(e)=>{setSearch(e.target.value); console.log(search)}}></Form.Control>
            </Form.Group>
        </Form>
        </>
    )
}

export default Search;