import React ,{useState} from 'react'

import './login.css';


export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


      

    return (
        <div> <center>
             <form>
                <h3>Sign In</h3>

                <div className="form-control">
                    <label>Email address  </label>
                <input type="email"  value={email}  onChange={(e) => setEmail(e.target.value)}   className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-control">
                    <label>Password  </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="form-control" placeholder="Enter password" />
                </div>
                

                <div className="form-control">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/Login">password?</a>
                </p>
                
            </form>
            </center></div>
            
    )
}
