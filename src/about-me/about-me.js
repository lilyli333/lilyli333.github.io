import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap'
import './about-me.css'
import portrait from '../assets/portrait.jpg'
import resume from '../assets/resume.pdf'

export default class AboutMe extends React.Component {
    render(){
        return(
            <div id="about" style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <img src={portrait} id="portrait-img"/>
                <div style={{zIndex:"50", width:"50vw", display:"flex", flexDirection:"column", justifyContent:"space-around", padding:"2vw"}}>
                    <h1>About Me</h1>
                    <br/>
                    <p> Hello there! My name is Lily Li. </p>
                    <p> 
                        I am an undergraduate student studying Computer Science with a minor in Business at the University of Illinois Urbana-Champaign.
                        On campus, I am a small group leader in the Navigators (a Christian fellowship), and a mentor in the Bits and Bytes program hosted by Women in Computer Science (WCS).
                    </p>
                    <p> 
                        In my free time, I love watching sitcoms, embroidering, and hiking. I am devoted to taste testing every possible of Kombucha and visiting all 63 US national parks.
                    </p>
                    <Button className="button" id="resume-button" href={resume} target='_blank'>RESUME</Button>
                </div>
            </div>
        );
    }
}