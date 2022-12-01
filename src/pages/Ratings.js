import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import{Button} from 'react-bootstrap'

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    ><br />
       <h1>Rating</h1> <Typography component="legend"><b>Hotel Rating</b></Typography>
     
      <div>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      

      />
      <br />
      </div>

    


      <Typography component="legend"><b>Travel rating</b></Typography>
     
      <div>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      

      />
      <br />
      </div>
      <Typography component="legend"><b>Services</b></Typography>
     
     <div>
     <Rating
       name="simple-controlled"
       value={value}
       onChange={(event, newValue) => {
         setValue(newValue);
       }}
     

     />
     <br />
     </div>
      <br />
      <TextField label="Feedback" color="secondary" focused /><br />
  
    </Box>
        <Button variant="success">Success</Button>{' '}
    
    
    </div>
    
  );
}



















// import React from 'react'

// export default function Ratings() {
//     return (
//         <div>

//             <h1>Rate this site</h1>
//            <h3>Hello , this is a nice site helps me with simple ticket booking</h3>
//             <p> &#9733; &#9733; &#9733; &#9733; &#9733;</p>
//             <div class="pinfo">Write your feedback.</div>
  
// <div>
// <div class="form-group">
//   <div class="col-md-4 inputGroupContainer">
//   <div class="input-group">
//   <span class="input-group-addon"><i class="fa fa-pencil"></i></span>
//   <textarea class="form-control" id="review" rows="12"></textarea>
  
 
//     </div>
//   </div>
//   </div>
//   </div>
         
//   </div>
         
         
           
    
//     )
// }
