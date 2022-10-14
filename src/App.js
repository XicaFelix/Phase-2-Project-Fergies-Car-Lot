import React, {useState, useEffect} from "react";

import Header from "./Header";
import CarContainer from "./CarContainer";
import EditCarForm from "./EditCarForm";
import { Route, Switch } from "react-router-dom";
import NewCarForm from "./NewCarForm";

function Home(){
  const [cars, setCars] = useState([]);
  const [sortTerm, setSortTerm] = useState('All');
  const [sortedCars, setSortedCars] = useState([]);
  const [search, setSearch] = useState([''])



  useEffect(()=>{
    fetch('http://localhost:3000/cars').then(resp=>resp.json()).then(data=>{setCars(data); setSortedCars(data)});
  },[])
  console.log(cars);


// Allows the user to sort the cars by make, model, price, and year
function handleCategoryChange(category){
  console.log(category); 
  const newCars = cars.sort((car1, car2)=>{
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
  setSortedCars(newCars);
  
  }
  // if(category === ''){
  //   setSortedCars(cars);
  // }if(category === 'Price'){
  //   setSortedCars(cars.sort((a,b)=>
  //     a.price - b.price
  //   ))
  // }if(category === 'Year'){
  //   setSortedCars(cars.sort((a,b)=> a.year-b.year))
  // }if(category === 'Make'){
  //   setSortedCars(cars.sort((a,b)=>{
  //     const aMake = a.make.toLowerCase();
  //     const bMake = b.make.toLowerCase();
  //     if(aMake < bMake){ return -1}
  //     if(aMake > bMake){return 1}
  //     else{return 0}
  //   }))
  // }if(category === 'Model'){
  //   setSortedCars(cars.sort((a,b)=>{
  //     const aModel = a.model.toLowerCase();
  //     const bModel = b.model.toLowerCase();
  //     if(aModel < bModel){return -1}
  //     if(aModel > bModel){return 1}
  //     else{return 0}
  //   }))
  // }

// function handleSearch(term){
//   sortedCars.filter((car)=> car.make.toLowerCase().includes(term.toLowerCase()));
// }

const displayedCars= cars.filter((car)=>{
  car.make.toLowerCase()
})

  return(
    <div>
      <Header search={search} setSearch={setSearch} sortTerm={sortTerm} setSortTerm={setSortTerm} handleCategoryChange = {handleCategoryChange}/>
      <CarContainer cars={sortedCars}/>
    </div>
  )
}

function App() {

  return (
    <div className="App">
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/edit'>
          <EditCarForm/>
        </Route>
        <Route path='/new'>
          <NewCarForm/>
        </Route>

    </div>
  );
}

export default App;
