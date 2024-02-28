import React from "react";

const FooterComponent = (props)=>{
 return(
<div className="footer"> 
<img src = {props.image} alt="phone"></img>{props.text}

 </div>


 );
}

export default FooterComponent;