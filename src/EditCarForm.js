import { Button, Form} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { EditDataContext } from "./Providers/EditFormData";

function EditCarForm({}){
    const {formData, setFormData, editKey, setEditKey} = useContext(EditDataContext);

    const history = useHistory();


    function handleChange(event){
        const name = event.target.name;
        let value= event.target.value;
        setFormData({...formData,
            [name]: value,
        })
        console.log(formData)
        console.log(editKey)
    }

    function handleSubmit(event){
        event.preventDefault();
        fetch(`http://localhost:3000/cars/${editKey}`,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(formData),
    }).then(resp=> resp.json).then(data=>{
        console.log(data); 
        history.push('/home') })
    }


    return (
        <div>
        <div>
            
        </div>
        <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Make:</Form.Label>
            <Form.Control name = 'make' type="text" placeholder="Enter Make" onChange={handleChange} value={formData.make}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Model:</Form.Label>
            <Form.Control name='model' type="text" placeholder="Enter Model" onChange={handleChange} value={formData.model}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Year:</Form.Label>
            <Form.Control name='year' type="text" placeholder="Enter Year" onChange={handleChange} value={formData.year}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Price:</Form.Label>
            <Form.Control name='price' type="text" placeholder="Enter Price" onChange={handleChange} value={formData.price}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Front Image:</Form.Label>
            <Form.Control name='front' type="text" placeholder="Image URL" onChange={handleChange} value={formData.front}/>
            <Form.Label>Side Image:</Form.Label>
            <Form.Control name='side' type="text" placeholder="Image URL" onChange={handleChange} value={formData.side}/>
            <Form.Label>Back Image:</Form.Label>
            <Form.Control name='back' type="text" placeholder="Image URL" onChange={handleChange} value={formData.back}/>
        </Form.Group>
        <Button type="submit">Click to Submit</Button>
        </Form>
        </div>
    )
}

export default EditCarForm;