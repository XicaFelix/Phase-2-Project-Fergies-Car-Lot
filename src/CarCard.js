import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

function CarCard({car}){
    const {apr, front, side, back, make,model,price, year} = car;
    // Set the Text to Appear When the Button is Hovered Over
    const[hoverText, setHoverText] = useState(false)
    return(
        <div className='col'>
        <Card>
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
                
                <Button variant='outline-secondary' size='lg' onMouseEnter={()=> setHoverText(true)} onMouseLeave={()=> setHoverText(false)}> 
                   {hoverText? <Card.Title> Edit Car</Card.Title>: <Card.Title> {make} {model}</Card.Title> }
                </Button>
                <Card.Text> Make: {make}</Card.Text>
                <Card.Text> Model: {model}</Card.Text>
                <Card.Text> Year: {year}</Card.Text>
                <span>
                    Price: {price}  
                    <i className="bi bi-tag"></i>
                </span>
            </Card.Body>
        </Card>
        </div>
    )
}

export default CarCard;