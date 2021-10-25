import React from 'react';
import './App.css';
import MainPage from './MainPage';
import About from './About';
import VirtualTour from './VirtualTour'
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import WeekEndPlanner from './WeekEndPlanner';
import BudgetCalculator from './BudgetCalculator';
import Ratings from './Ratings'
import Login from './Login';

function App () {
  
      return (
            <Router>
            <div className="App">
            <MainPage/>
            <Switch> 
            <Route path="/ " exact component={Home}/>  
            </Switch>
            <Switch>     
           <Route path="/About" component={About}/></Switch>
           <Switch> <Route path="/WeekEndPlanner" component={WeekEndPlanner}/>
           </Switch>    
           <Switch> <Route path="/VirtualTour" component={VirtualTour}/>
           </Switch>    
           <Switch> <Route path="/BudgetCalculator" component={BudgetCalculator}/>
           </Switch>  
           <Switch> <Route path="/Ratings" component={Ratings}/>
           </Switch>  
           <Switch> <Route path="/Login" component={Login}/>
           </Switch>  
           
           

         </div>
         </Router>
  )
}

const Home = () =>(
      <div>
            <h1>Home Page</h1>
      </div>
)
  
export default App