import React, {useState, useEffect} from "react";

import Header from "./Header";
import CarContainer from "./CarContainer";
import EditCarForm from "./EditCarForm";
import { Route, Switch } from "react-router-dom";
import NewCarForm from "./NewCarForm";
import Home from "./Home";


function App() {
  const [formData, setFormData] = useState({
    'make' : '',
    'model': '',
    'year': '',
    'price': '',
    'frontImage': '',
    'sideImage': '',
    'backImage': '',

})
  return (
    <div className="App">
        <Route path='/home'>
          <Home onFormData={setFormData}/>
        </Route>
        <Route path='/edit'>
          <EditCarForm formData={formData} onFormData={setFormData}/>
        </Route>
        <Route path='/new'>
          <NewCarForm/>
        </Route>

    </div>
  );
}

export default App;
