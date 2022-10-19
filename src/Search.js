import Form from 'react-bootstrap/Form'

function Search({onSearch, search}){
    // function handleSubmit(e){
    //     e.preventDefault();
    //     onSearch(search)
    // }

    return (
        <>
        <Form onSubmit={(e)=>{e.preventDefault(); console.log('Current Search', search)}}>
            <Form.Group controlId='searchForm'>
                <Form.Label>Search</Form.Label>
                <Form.Control type='text' placeholder='Search for a Car' onChange={(e)=>{onSearch(e.target.value); console.log(search)}}></Form.Control>
            </Form.Group>
        </Form>
        </>
    )
}

export default Search;