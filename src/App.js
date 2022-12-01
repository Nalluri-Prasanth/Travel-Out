import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import About from './pages/About';
import VirtualTour from './pages/VirtualTour'
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import WeekEndPlanner from './pages/WeekEndPlanner';
import Ratings from './pages/Ratings'
import Card from './pages/Card'
// import Login from './Login';
import Recommendation from './components/Recommendation'
// import BookingGrid from './components/BookingGrid';
import LandingPage from './components/LandingPage'
// import Booking from './pages/Booking';
import BudgetCalculator from './pages/BudgetCalculator'
import Footer from './components/Footer';
import NavDope from './components/NavDope';
import ScrollToTop from './components/ScrollToTop';
// import NavBar from './components/Navbar';
// import { LogInPage } from './pages/LogInPage';
// import {SignUpPage} from './pages/SignUpPage';
// import {PrivateRoute} from './auth/PrivateRoute';
import LogInPage from './pages/LogInPage';
import RegisterPage from './pages/RegisterPage';
import Payment from './pages/Payment'
import Bookingdope from './pages/Bookingdope';
import HelperMaps from './pages/HelperMaps'
// import SearchingMaps from './pages/SearchingMaps';








function App () {
  
      return (
            <div>
              
            <Router>
            <div className="App">
            <NavDope/>
            {/* <BookingGrid/> */}
            {/* <NavBar/> */}
            <Switch>     
           <Route path="/About" component={About}/></Switch>
           <Switch> <Route path="/WeekEndPlanner" component={WeekEndPlanner}/>
           </Switch>    
           <Switch> <Route path="/VirtualTour" component={VirtualTour}/>
           </Switch>    
           {/* <Switch> <Route path="/BudgetCalculator" component={BudgetCalculator}/>
           </Switch>   */}
           <Switch> <Route path="/Ratings" component={Ratings}/>
           </Switch>  
           {/* <Switch> <Route path="/Booking" component={Booking}/>
           </Switch>  */}
           {/* <Switch> <Route path="/Login" component={Login}/>
           </Switch>   */}
            <Switch> <Route path="/Bookingdope" component={Bookingdope}/>
           </Switch> 
           <Switch> <Route path="/HelperMaps" component={HelperMaps}/>
           </Switch> 

           <Switch> <Route path="/Card" component={Card}/>
           </Switch> 
           <Switch> <Route path="/login" component={LogInPage}/>
           </Switch>  
           <Switch> <Route path="/register" component={RegisterPage}/>
           </Switch> 
           <Switch> <Route path="/Payment" component={Payment}/>
           </Switch> 
           {/* <Switch> <Route path="/Searchingmaps" component={SearchingMaps}/>
           </Switch>  */}
        

           
           {/* <Switch> <PrivateRoute path="/loginpage" component={LogInPage}/>
           </Switch> 
           <Switch> <Route path="/signup" component={SignUpPage}/>
           </Switch>  */}

            <LandingPage/>
            <Recommendation/>
            <ScrollToTop/>
          
           
           <Footer/>
           

         </div>
         </Router>
   
        </div>
      
  )
}


  
export default App