import React from "react";

const Body = (props)=>{
    return(
        <>
     
     <div className="flex-container">
     <img src= {props.image1} alt = "trophy_image"></img>
       <div className="flex-content">
       <h3>{props.heading}</h3>
       <ul>
        <li>{props.list1}</li>
        <li>{props.list2}</li>
       </ul>
       <img src = {props.image2} alt="image2"></img>
       <div>Government of India has awarded the <span style={{fontWeight:"bold"}}>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</div>
       </div>
     </div>
  
</>
    );
}

export default Body;