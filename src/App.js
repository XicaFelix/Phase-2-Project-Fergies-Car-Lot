import React, {useState, useEffect} from "react";

import Header from "./Header";
import CarContainer from "./CarContainer";
import EditCarForm from "./EditCarForm";
import { Route } from "react-router-dom";
import NewCarForm from "./NewCarForm";

function Home(){
  const [cars, setCars] = useState([]);
  const [sortTerm, setSortTerm] = useState('');
  const [sortedCars, setSortedCars] = useState([]);
  const [search, setSearch] = useState([''])



  useEffect(()=>{
    fetch('http://localhost:3000/cars').then(resp=>resp.json()).then(data=>{setCars(data); setSortedCars(data)});
  },[])
  console.log(cars);


// Allows the user to sort the cars by make, model, price, and year
function handleCategoryChange(category){
  console.log(category);
  if(category === ''){
    setSortedCars(cars);
  }if(category === 'Price'){
    setSortedCars(cars.sort((a,b)=>
      a.price - b.price
    ))
  }if(category === 'Year'){
    setSortedCars(cars.sort((a,b)=> a.year-b.year))
  }if(category === 'Make'){
    setSortedCars(cars.sort((a,b)=>{
      const aMake = a.make.toLowerCase();
      const bMake = b.make.toLowerCase();
      if(aMake < bMake){ return -1}
      if(aMake > bMake){return 1}
      else{return 0}
    }))
  }if(category === 'Model'){
    setSortedCars(cars.sort((a,b)=>{
      const aModel = a.model.toLowerCase();
      const bModel = b.model.toLowerCase();
      if(aModel < bModel){return -1}
      if(aModel > bModel){return 1}
      else{return 0}
    }))
  }
}

function handleSearch(term){
  sortedCars.filter((car)=> car.make.toLowerCase().includes(term.toLowerCase()));
}

  return(
    <div>
      <Header search={search} onSearch={handleSearch} setSearch={setSearch} sortTerm={sortTerm} setSortTerm={setSortTerm} handleCategoryChange = {handleCategoryChange}/>
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
