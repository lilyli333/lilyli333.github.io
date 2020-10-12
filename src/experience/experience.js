import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap'
import './experience.css'
import ExpandingCard from './card'

export default class Experience extends React.Component {
    render(){
        const cards = [{project:"SeaRay 2D Applicaiton", description:"some website", tags: ["ReactJS", "etc"]},
        {project:"SeaRay 2D Applicaiton", description:"some website", tags: ["ReactJS", "etc"]}];
        return(
            <div className="experience-div">
                <ExpandingCard items={cards}/>
            </div>
        );
    }
}
