import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap'
import Typist from "react-typist";
import './hero.css'
import './animation.scss'
import './stars.scss'

export default class Hero extends React.Component {
    gradientColors =  " #ABDFE7,#7CB7D7, #95DDED, #ABDFE7,#7CB7D7, #95DDED";

    render(){
        return(
            <Jumbotron
                fluid
                id="home"
                style={{
                background: `linear-gradient(136deg,${this.gradientColors})`,
                backgroundSize: "1200% 1200%",
                }}
                className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
            >
                <div id="stars"></div>
                <Container className="text-center">
                <header>Lily Li</header>
                <Typist className="lead typist" cursor={{ show: false }}>
                    <h4>Current undergraduate CS student at the University of Illinois at Urbana-Champaign</h4>
                </Typist>
                </Container>
            </Jumbotron>
        );
    }
}