import React from "react";
import "../src/components/styles/style.css"
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter  } from "react-icons/fa";
export default function FooterRoot () {
    return (
        <div className="footer">
            <FaGithubSquare className="footer-icon"/>
            <FaFacebookF className="footer-icon"/>
            <FaInstagram className="footer-icon"/>
            <FaTwitter className="footer-icon"/>
        </div>
    )
}