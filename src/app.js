import React from "react";
import ContentRoot from "./components/js/content";
import HeaderRoot from "./components/js/header";

import projectprops from "./components/js/projectprops";
import FooterRoot from "./components/js/footer";
export default function App () {
   const projectprop = projectprops.map(myproject => {
      return <ContentRoot img={myproject.img} 
      name={myproject.name}
      about={myproject.about}
      email={myproject.email}/>
   })

    return (
        <div>
            <HeaderRoot />
            <div className="project-list">
               {projectprop}
               {projectprop}
               {projectprop}
               {projectprop}
               {projectprop}
            </div>
            <FooterRoot />
        </div>

    )
}