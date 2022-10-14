import { Button, Form} from "react-bootstrap";
import { useState } from "react";


function EditCarForm(){
const [formData, setFormData] = useState({
    'make' : '',
    'model': '',
    'year': '',
    'price': '',
    'frontImage': '',
    'sideImage': '',
    'backImage': '',

})
    return (
        <div>
        <div>
            
        </div>
        <Form>
        <Form.Group onChange={(e)=> console.log(e.target.value)}>
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
        <Button type="submit" onSubmit={(e)=> {e.preventDefault();console.log(e.target.value)}}>Click to Submit</Button>
        </Form>
        </div>
    )
}

export default EditCarForm;