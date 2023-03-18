import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import {Typography} from "@mui/material"
import TimeLine from "../TimeLine/TimeLine";
import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";

const Home = () => {

    useEffect(()=>{
        const textureLoader = new THREE.TextureLoader();
        const moonTexture = textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
        const spaceTexture = textureLoader.load(spaceImage);

        const scene =new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);
        camera.position.set(4,4,8);

        const canvas = document.querySelector(".homeCanvas");
        const renderer =new THREE.WebGLRenderer({canvas});

        const moonGeometry = new THREE.SphereGeometry(2,64,64);
        const moonMaterial = new THREE.MeshStandardMaterial({map:moonTexture});
        const moon = new THREE.Mesh(moonGeometry,moonMaterial);

       
        const venusGeometry = new THREE.SphereGeometry(3,64,64);
        const venusMaterial = new THREE.MeshBasicMaterial({map:venusTexture});
        const venus = new THREE.Mesh(venusGeometry,venusMaterial);
        venus.position.set(8,5,5);

        const pointLight = new THREE.PointLight(0xffffff,1);
        const pointLight2 = new THREE.PointLight(0xffffff,0.1);
        pointLight.position.set(8,5,5);
        pointLight2.position.set(-8,-5,-5);

        
        
        scene.add(moon);
        scene.add(venus);
        scene.add(pointLight);
        scene.add(pointLight2);
        scene.background=spaceTexture;
        const constSpeed = 0.01;
        window.addEventListener("mousemove",(e)=>{
        if(e.clientX <= window.innerWidth/2){
            moon.rotation.x -=constSpeed;
            moon.rotation.y +=constSpeed;
            venus.rotation.x -=constSpeed;
            venus.rotation.y +=constSpeed;
        }

        if(e.clientX > window.innerWidth/2){
            moon.rotation.x -=constSpeed;
            moon.rotation.y -=constSpeed;
            venus.rotation.x -=constSpeed;
            venus.rotation.y -=constSpeed;
        }
        if(e.clientY > window.innerHeight/2){
            moon.rotation.x -=constSpeed;
            moon.rotation.y +=constSpeed;
            venus.rotation.x -=constSpeed;
            venus.rotation.y +=constSpeed;
        }
        if(e.clientY <= window.innerHeight/2){
            moon.rotation.x -=constSpeed;
            moon.rotation.y -=constSpeed;
            venus.rotation.x -=constSpeed;
            venus.rotation.y -=constSpeed;
        }
       });

       
        
        const animate = () => {
            requestAnimationFrame(animate);
            moon.rotation.y +=0.001;
            venus.rotation.y +=0.001;
            renderer.setSize(window.innerWidth,window.innerHeight);
            renderer.render(scene,camera);

        };
        animate();
       

    },[]) 
    return( <div className="home">
        <canvas className="homeCanvas"></canvas>
        <div className= "homeContainer">
            <Typography variant="h3">TIMELINE</Typography>
            <TimeLine timelines ={[1,2,3,4]}/>
       
        </div>
        <div className= "homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
            <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                 <img
                 src="https://images.pexels.com/photos/1559817/pexels-photo-1559817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                 alt="Face1"/>
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                 <img
                 src="https://images.pexels.com/photos/2113554/pexels-photo-2113554.jpeg?auto=compress&cs=tinysrgb&w=600"
                 alt="Face2"/>
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                 <img
                 src="https://images.pexels.com/photos/3180831/pexels-photo-3180831.jpeg?auto=compress&cs=tinysrgb&w=600"
                 alt="Face3"/>
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                <img
                src="https://images.pexels.com/photos/3279307/pexels-photo-3279307.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Face4"/>
             </div>
             <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                 <img
                 src="https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&w=600"
                 alt="Face5"/>
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                 <img
                 src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                 alt="Face6"/>
            </div>
        </div>
        <div className="cubeShadow"></div>   
        <div className="homeskillsBox">
        <SiCplusplus/>
        <SiReact/>
        <SiJavascript/>
        <SiMongodb/>
        <SiNodedotjs/>
        <SiExpress/>
        <SiCss3/>
        <SiHtml5/>
        <SiThreedotjs/>
        </div> 
        </div>
        <div className="homeYoutube">
            <Typography variant="h3">YOUTUBE VIDEOS</Typography>
          <div className="homeYoutubeWrapper">
            <YoutubeCard image="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            title="Sample Video"/>
             <YoutubeCard image="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            title="Sample Video"/>
             <YoutubeCard image="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            title="Sample Video"/>
             <YoutubeCard image="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            title="Sample Video"/>
             <YoutubeCard image="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            title="Sample Video"/>

          </div>
        </div>
    
    </div>
    );
};

export default Home;