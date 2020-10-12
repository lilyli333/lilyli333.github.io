import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap'
import Typist from "react-typist";
import './hero.css'
import './animation.scss'
import './stars.scss'

export default class Hero extends React.Component {
    gradientColors =  " #4484ce, #1ad7c0,#ff9b11, #9b59b6, #ff7f7f,#ecf0f1";

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
                    <p>Computer Science student at the University of Illinois Urbana-Champaign </p>
                    <p>passioante about human-computer interactions</p>
                </Typist>
                </Container>
            </Jumbotron>
        );
    }
}