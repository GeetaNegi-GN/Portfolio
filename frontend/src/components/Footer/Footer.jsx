import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {BsGithub,BsInstagram,BsYoutube,BsLinkedin} from "react-icons/bs";
import "./Footer.css";
const Footer = ( ) =>{
    return(
        <div className="footer">
            <div>
                <Typography variant="h5">About Me
                </Typography>
                <Typography>
                    Hello,my name is <b>Geeta Negi</b>.I want to become a Full-Stack Web Developer and currently
                    i am working on the projects to enchance my skills.
                
                </Typography>
                <Link to= "/contact" className="footerContactBtn">
                    <Typography>Contact Us</Typography>
                </Link>
            </div>
            <div>
                <Typography variant="h6">
                    Social Media</Typography>
                    <a href="https://github.com/GeetaNegi-GN/" target="blank">
                        <BsGithub/>
                    </a>
                    <a href="https://www.youtube.com/@geekgirl011/playlists" target="blank">
                        <BsYoutube/>
                    </a>
                    <a href="https://instagram.com/___geeta_negi/" target="blank">
                        <BsInstagram/>
                    </a>
                    <a href="https://www.linkedin.com/in/geeta-negi-615420249" target="blank">
                        <BsLinkedin/>
                    </a>

                
            </div>
        </div>
    )
}
export default Footer