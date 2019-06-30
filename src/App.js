import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Register from './Component/Register';
import WelcomeUser from './Component/WelcomeUser';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route exact path="/home" component={Home}></Route>
           <Route exact path="/reg" component={Register}></Route>
           <Route exact path="/welcome" component={WelcomeUser}></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
