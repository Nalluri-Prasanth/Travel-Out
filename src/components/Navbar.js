import React from 'react';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
  

} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          
          <img src="./images/trav.svg" alt='Trav Out' width ="50" height="50"   />
         
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/WeekEndPlanner' activeStyle>
          WeekEndPlanner
          </NavLink>
          <NavLink to='/BudgetCalculator' activeStyle>
            BudgetCalculator
          </NavLink>
          <NavLink to='/VirtualTour' activeStyle>
            VirtualTour
          </NavLink>
          <NavLink to='/Ratings' activeStyle>
            Ratings
          </NavLink>
          

        </NavMenu>
        <NavLink to='/Booking' activeStyle>
            Book Ticket
          </NavLink>
        
        <NavBtn>
          <NavBtnLink to='/Login'>Sign Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};




export default Navbar;