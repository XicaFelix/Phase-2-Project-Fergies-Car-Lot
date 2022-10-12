import { Button, Form} from "react-bootstrap";


function EditCarForm(){

    return (
        <div>
        <Form>
        <Form.Group>
            <Form.Label>Make:</Form.Label>
            <Form.Control type="text" placeholder="Enter Make"/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Model:</Form.Label>
            <Form.Control type="text" placeholder="Enter Model"/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Year:</Form.Label>
            <Form.Control type="text" placeholder="Enter Year"/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Price:</Form.Label>
            <Form.Control type="text" placeholder="Enter Price"/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Front Image:</Form.Label>
            <Form.Control type="text" placeholder="Image URL"/>
            <Form.Label>Side Image:</Form.Label>
            <Form.Control type="text" placeholder="Image URL"/>
            <Form.Label>Back Image:</Form.Label>
            <Form.Control type="text" placeholder="Image URL"/>
        </Form.Group>
        <Button>Click to Submit</Button>
        </Form>
        </div>
    )
}

export default EditCarForm;