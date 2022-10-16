import React from "react";

import Header from "./Header";
import CarContainer from "./CarContainer";
import EditCarForm from "./EditCarForm";
import { Route, Switch } from "react-router-dom";
import NewCarForm from "./NewCarForm";
import Home from "./Home";
import { EditDataProvider } from "./Providers/EditFormData";

function App() {

  return (
    <div className="App">
      <EditDataProvider>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/edit'>
          <EditCarForm/>
        </Route>
        </EditDataProvider>
      <Route path='/new'>
          <NewCarForm/>
        </Route>

    </div>
  );
}

export default App;
