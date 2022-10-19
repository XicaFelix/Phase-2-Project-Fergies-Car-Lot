
import CarCard from "./CarCard"

function CarContainer({cars, onDelete}){
    console.log('Car Container', cars)
    const listOfCars = cars.map((car)=> <CarCard key={car.id} car={car} id={car.id} onDelete = {onDelete} />)

    return (<div className="row row-cols-* row-cols-md-2 g-4}">
       {/*  Render Car Cards Here */}
        {listOfCars}
       
        </div>)
}

export default CarContainer;