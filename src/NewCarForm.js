import { Button, Form} from "react-bootstrap";
import { useEffect, useState } from "react";


function NewCarForm(){
    const [newCar, setNewCar]=useState({
        make : 's',
        model: '',
        year: '',
        price: '',
        frontImage: ' ',
        sideImage: '',
        backImage: '',
         })
         
    function handleChange(e){
        const name = e.target.name;
        let value = e.target.value;
        setNewCar({...newCar, 
        [name]: value,
         })
         console.log(newCar)}

         function handleSubmit(event){
            event.preventDefault();
            console.log(newCar);
            fetch('http://localhost:3000/cars',{
                method:'POST',
                headers:{'Content-Type': 'application/json',},
                body: JSON.stringify(newCar),
                }).then(resp=> resp.json).then(data=>console.log(data))
                }

        
    return(
        <div>
        <Form onSubmit={handleSubmit}>
        <Form.Group onChange={handleChange}  value={newCar.make}>
            <Form.Label>Make:</Form.Label>
            <Form.Control name="make" type="text" placeholder="Enter Make" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Model:</Form.Label>
            <Form.Control name='model' type="text" placeholder="Enter Model" onChange={handleChange} value={newCar.model}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Year:</Form.Label>
            <Form.Control name='year' type="text" placeholder="Enter Year" onChange={handleChange} value={newCar.year}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Price:</Form.Label>
            <Form.Control name='price' type="text" placeholder="Enter Price" onChange={handleChange} value={newCar.price}/>
        </Form.Group>
        <Form.Group onChange={handleChange}>
            <Form.Label>Front Image:</Form.Label>
            <Form.Control  name='frontImage' type="text" placeholder="Image URL" onChange={handleChange} value={newCar.frontImage}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Side Image:</Form.Label>
            <Form.Control  name='sideImage' type="text" placeholder="Image URL" onChange={handleChange}  value={newCar.sideImage}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Back Image:</Form.Label>
            <Form.Control  name='backImage' type="text" placeholder="Image URL"onChange={handleChange} value={newCar.backImage}/>
        </Form.Group>
        <Button type="submit">Click to Submit</Button>
        </Form>
        </div>
    )
}

export default NewCarForm;