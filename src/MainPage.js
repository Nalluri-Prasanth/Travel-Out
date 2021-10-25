import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
 
 function MainPage()
 {
  const navStyle = { color: 'white'};
           
         
             return (
               <div class="navbar">
               <nav class="topnav">
               <div class="logo">
  
                </div>

                   <h3>Trav Out</h3>
   
                   
                    
       <ul className="nav-links">
                   <Link style ={navStyle} to ="/Home">
                       <li>Home</li>
                       </Link>
                     <Link style ={navStyle} to ="/About">
                       <li>About</li>
                       </Link>
                       <Link to ="/WeekEndPlanner" style ={navStyle} >
                       <li>WeekEndPlanner</li>
                       </Link>
                       <Link style ={navStyle} to ="/BudgetCalculator">
                       <li>BudgetCalculator</li>
                       </Link>
                       <Link style ={navStyle} to ="/Ratings">
                       <li>Ratings</li>
                       </Link>
                       <Link style ={navStyle} to ="/Login">
                       <li><button>Login</button></li>
                       </Link>

                       </ul>
                       

               </nav>
           <div>
            <img src="trav" alt="travlogo" />
           </div>

               </div>
               

);
          } 
 
       
 
 
 export default MainPage;
 ;
 
