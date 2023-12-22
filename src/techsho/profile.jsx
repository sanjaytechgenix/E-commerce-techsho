import React from "react";
import { Link } from "react-router-dom"


function Account() {
    const handleClick = () => {
        window.location.href = "/Login"
    }

    return (


        <div className="container2">



            <h2>Create Your Account</h2><br></br>

            <div className="name">

                <label for="name">Name:</label>

                <input type="text" placeholder="Enter your name" name="name" id="name" />

            </div>




            <div className="email">

                <label for="email">Email:</label>

                <input type="email" placeholder="Enter your Email" name="email" id="email" />

            </div>




            <div className="number">

                <label for="number">Number:</label>

                <input type="num" placeholder="Enter your Number" name="number" id="number" />

            </div>




            <div className="password">

                <label for="password">Password:</label>

                <input type="password" placeholder="Enter your Password" name="password" id="password" />

            </div>




            <div className="button">

              <a href="Login">  <button id="but">submit</button></a><br></br><br></br>
               <p>Already have an Account?</p>
              
                <Link to="/Login" onClick={handleClick}>

                    <button id="buttonlog" onClick={handleClick}>login</button>

                </Link><br></br>







            </div >


            <div className="para">


                <p>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from <b>Tecsho</b>. Message and data rates may apply.</p>

            </div>
            <section>
                <div>

                </div>
            </section>
        </div>

    )

}

export default Account;