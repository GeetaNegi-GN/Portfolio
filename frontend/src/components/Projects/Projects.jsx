import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import {AiOutlineProject}from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";

const ProjectCard = ({
    url, 
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
}) =>{
    return(
        <>
        <a href={url} className= "projectCard" target="blank">
            <div>
                <img src= {projectImage} alt="Project"/>
                <Typography variant="h5" >{projectTitle}</Typography>
            </div>
            <div>
                <Typography variant="h4">
                    About Project
                </Typography>
                <Typography>{description}</Typography>
                <Typography variant="h6">Tech Stack: {
                technologies}</Typography>
            </div>
            </a> 
            {isAdmin && (
                <Button style={{color: "rgba(40,40,40,0.7)"}}>
                    <Delete/>
                </Button>
            )}
        </>
        
    );
};
const Projects = () => {
    const projects =[1,2,3];
    return( 
    
    <div className="projects">
        <Typography variant="h3">
            Projects<AiOutlineProject/>
        </Typography>

        <div className="projectsWrapper">
            {
                projects.map((project,index)=> (
                    <ProjectCard
                    url= "https://github.com/GeetaNegi-GN/ " 
                    projectImage= "https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&w=300"
                    projectTitle= "Sample Project"
                    description= "This is a sample project ..ajlsdflalfk...klafsj;afjds..."
                    technologies= "Mongodb, React, NodeJs, Express " />
                ))
            }

        </div>
        <Typography variant="h3" style={{font:"100 1.2rem 'Ubuntu Mono'"}}>
        All The Projects Shown Above Are Made By Me<FaRegSmileWink/>    
        </Typography>
    </div>
    );
};

export default Projects;