import React from "react";
import logo from "./components/images/logo192.png"
 export default function ContentRoot(Prop) {
    const date = new Date ()
    const hours = date.getHours() 
    let timeOfDay
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17 ) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <div className="my-projects">
            <img src={logo} className="project-img" alt="projectimage"/>
            <div className="project-info">
            <h3 className="project-header">{Prop.name}</h3>
            <p>{Prop.about}</p>
            <p>it was uploaded {timeOfDay} by: {Prop.email} </p>
            </div>
            
       </div>
       
    )
 }