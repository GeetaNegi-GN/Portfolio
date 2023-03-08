import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ( ) => {
    return ( 
        <div className="about">
            <div className="aboutContainer1">
                <Typography>This is a sample text</Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img src="https://avatars.githubusercontent.com/u/123560410?s=400&u=d377b0a4e2d35ad7105b90f7cfe9cbe6d133f86a&v=4"
                     alt="Geeta"
                     className="aboutAvatar"/>
                    <Typography variant="h4" 
                    style={{
                        margin:"1vmax 0",color: "black"
                    }}>
                        Geeta Negi</Typography>
                    <Typography>
                            Full Stack Web Developer</Typography>
                    <Typography style={{margin:"1vmax 0" }}>I'm Intern</Typography>
                </div>
                <div>
                    <Typography style={{
                        wordSpacing:"5px",
                        lineHeight:"50px",
                        letterSpacing:"5px",
                        textAlign:"right",

                    }}>
                        This is description Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. Natus rep
                    rehenderit assumenda nemo distinctio, optio quidem 
                    quo possimus explicabo aperiam expedita iste
                     repellat iusto id error ducimus sunt eos quisquam 
                     dolore!

                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default About 