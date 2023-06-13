// import { Link } from "react-router-dom"
import Image from "../Assets/RegisterImage.jpg"

const Register = () => {
    return (
        <div className="RegisterPage">

            <img className="LoginImage" width="550px" src={Image} />
            <div className="RegisterCard">
                <form action="http://localhost:3000/api/v1/auth/Register" className="RegisterArea">
                    <h1>Register</h1>
                    <div>
                        <input type="text" name="name" className="RegisterField" placeholder="Enter Name"></input>
                        <input type="text" name="age" className="RegisterField" placeholder="Enter Age"></input>
                    </div>
                    <div>
                        <input type="text" name="weight" className="RegisterField" placeholder="Enter weight"></input>
                        <input type="text" name="monthsOfPregnancy" className="RegisterField" placeholder="Month's of pregnancy "></input>
                    </div>
                    <div>
                        <input type="text" name="Email" className="RegisterField" placeholder="Enter Email"></input>
                        <input type="password" name="password" className="RegisterField" placeholder="password"></input>
                    </div>
                    <button className="RegisterUser" type="submit">Submit</button>
                    <p>Already have an Account? <span className="signupLink">Log In!</span></p>
                </form>

            </div>
        </div>
    )
}

export default Register