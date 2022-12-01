// import React from 'react'
// import Card from 'react-bootstrap/Card'
// import {Button} from 'react-bootstrap'

// export default function card1() {
//     return (
//         <div>
//             <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>
           
//         </div>
//     )
// }









import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carda(props){
   
 return (


    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="{props.img}" />
  {/* <img src={props.img}/> */}
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
       Name :{props.name}
         <p id="title">{props.title}</p>
          <p id="bio">{props.bio}</p>
       
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>



        //  <div style={cardStyle} className="col s6 s6">
        //      <div className="card">
        //          <div className="card-image">
        //              <img src={props.img}/>
        //              <span className="card-title">{props.name}</span>
        //             </div>
        //              <div className="card-content">
        //               <p id="title">{props.title}</p>
        //               <p id="bio">{props.bio}</p>
        //              </div>
        //          </div>
        //      </div>

 );
}

Card.propTypes = {
    img:PropTypes.element,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired
    };

export default Carda;