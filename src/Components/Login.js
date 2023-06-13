import Image from "../Assets/LoginImage.avif"
// import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="LoginPage">
            
            <img className="LoginImage" width="550px" src={Image}/>
            <div className="LoginCard">
                <form className="LoginArea" action="">
                    <h1>Login</h1>
                    <input type="text" placeholder="Enter Email"></input>
                    <input type="password" placeholder="Enter Password"></input>
                    <div className="loginUser" type="submit">Submit</div>
                    <p>Don't have an account? <span className="signupLink">Sign Up!</span></p>
                </form>
                
            </div>
        </div>
    )
}

export default Login