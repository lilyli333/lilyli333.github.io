import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap'
import './footer.css'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github_logo.png'
import mail from '../assets/mail.png'

export default class Footer extends React.Component {
    render(){
        return(
            <div className="info-div" id="footer-div">
                <a href="https://www.linkedin.com/in/jiayu-lily-li/"><img src={linkedin} style={{width:"30px", height:"30px", margin:"10px"}}/></a>
                <a href="https://www.github.com/lilyli333"><img src={github} style={{width:"30px", height:"30px", margin:"10px"}}/></a>
                <a href={"mailto:" + "lily.jiayu@gmail.com"}><img src={mail} style={{width:"30px", height:"30px", margin:"10px"}}/></a>
            </div>
        );
    }
}
