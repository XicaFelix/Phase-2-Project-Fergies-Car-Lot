import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import { EditDataContext } from './Providers/EditFormData';

function CarCard({car}){
    const {front, side, back, make,model,price, year, id} = car;

    const history = useHistory();

    const {formData, setFormData, editKey, setEditKey} = useContext(EditDataContext);

    let thousands = '';
    let hundreds = '';

    function getDollars(price){
        if(price.toString().length === 5){
            thousands = price.toString().slice(0,2);
            hundreds = price.toString().slice(2);
            console.log(thousands, hundreds)
            return (thousands, hundreds);
        }else{
            thousands = price.toString().slice(0,3);
            hundreds = price.toString().slice(3);
            console.log(thousands, hundreds)
            return (thousands, hundreds);
        }
    }

    getDollars(price);


    // Set the Text to Appear When the Button is Hovered Over
    const[hoverText, setHoverText] = useState(false);

    function handleClick(){
        setEditKey(id);
        const editData = {...formData, 
            'make': make,
            'model': model,
            'year': year,
            'price': price,
            'front': front,
           'side': side,
            'back': back,
        }
        setFormData(editData);
        console.log(editKey);
    history.push('/edit')
    }

    return(
        <div className='col'>
        <Card bg='dark' text='light' border='light' style={{marginBottom: 10}}>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={front}
                    alt="First slide"
                    />
                <Carousel.Caption>
                    <p>{make} {model} Front</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={side}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>{make} {model} Side</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={back}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>{make} {model} Back</p>
                    </Carousel.Caption>
                </Carousel.Item>
         </Carousel>
            <Card.Body>
                
                <Button variant='outline-secondary' size='lg'style={{marginBottom: 5}} onClick={handleClick} onMouseEnter={()=> setHoverText(true)} onMouseLeave={()=> setHoverText(false)}> 
                   {hoverText? <Card.Title> Edit Car</Card.Title>: <Card.Title> {make} {model}</Card.Title> }
                </Button>
                <Card.Text> <span style={{fontStyle: 'italic'}}> Make: </span>{make}</Card.Text>
                <Card.Text> <span style={{fontStyle: 'italic'}} >Model: </span>{model}</Card.Text>
                <Card.Text> <span style={{fontStyle: 'italic'}} > Year:</span> {year}</Card.Text>
                <span>
                   <span style={{fontStyle: 'italic'}} > Price: </span>${`${thousands},${hundreds}  `}  
                    <i className="bi bi-tag"></i>
                </span>
            </Card.Body>
        </Card>
        </div>
    )
}

export default CarCard;