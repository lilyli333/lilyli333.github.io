import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap'
import './experience.css'
import ExpandingCard from './card'

export default class Experience extends React.Component {
    render(){
        const iJetCards = [
            {project:"HR Job Bid Website", description:"created an internal website to automate job changes within Brunswick manufacturing plants. Allows workers to bid for new jobs/shifts within the corporation and automatically generate bid winners using an algorithm that gives preferences to certain workers with given conditions set by HR", tags: ["Website Development", "PHP", "Laravel", "SQL"]},
            {project:"Model Rendering Web App", description:"created a web application that renders 3D boat models for Brunswick’s subsidiaries, allowing users to interact with the model: see 360° view of different boats, try different add-on options, and experience the boat from different points of view", tags: ["Website Development", "WebGL", "Three.JS", "HTML5/CSS"]},
            {project:"SeaRay 2D Applicaiton", description:"created an iframe for SeaRay’s newest boat release to increase customer engagement; will be included as the landing page on the launch website (projected completion date: late 2020)", tags: ["Website Development", "MongoDB", "ExpressJS", "ReactJS", "NodeJS", "MERN Stack", "RESTful API"]},
            {project:"Project LiveWell", description:"created application for Whale’s pioneer Livewell system with user-friendly & intuitive design that allows for remote control of hardware components via BLE; application will be available to customers once project reaches production phase ", tags: ["Mobile App Development", "iOS", "Swift"]},
            {project:"i-Jet Website", description:"created new website for i-Jet Lab to engage potential hires and increase visibility amongst students", tags: ["Website Development", "ReactJS"]},
            {project:"Project Sebastian", description:"accomplished camera streaming; panoramic image stitching; joystick control of robot using joystick via CAN messaging using Bluetooth", tags: ["Robotics", "ROS", "OpenCV", "Image Stitching", "CAN Message", "Bluetooth"]},
            {project:"Project Google Glass", description:"created Google Glass application for Boston Whale’s manufacturing plants, allows workers to select tasks and view data via BLE connection to server; aims to ease workflow and increase productivity", tags: ["Mobile App Development", "Android", "JAVA", "Google Glass", "BLE"]}];
        const linkedInCards = [{project:"TBD", description:"To be updated at the end of summer 2021", tags:[]}]
        return(
            <div className="info-div" id="experience">
                <div style={{textAlign:"center", margin:"0px 0px 3vw 0px"}}>
                    <h1 style={{color:"white"}}>LinkedIn Corporation</h1>
                    <p className="paragraph">As a Software Engineer Intern, I worked on LinkedIn's flagship Android application in the Search & Discovery Org.</p>
                </div>
                <div style={{textAlign:"center"}}>
                    <h1 style={{color:"white"}}>Brunswick Corporation</h1>
                    <p className="paragraph">In my 1.25 years at the i-Jet Lab (the innovative branch of Brunswick Corporation) as a Software Engineer Inter, I worked on a plethora of different projects.</p>
                    <ExpandingCard items={iJetCards}/>
                </div>
            </div>
        );
    }
}
