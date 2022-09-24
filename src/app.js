import React from "react";
import ContentRoot from "./components/js/content";
import HeaderRoot from "./components/js/header";
import projectprops from "./components/js/projectprops";
import FooterRoot from "./components/js/footer";
export default function App () {
const [lightTheme, setLightTheme] = React.useState(false)

function toggleClicked () {
    return  setLightTheme(prevTheme => !prevTheme)
}

    const projectprop = projectprops.map(myproject => {
      return <ContentRoot img={myproject.img} 
      name={myproject.name}
      about={myproject.about}
      email={myproject.email}/>
   })

    return (
        <div className={lightTheme ? "light-mode" : "dark-mode"} >
            <nav>
                <div >
                    <button className="lightmode-btn"  onClick={toggleClicked} >i</button>
                </div>
            </nav>
            {/* <div className="project-list">
               {projectprop}
            </div> */}
            <div className="content" >
                <HeaderRoot />
                <FooterRoot />
            </div>
            
        </div>

    )
}