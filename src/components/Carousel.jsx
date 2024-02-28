import React from "react";

const Carousel = (props)=>{
    return (
        <div>
           <div>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </div>
            <img src= {props.image} alt="carousel"  style ={ { width :"80vw"}}  ></img>
            <div><center> Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </center></div>
            <hr style ={{ borderColor: "red"}}></hr>
        </div>
    );
}

export default Carousel;