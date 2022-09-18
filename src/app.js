import React from "react";
import ContentRoot from "./components/js/content";
import HeaderRoot from "./components/js/header";
import LightMode from "./components/js/LightMode";
import projectprops from "./components/js/projectprops";
import FooterRoot from "./components/js/footer";
export default function App () {
const [lightTheme, setLightTheme] = React.useState(false)

    const projectprop = projectprops.map(myproject => {
      return <ContentRoot img={myproject.img} 
      name={myproject.name}
      about={myproject.about}
      email={myproject.email}/>
   })

    return (
        <div className="" >
            <HeaderRoot />
            {/* <div className="project-list">
               {projectprop}
            </div> */}
            <div >
            <FooterRoot />
            </div>
            
        </div>

    )
}