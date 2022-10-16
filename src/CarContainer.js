import CarList from "./CarList"
import { Container } from "react-bootstrap";

function CarContainer({cars}){

    return (<Container fluid>
        <CarList cars={cars}/>
        </Container>)
}

export default CarContainer;