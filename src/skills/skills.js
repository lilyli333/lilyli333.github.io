import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap'
import github_logo from '../assets/github_logo.png'
import TurningCardsText from './turning_cards'
import './skills.css'
import android from '../assets/android.png'
import c from '../assets/c.png'
import apple from '../assets/apple.jpg'
export default class Skills extends React.Component {
    render(){
        //, , , ,  (TensorFlow, Keras, MobileNet), NodeJS, python, React, Swift
        const cards = 
        [{primary:"Android Development", secondary:"used JAVA to create mobile apps", description:"5+ years of experience"}, 
        {primary:"C/C++", secondary:"took course on Data Structures in C++", description:"1+ years of experience"}, 
        {primary:"iOS Development",secondary:"developed both professional and interest project apps", description:"4+ years of experience"}, 
        {primary:"JAVA",secondary:"took AP CS in high school, and community college summer course", description:"4+ years of experience"},
        {primary:"JavaScript HTML/CSS", secondary:"designed website UI wireframes and animations", description:"4+ years of experience"},
        {primary:"Machine Learning", secondary:"knows basic CNN algorithm, completed projects using Tensorflow/Keras", description:"3+ years of experience"},
        {primary:"Full-Stack Development", secondary:"used MERN stacks and Azure hosting", description:"0.5 year of experience"},
        {primary:"Python", secondary:"knows basic libraries like Numpy, Pandas, etc.", description:"4+ years of experience"}]
        return(
            <div className="info-div" id="skills-div">
                    <h1 style={{color:"white"}}>Skills</h1>
                    <p className="paragraph">Below are the programming langages I've programmed in and the technolognies I've worked with.</p>
                    <TurningCardsText items ={cards}/>
            </div>
        );
    }
}