import React, { useState } from "react";
// import Button from '@mui/material/Button';
import "./button"
import "./login.css"
import "./button.css"
function Login() {

    const [user, setUser] = useState("");
    const [userErr, setUserErr] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState(true);

    function userHandler(e) {

        let item = e.target.value;
        if (item.length < 4) {
            setUserErr(true)
        } else {
            setUserErr(false)
        }
        setUser(item)

    }

    function passwordHandler(e) {

        let item = e.target.value;
        if (item.length < 6) {
            setPasswordErr(true)
        } else {
            setPasswordErr(false)
        }
        setPassword(item)
    }

    function loginHandler(e) {
        if (user.length < 4 || password.length < 6) {
            alert("Invalid")
        } else {
            alert("All good")
        }

        e.preventDefault()
    }

    return (
        <div>
            <div className="cover">
                <div className="top">
                    <h3>Sign in</h3>
                    <div className="alt-signin">


                        <div className="facebook">
                        </div>
                        <div className="github">
                        </div>
                        <div className="google">
                        </div>
                    </div>
                </div>


                <form className="entry" onSubmit={loginHandler}>
                    <div className="input-container1">
                        <input className="input1" type="text" placeholder=" " required="required" />

                        <label className="placeholder"> User Name </label>
                        <div className="wrong1">
                            {userErr ? <span>⚠ Invalid User Name</span> : null}
                        </div>
                    </div>
                    <div className="input-container1">
                        <input className="input1" type="password" placeholder=" " required="required" />

                        <label className="placeholder">Password </label></div>
                    <div className="wrong2">
                        {passwordErr ? <span> ⚠ Wrong Password</span> : null}
                    </div>



                    <div className="check">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider" />
                        </label>
                        <div className="rem">Remember me</div>

                    </div>

                    <button variant="contained" type="submit">SIGN IN</button>
                </form>
                <p className="text">Don't have an account?<span><a className="signup" href="sign.com">Sign up </a> </span></p>


            </div>
           
        </div>
    )

}



export default Login