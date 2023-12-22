import React from "react";


function Login(){
    return(
        <div className="lgin"> 
        <div className="lginlabel">
    <h3>Login Here</h3><br></br>
        <label htmlFor="username">Username:</label>
        <input type="text" placeholder="Enter Valid Username" name="username"  id="user"/><br></br><br></br>


        <label htmlFor="Password">Password:</label>
        <input type="Passsword"  placeholder="Enter Valid Password" name="password" id="pass"/>  <br></br><br></br>


        <a href="List"> <button id="logbut">Login</button></a><br></br><br></br>

         <p>Dont Have Account?</p>
         
         <a href="Account">Create Account</a>

        </div>
        </div>
    )
}
export default Login;