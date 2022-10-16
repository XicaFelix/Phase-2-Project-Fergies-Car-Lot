import CarCard from "./CarCard"


function CarList({cars}){
        const listOfCars = cars.map((car)=> <CarCard key={car.id} car={car} id={car.id} />)

    return (<div className="row row-cols-* row-cols-md-2 g-4}">
       {/*  Render Car Cards Here */}
        {listOfCars}
       
        </div>)
}

export default CarList;