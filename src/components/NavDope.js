import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Button} from 'react-bootstrap'


export default function NavDope() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  
  <Navbar.Brand href="/home">
      <img
        src="./images/trav.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      <Navbar.Brand href="/home">Trav-Out</Navbar.Brand>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/about" variant="outline-danger"> About</Nav.Link>
      <Nav.Link href="/WeekEndPlanner"> WeekendPlanner</Nav.Link>
      {/* <Nav.Link href="/BudgetCalculator"> BudgetCalculator</Nav.Link> */}
      {/* <Nav.Link href="/VirtualTour"> VirtualTour</Nav.Link> */}
      <Nav.Link href="/Ratings"> Ratings</Nav.Link>
      <Nav.Link href="/Payment">Payment</Nav.Link>
      {/* <Nav.Link href="/HelperMaps">HelperMaps</Nav.Link> */}
      <Nav.Link href="/Searchingmaps">Maps</Nav.Link>


      {/* <NavDropdown title="Features" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/WeekEndPlanner"> <Button variant="WeekEndPlanner">WeekendPlanner</Button>{' '}</NavDropdown.Item>
        <NavDropdown.Item href="/BudgetCalculator"> <Button variant="outline-danger">BudgetCalculator</Button>{' '}</NavDropdown.Item>
        <NavDropdown.Item href="/VirtualTour"> <Button variant="outline-danger">VirtualTour</Button>{' '}</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Booking">Booking</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      {/* <Nav.Link href="/Booking"> <Button variant="danger">Booking</Button></Nav.Link> */}
      <Nav.Link href="/Bookingdope"> <Button variant="danger">Booking </Button></Nav.Link>
      <Nav.Link eventKey={2} href="/Login">
       <Button variant="primary">Login</Button>{' '}
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

