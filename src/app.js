import React from "react";
import ContentRoot from "./content";
import HeaderRoot from "./header";
import FooterRoot from "./footer";
export default function App () {
    return (
        <div>
            <HeaderRoot />
            <div className="project-list">
            <ContentRoot 
            src="./components/images/logo192.png" 
            name= "project name"
            about="about project"
            email="akanbiboluwatife230@gmail.com"
            designed="skeng"
            />
            <ContentRoot
               src="./components/images/logo192.png" 
               name= "project name"
               about="about project"
               email="boldav20000309@gmail.com"
            />
               <ContentRoot
               src="./components/images/logo192.png" 
               name= "project name"
               about="about project"
               email="email"
            />
               <ContentRoot
               src="./components/images/logo192.png" 
               name= "project name"
               about="about project"
               email="email"
            />
               <ContentRoot
               src="./components/images/logo192.png" 
               name= "project name"
               about="about project"
               email="email"
            />
            </div>
            <FooterRoot />
        </div>

    )
}