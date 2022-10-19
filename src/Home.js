import React, {useState, useEffect} from "react";

import Header from "./Header";
import CarContainer from "./CarContainer";


function Home(){
  const [cars, setCars] = useState([]);
  const [sortTerm, setSortTerm] = useState('All');
  const [sortedCars, setSortedCars] = useState([]);
  const [search, setSearch] = useState([''])
  let newCars=[];



  useEffect(()=>{
    fetch('http://localhost:3000/cars').then(resp=>resp.json()).then(data=>{setCars(data); setSortedCars(data)});
  },[])
  console.log(cars);


// Allows the user to sort the cars by make, model, price, and year
function handleCategoryChange(category){
  console.log(category); 
   newCars = cars.sort((car1, car2)=>{
      if(category.toLowerCase() === 'price'){
        return(car1.price - car2.price)
      } if (category.toLowerCase() === 'year'){
        return( car1.year-car2.year)
      } if( category.toLowerCase() === 'make'){
          if(car1.make < car2.make){
            return -1
          }if (car1.make > car2.make){
            return 1
          }else{ return 0}
      }if (category.toLowerCase() === 'model'){
        if (car1.model < car2.model) {
            return 1
        }if(car1.model > car2.model){
          return -1
        }else{
          return 0;
        }
      }
  })
  console.log('sorted cars 1', sortedCars);
  setSortedCars((sortedCars)=>newCars);
  return setSortedCars(newCars);
  
  }
  console.log('Sorted Cars 2', sortedCars);
 

  return(
    <div>
      <Header sortTerm={sortTerm} setSortTerm={setSortTerm} handleCategoryChange = {handleCategoryChange}/>
      {/* <CarContainer cars={sortedCars}/> */}
      {sortTerm === 'All'? ( <CarContainer cars= {cars}/>): (<CarContainer cars={sortedCars} key={sortedCars.id}/>) }
      
    </div>
  )
}

export default Home;
