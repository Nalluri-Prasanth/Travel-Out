import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import {  useEffect } from 'react';

// import { Dropdown } from 'react-bootstrap';
// import { DropdownButton } from 'react-bootstrap';
import axios from "axios"
import { useHistory } from "react-router-dom"
export default function Booking() {

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
  const [ user, setUser] = useState({
    name: "",
    username: "",
    from:"",
    to: "",
    city: "",
    state: "",
    startingdate: "",
    returningdate: "",
    adults: "",
    children: "",


})

     

const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

const booking = () => {
  const { name , username ,from , to , city , state , startingdate,returningdate , adults , children } = user
  if( name && username && from && to && city && state && startingdate && returningdate && adults && children){
      axios.post("http://localhost:9002/booking", user)
      .then( res => {
          alert(res.data.message)
          history.push("/booking")
      })
  } 
   else {
            alert("invlid input")
        }
    fetch("http://localhost:9002/booking",{
      method: 'POST',
      headers:{ 
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
  
    })
  
}
return (
  <div className="booking">
    {console.log("User", user)}
      <h1>booking</h1>
      <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
      <input type="text" name="username" value={user.username} placeholder="Your username" onChange={ handleChange }></input>
      <input type="text" name="from" value={user.from} placeholder=" from" onChange={ handleChange }></input>
      <input type="text" name="to" value={user.to} placeholder=" to" onChange={ handleChange }></input>
      <input type="text" name="city" value={user.city} placeholder=" city" onChange={ handleChange }></input>
      <input type="text" name="state" value={user.state} placeholder=" state" onChange={ handleChange }></input>
      <input type="date" name="startingdate" value={user.startingdate} placeholder=" startingdate" onChange={ handleChange }></input>
      <input type="date" name="returningdate" value={user.returningdate} placeholder=" returningdate" onChange={ handleChange }></input>
      <input type="number" name="adults" value={user.adults} placeholder=" adults" onChange={ handleChange }></input>
      <input type="number" name="children" value={user.children} placeholder=" children" onChange={ handleChange }></input>
  
      <Button type="submit"  onClick={booking}  >Book</Button>
  </div>
)
}





//   const [nameValue, setNameValue] = useState('');
//     const [userNameValue, setUserNameValue] = useState('');
//     const [fromAddressValue, setFromAddressValue] = useState('');
//     const [toAddressValue, setToAddressValue] = useState('');
//     const [cityValue, setCityValue] = useState('');
//     const [stateValue, setStateValue] = useState('');
//     const [startingDateValue, setStartingDateValue] = useState('');
//     const [returingDateValue, setReturingDateValue] = useState('');
//     const [adultsValue, setAdultsValue] = useState('');
//     const [childrenValue, setChildrenValue] = useState('');

//     const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//     const [showErrorMessage, setShowErrorMessage] = useState(false);


//     useEffect(() => {
//       if (showSuccessMessage || showErrorMessage) {
//           setTimeout(() => {
//               setShowSuccessMessage(false);
//               setShowErrorMessage(false);
//           }, 3000);
//       }
//   }, [showSuccessMessage, showErrorMessage]);

//   const saveChanges = async () => {
     
//       alert('Save functionality not implemented yet');
//   }

//   const logOut = () => {

//       alert('Log out functionality not implemented yet');
//   }
  
//   const resetValues = () => {
      
//       alert('Reset functionality not implemented yet');
//   }
//   return (
    

//     <Container>
//       <Row>
//     <Col>
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Row className="mb-3">
//         <h1>Booking portal</h1>
//         <Form.Group as={Col} md="3" controlId="validationCustom01">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="name"
//             onChange={e => setNameValue(e.target.value)}
//             value={nameValue}
            
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
       
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustomUsername">
//           <Form.Label>Username</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             <Form.Control
//               type="text"
//               placeholder="Username"
//               required
//               aria-describedby="inputGroupPrepend"
//               onChange={e => setUserNameValue(e.target.value)}
//               value={userNameValue} />
              
           
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//         </Row>
//         <Row>
//                   <Form.Group as={Col} md="3" controlId="validationCustom02">
//           <Form.Label> From </Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="from-address"
//             onChange={e => setFromAddressValue(e.target.value)}
//                     value={fromAddressValue} 
         
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom02">
//           <Form.Label> To </Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="to-address"
//             onChange={e => setToAddressValue(e.target.value)}
//                     value={toAddressValue}
          
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
        
       
//       </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="3" controlId="validationCustom03">
//           <Form.Label>City</Form.Label>
//           <Form.Control type="text" placeholder="City" required 
          
//           onChange={e => setCityValue(e.target.value)}
//           value={cityValue}
//           />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
       
     
//         <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>State</Form.Label>
//           <Form.Control type="text" placeholder="State" required 
//           onChange={e => setStateValue(e.target.value)}
//           value={stateValue}
          
//           />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
       
//       </Row>
//       <Row>
//      <Form.Group as={Col} md="3" controlID="starting-date">
//          <Form.Label>Starting Date</Form.Label>
//          <Form.Control type="date" placeholder="starting-date" required
//           //  onChange={e => setStartingDateValue(e().target.value)}
//           //  value={startingDateValue}
//          />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid date.
//           </Form.Control.Feedback>

//      </Form.Group>
//      <Form.Group as={Col} md="3" controlID="returning-date">
//          <Form.Label>Returning Date</Form.Label>
//          <Form.Control type="date" placeholder="returning-date" required 
         
//         //  onChange={e => setReturingDateValue(e.target.value)}
//         //  value={returingDateValue}
//          />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid date.
//           </Form.Control.Feedback>
         
//      </Form.Group>
//      </Row>
//      <Row>
//      <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>Adults</Form.Label>
//           <Form.Control type="text" placeholder="0" required
//           onChange={e => setAdultsValue(e.target.value)}
//           value={adultsValue}
//           />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid input.
//           </Form.Control.Feedback>
//         </Form.Group>  
//         <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>children</Form.Label>
//           <Form.Control type="text" placeholder="0" required
//              onChange={e => setChildrenValue(e.target.value)}
//              value={childrenValue} 
//           />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid input.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Row>
//         <Form.Group as={Col} md="3"controlId="formGridState">
//       <Form.Label>Transportation</Form.Label>
//       <Form.Select defaultValue="Choose...">
//         <option>Flight</option>
//       <option>Train</option>
//         <option>Car</option>
//         <option>Bus</option>
//       </Form.Select>
//     </Form.Group>
//   </Row>  
//         </Row>  

  
//       <Button type="submit"  onClick={booking}  >Book</Button>
//       {/* <Button onClick={saveChanges}>SaveChanges</Button>
//       <Button onClick={resetValues}>resetValues</Button>
//       <Button  onClick={logOut}>LogOut</Button> */}


//     </Form>
//     </Col>
//   </Row>
 
// </Container>

//   );
// }


















// import React from "react";

// class Booking extends React.Component{

// state={
//   NAME: '',
//   ADDRESS:'',
//   PHONE:'',
//   FROM:'',
//   TO:'',
// };





//   getValue = (event) =>{
//     console.log('Event',event.target.value);
//    const NAME = this.NAME.value;
//    const ADDRESS=this.ADDRESS.value;
//    const PHONE=this.PHONE.value;
//    const FROM=this.FROM.value;
//    const TO=this.TO.value;
//   this.setState({NAME:NAME,ADDRESS:ADDRESS,PHONE:PHONE,FROM:FROM,TO:TO});
//   };




  
//   handleSubmit = (event) => {
// event.preventDefault();
//     const NAME = this.state.NAME;
//     const ADDRESS = this.state.ADDRESS;
//     const PHONE = this.state.PHONE;
//     const FROM = this.state.FROM;
//     const TO = this.state.TO;

//     console.log('NAME on Submit:', NAME);
//     console.log('ADDRESS on Submit:', ADDRESS);
//     console.log('PHONE on Submit:', PHONE);
//     console.log('FROM on Submit:', FROM);
//     console.log('TO on Submit:', TO);
    
//   };
//   render() {
//     console.log('State',this.state);
//     return(
   
//       <div>
//      <center>
//         <h1><center> WELCOME TO TRAVOUT BOOKING PORTAL </center></h1>
//         <form action="">
//         <table border="0" cellpadding="40" cellspacing="10" width= "40%" border-collapse="collapse">
//           <div>
//             <tr>
//           <th> NAME</th> 
//      <th>   <label htmlFor=""></label>
//           <input type="NAME" onChange = {this.getValue} ref = {(input) =>this.NAME=input}/></th>  </tr>
// </div>
// <div>
//   <tr>
// <th>   ADDRESS </th>
//        <th>   <label htmlFor=""></label>
//           <input type="ADDEESS" onChange = {this.getValue}ref = {(input) =>this.ADDRESS=input}/></th>
// </tr>
// </div>
// <div>

//          <tr>
//         <th>  PHONE</th> 
//        <th>   <label htmlFor=""></label>
//           <input type="PHONE" onChange = {this.getValue}ref = {(input) =>this.PHONE=input}/></th>
//           </tr>
// </div>
// <div>
// <tr>

// <th> FROM</th>
//      <th>   <label htmlFor=""></label>
//           <input type="FROM" onChange = {this.getValue}ref = {(input) =>this.FROM=input}/></th>  
//           </tr>
// </div>

// <div>
// <tr>

// <th> TO</th>
//      <th>   <label htmlFor=""></label>
//           <input type="TO" onChange = {this.getValue}ref = {(input) =>this.TO=input}/></th>  
//           </tr>
// </div>
// <div>
// <tr>
// <th> Register</th><th> 
// <button onClick = {this.handleSubmit} >Submit</button></th>

// </tr>
// </div>
// </table>
// </form>
// </center>
// </div>

      
//     );
  
//   }
// }
// export default Booking;