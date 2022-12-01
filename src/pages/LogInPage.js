import React, {useState} from "react"
import "./LogInPage.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const LogInPage = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/home")
        })
    }

    return (
        
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
    )
}

export default LogInPage





































// import React, {useState} from "react"
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import axios from "axios"
// import { useHistory } from "react-router-dom"


// export default function LogInPage() {

//     const Login = ({ setLoginUser}) => {

//         const history = useHistory()
    
//         const [ user, setUser] = useState({
//             email:"",
//             password:""
//         })
    
//         const handleChange = e => {
//             const { name, value } = e.target
//             setUser({
//                 ...user,
//                 [name]: value
//             })
//         }
    
//         const login = () => {
//             axios.post("http://localhost:9002/login", user)
//             .then(res => {
//                 alert(res.data.message)
//                 setLoginUser(res.data.user)
//                 history.push("/")
//             })
//         }
    
//     }
    

    


//     return (
//         <div>
            
//             <Form>
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" value={user.email} onChange={handleChange} 
//      />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" value={user.email} onChange={handleChange} 
             
//     />
//   </Form.Group>

//   <Button variant="primary" type="submit">
//     Login
//   </Button>
//   <Button variant="primary" type="register" onClick={() => history.push("/register")}>
//     Register
//   </Button>
//    </Form>

//         </div>
//     )

// }

