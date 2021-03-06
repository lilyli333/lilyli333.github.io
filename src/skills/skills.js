import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap'
import github_logo from '../assets/github_logo.png'
import TurningCardsText from './turning_cards'
import './skills.css'
export default class Skills extends React.Component {
    render(){
        //, , , ,  (TensorFlow, Keras, MobileNet), NodeJS, python, React, Swift
        const cards = 
        [{primary:"Android Development", secondary:"used JAVA to create applications (Android phones and Google Glass Enterprise Edition)", description:"2 years of experience, 2 projects"}, 
        {primary:"C/C++", secondary:"took course on Data Structures in C++", description:"1 year of experience"}, 
        {primary:"iOS Development",secondary:"developed both professional and interest project apps", description:"1 year of experience, 2 projects"}, 
        {primary:"JAVA",secondary:"took AP CS in high school, and community college summer course", description:"4+ years of experience"},
        {primary:"JavaScript HTML/CSS", secondary:"designed website UI wireframes and animations", description:"4+ years of experience, 1 project"},
        {primary:"Machine Learning", secondary:"knows basic CNN algorithm, completed projects using Tensorflow/Keras", description:"2 years of experience, 2 projects"},
        {primary:"Full-Stack Development", secondary:"used MERN stacks and Azure hosting", description:"0.5 year of experience, 2 projects"},
        {primary:"Python", secondary:"knows basic libraries like Numpy, Pandas, etc.", description:"3 years of experience"},
        {primary:"PHP", secondary:"created website with Laravel and SQL database", description:"0.25 years of experience, 1 project"},
        {primary:"WebGL", secondary:"developed web app for rendering models using Three.JS", description:"0.25 years of experience, 1 project"}]
        return(
            <div className="info-div" id="skills">
                    <h1 style={{color:"white"}}>Skills</h1>
                    <p className="paragraph">Below are the programming langages I've programmed in and the technolognies I've worked with.</p>
                    <TurningCardsText items ={cards}/>
            </div>
        );
    }
}