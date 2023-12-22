import React from "react";
import Logo from "../logo";
import { Link, Outlet } from "react-router-dom";

import Banner from "./banner"
import Footer from "./footer";




function List() {
    
    return (
        <div className="list">
            
            <Logo />
            <ul>
                <li><Link id="lnk" to="/Home">My Shopping</Link></li>
                <li><Link id="lnk1" to="/Mens">Mens</Link></li>
                <li> <Link id="lnk2" to="/Womens">Womens</Link></li>
                <li><Link id="lnk3" to="/Kids">Kids</Link></li>
               
                <Outlet />
            </ul>
            <div>
               
                    <Banner/>
                
            </div>
            <Footer/>
        </div>

    )
}
export default List;