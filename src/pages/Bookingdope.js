import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {  useEffect } from 'react';
import { useHistory } from "react-router-dom"

import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';



export default function Bookingdope() {
    const history = useHistory()

  const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

  

  
  
    const [nameValue, setNameValue] = useState('');
      const [userNameValue, setUserNameValue] = useState('');
      const [fromAddressValue, setFromAddressValue] = useState('');
      const [toAddressValue, setToAddressValue] = useState('');
      const [cityValue, setCityValue] = useState('');
      const [stateValue, setStateValue] = useState('');
      const [startingDateValue, setStartingDateValue] = useState('');
      const [returingDateValue, setReturingDateValue] = useState('');
      const [adultsValue, setAdultsValue] = useState('');
      const [childrenValue, setChildrenValue] = useState('');
  
      const [showSuccessMessage, setShowSuccessMessage] = useState(false);
      const [showErrorMessage, setShowErrorMessage] = useState(false);
  
  
      useEffect(() => {
        if (showSuccessMessage || showErrorMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                setShowErrorMessage(false);
            }, 3000);
        }
    }, [showSuccessMessage, showErrorMessage]);
  
    const saveChanges = async () => {
       
        alert('Save functionality not implemented yet');
    }
  
    const logOut = () => {
  
        alert('Log out functionality not implemented yet');
    }
    
    const resetValues = () => {
        
        alert('Reset functionality not implemented yet');
    }
    return (
      
  
      <Container>
        <Row>
      <Col>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <h1>Booking portal</h1>
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="name"
              onChange={e => setNameValue(e.target.value)}
              value={nameValue}
              
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
         
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                required
                aria-describedby="inputGroupPrepend"
                onChange={e => setUserNameValue(e.target.value)}
                value={userNameValue} />
                
             
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          </Row>
          <Row>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label> From </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="from-address"
              onChange={e => setFromAddressValue(e.target.value)}
                      value={fromAddressValue} 
           
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label> To </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="to-address"
              onChange={e => setToAddressValue(e.target.value)}
                      value={toAddressValue}
            
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
         
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required 
            
            onChange={e => setCityValue(e.target.value)}
            value={cityValue}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
         
       
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required 
            onChange={e => setStateValue(e.target.value)}
            value={stateValue}
            
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
         
        </Row>
        <Row>
       <Form.Group as={Col} md="3" controlID="starting-date">
           <Form.Label>Starting Date</Form.Label>
           <Form.Control type="date" placeholder="starting-date" required
            //  onChange={e => setStartingDateValue(e().target.value)}
            //  value={startingDateValue}
           />
            <Form.Control.Feedback type="invalid">
              Please provide a valid date.
            </Form.Control.Feedback>
  
       </Form.Group>
       <Form.Group as={Col} md="3" controlID="returning-date">
           <Form.Label>Returning Date</Form.Label>
           <Form.Control type="date" placeholder="returning-date" required 
           
          //  onChange={e => setReturingDateValue(e.target.value)}
          //  value={returingDateValue}
           />
            <Form.Control.Feedback type="invalid">
              Please provide a valid date.
            </Form.Control.Feedback>
           
       </Form.Group>
       </Row>
       <Row>
       <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Adults</Form.Label>
            <Form.Control type="text" placeholder="0" required
            onChange={e => setAdultsValue(e.target.value)}
            value={adultsValue}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid input.
            </Form.Control.Feedback>
          </Form.Group>  
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>children</Form.Label>
            <Form.Control type="text" placeholder="0" required
               onChange={e => setChildrenValue(e.target.value)}
               value={childrenValue} 
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid input.
            </Form.Control.Feedback>
          </Form.Group>
          <Row>
          <Form.Group as={Col} md="3"controlId="formGridState">
        <Form.Label>Transportation</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Flight</option>
        <option>Train</option>
          <option>Car</option>
          <option>Bus</option>
        </Form.Select>
      </Form.Group>
    </Row>  
          </Row>  
  
    
        <Button type="submit" onClick={() => history.push("/Payment")}  >Book</Button>
        {/* <Button onClick={saveChanges}>SaveChanges</Button>
        <Button onClick={resetValues}>resetValues</Button>
        <Button  onClick={logOut}>LogOut</Button> */}
  
  
      </Form>
      </Col>
    </Row>
   
  </Container>
  
    );
  }
  
  
  
  
  
  
  