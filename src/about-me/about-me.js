import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap'
import './about-me.css'
import portrait from '../assets/portrait.JPG'

export default class AboutMe extends React.Component {
    render(){
        return(
            <div id="about">
                <img src={portrait} id="portrait-img"/>
                <div style={{zIndex:"50", width:"50vw", display:"flex", flexDirection:"column", justifyContent:"space-around", padding:"2vw"}}>
                    <h1>About Me</h1>
                    <br/>
                    <p>Hello there! My name is Lily Li. </p>
                    <p>I’m studying Computer Science with a minor in Business at the University of Illinois Urbana-Champaign.
                        I am currently interning at Brunswick Corporation, working on a myriad of different projects, spanning from full-stack development to robotics.
                        In my free time, I love jamming on the guitar or piano with my friends!  
                    </p>
                </div>
            </div>
        );
    }
}