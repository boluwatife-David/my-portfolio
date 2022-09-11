import React from "react";
 export default function ContentRoot(props) {
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
            <img src={props.img} className="project-img" alt="projectimage"/>
            <div className="project-info">
            <h3 className="project-header">{props.name}</h3>
            <p>{props.about}</p>
            <p>it was uploaded {timeOfDay} by: {props.email} </p>
            </div>
         </div>
       
    )
 }  
 