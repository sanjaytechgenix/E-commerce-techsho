import React from "react";
import { Link, NavLink } from "react-router-dom";


function Head() {
    return (

        <div className="head">
          

            <div className="headimg">
                <img src="techsho final logo.png"></img>
            </div>
           
            <form action="#">
            <div className="searchbar">
                <input type="search" id="icon" name="searchbar" placeholder="search here " ></input>
            </div>
            </form>
            
            <div className="mobile">
           
        <a href="https://www.google.com/search?q=play+store&oq=pl&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyDQgCEAAYgwEYsQMYgAQyDQgDEC4YxwEY0QMYgAQyCggEEAAYsQMYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg3NjE1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">Download App </a>
           </div>

           <div className="hlogo">
           <a id="hl" href="List"><i class="fa fa-home"></i></a> 
            </div>
           <div className="account">
           <a id="usericon" href="Account"><i class='fa fa-user-circle'></i></a>

           </div >
          
   

        </div>
        

    )
} export default Head;
