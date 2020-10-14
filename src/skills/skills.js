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
        [{primary:"Android Development", secondary:"5+ years of experience", img: android}, 
        {primary:"C/C++", secondary:"1+ years of experience", img: c}, 
        {primary:"iOS Development",secondary:"4+ years of experience", img: apple}, 
        {primary:"JAVA",secondary:"4+ years of experience", img: android},
        {primary:"JavaScript HTML/CSS",secondary:"4+ years of experience", img: android},
        {primary:"Machine Learning", secondary:"3+ years of experience", img: android},
        {primary:"Full-Stack Development", secondary:"0.5 year of experience", img: android},
        {primary:"Python", secondary:"4+ years of experience", img: android}]
        return(
            <div className="info-div" id="skills-div">
                    <h1 style={{color:"white"}}>Skills</h1>
                    <p className="paragraph">Below are the programming langages I've programmed in and the technolognies I've worked with.</p>
                    <TurningCardsText items ={cards}/>

            </div>
        );
    }
}