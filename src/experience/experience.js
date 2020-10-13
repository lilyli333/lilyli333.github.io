import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap'
import './experience.css'
import ExpandingCard from './card'

export default class Experience extends React.Component {
    render(){
        const cards = [{project:"SeaRay 2D Applicaiton", description:"creating an iframe for SeaRay’s newest boat release to increase customer engagement; will be included as the landing page on the launch website (projected completion date: late 2020)", tags: ["Website Development", "MongoDB", "ExpressJS", "ReactJS", "NodeJS", "MERN Stack", "RESTful API"]},
        {project:"Project LiveWell", description:"created application for Whale’s pioneer Livewell system with user-friendly & intuitive design that allows for remote control of hardware components via BLE; application will be available to customers once project reaches production phase ", tags: ["Mobile App Development", "iOS", "Swift"]},
        {project:"i-Jet Website", description:"created new website for i-Jet Lab to engage potential hires and increase visibility amongst students", tags: ["Website Development", "ReactJS"]},
        {project:"Project Sebastian", description:"accomplished camera streaming; panoramic image stitching; joystick control of robot using joystick via CAN messaging using Bluetooth", tags: ["Robotics", "ROS", "OpenCV", "Image Stitching", "CAN Message", "Bluetooth"]},
        {project:"Project Google Glass", description:"created Google Glass application for Boston Whale’s manufacturing plants, allows workers to select tasks and view data via BLE connection to server; aims to ease workflow and increase productivity", tags: ["Mobile App Development", "Android", "JAVA", "Google Glass", "BLE"]}];
        return(
            <div className="info-div" id="experience-div">
                <h1 style={{color:"white"}}>Brunswick Corporation</h1>
                <p className="paragraph">Below are the projects I worked on while interning at i-Jet Lab, the innovative branch of Brunswick Corporation.</p>
                <ExpandingCard items={cards}/>
            </div>
        );
    }
}
