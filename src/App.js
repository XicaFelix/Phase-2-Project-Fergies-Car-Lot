import React from "react";

import Header from "./Header";
import CarContainer from "./CarContainer";
import EditCarForm from "./EditCarForm";
import { Route} from "react-router-dom";
import NewCarForm from "./NewCarForm";
import Home from "./Home";
import LoginPage from './LoginPage';
import { EditDataProvider } from "./Providers/EditFormData";
import { LoginProvider } from "./Providers/LoginData";

function App() {

  return (
    <div className="App" style={{backgroundColor: 'black'}}>
      <LoginProvider>
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
          <Route exact path='/'>
          <LoginPage/>
        </Route>
      </LoginProvider>  

    </div>
  );
}

export default App;
