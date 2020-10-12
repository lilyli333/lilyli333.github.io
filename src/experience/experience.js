import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap'
import './experience.css'
import ExpandingCard from './card'

export default class Experience extends React.Component {
    render(){
        const cards = [{project:"SeaRay 2D Applicaiton", description:"some website", tags: ["ReactJS", "etc"]},
        {project:"SeaRay 2D Applicaiton", description:"some website", tags: ["ReactJS", "etc"]},
        {project:"SeaRay 2D Applicaiton", description:"some website", tags: ["ReactJS", "etc"]},
        {project:"SeaRay 2D Applicaiton", description:"some website", tags: ["ReactJS", "etc"]}];
        return(
            <div className="experience-div">
                <h1>Brunswick Corporation</h1>
                <p className="paragraph">Below are the projects I worked on while interning at i-Jet Lab, the innovative branch of Brunswick Corporation.</p>
                <ExpandingCard items={cards}/>
            </div>
        );
    }
}
