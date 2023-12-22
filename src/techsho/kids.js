import React from "react";
function Kids (){
    const handleClick=()=>{
        
        window.location.href="/cart";
    };
    return(
 <div className="kids">
    <div className="container3">
        <div className="child">
        <a href="/Home"> <img src="kd.1.png"></img></a>
           <p>BONKIDS</p>
            <p> <p>Cost:650Rs(10% OFF)</p></p>
            <button onClick={handleClick}>Add to cart</button>
           
        </div>
        <div className="child">
        <a href="/Home">  <img src="kd.2.png"></img></a>
            <p>BUMZEE</p>
            <p>Cost:500Rs(5% OFF)</p>
    
    <button onClick={handleClick}>Add to cart</button>    </div>
        <div className="child">
        <a href="/Home">  <img src="kd.3.png"></img></a>
            <p>H&M</p>
            <p><p>Cost:650Rs(20% OFF)</p></p>
            <button onClick={handleClick}>Add to cart</button>
        </div>
        <div className="child">
        <a href="/Home">   <img src="kd.4.png"></img></a>
            <p>LilPicks</p>
            <p>Cost:650Rs(30% OFF)</p>
    
    <button onClick={handleClick}>Add to cart</button>    </div>
        <div className="child">
        <a href="/Home">  <img src="kd.5.png"></img></a>
            <p>StyleStones</p>
            <p>Cost:750Rs(20% OFF)</p>
    
    <button onClick={handleClick}>Add to cart</button>    </div>
        <div className="child">
        <a href="/Home">  <img src="kd.6.png"></img></a>
      
       <p>Pspeaches</p>
       <p>Cost:550Rs(60% OFF)</p>
       <button onClick={handleClick}>Add to cart</button>
</div>
    </div>

 </div>
    )
}
export default Kids;

