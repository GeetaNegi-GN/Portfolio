import { Typography } from "@mui/material";
import React from "react";
import "./YoutubeCard.css";

const YoutubeCard = ({
    url ="https://www.youtube.com/@geekgirl011/playlists",
    title = "Title Here",
    image,
}) =>{
 return (
    <div className="youtubeCard"> 
        <a href={url} target = "blank">
            <img src= {image} alt= "Video"/>
            <Typography>{title}</Typography>


        </a>
    </div>
 )
}

export default YoutubeCard