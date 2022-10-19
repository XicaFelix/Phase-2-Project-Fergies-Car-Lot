import CarList from "./CarList"

function CarContainer({cars}){
    console.log('Car Container', cars)
    return (<div>
        <CarList cars={cars}/>
        </div>)
}

export default CarContainer;