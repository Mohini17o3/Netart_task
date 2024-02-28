import React from "react";
import Separator from "./Separator";
import FooterComponent from "./FooterComponent";
const Footer = ()=>{
    return (
     <>
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <div>CHEMICALS & PROCESS <Separator /> POWER <Separator />WATER & WASTE WATER <Separator />OILS & GAS <Separator /> PHARMA<Separator /> SUGARS & DISTILLERIES <Separator />PAPER & PULP<Separator /> MARINE & DEFENCE <Separator />METAL & MINING <Separator />FOOD & BEVERAGE<Separator /> PETROCHEMICAL & REFINERIES <Separator />SOLAR <Separator />BUILDING <Separator />HVAC <Separator />FIRE FIGHTING <Separator />AGRICULTURE & RESIDENTIAL</div>

  <div className="footer">
    <FooterComponent 
        image = "/phone-call.png"
        text = "Toll free 1800 200 1234"
    />
  <FooterComponent 
        image ="/facebook.png" 
        text = "www.facebook.com/cripumps"
    />
    <FooterComponent 
        image = "global.png"
        text = "www.crigroups.com"
    />
</div>
     </>

    );
}

export default Footer;