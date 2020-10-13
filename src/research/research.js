import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap'
import './research.css'

export default class Research extends React.Component {
    
    render(){
        const tags_arr = ["Mobile App Development", "Android", "Machine Learning"];
        const tags = []
        for(var i in tags_arr){
            tags.push(
                <div className="tag-button">
                    <h6 style={{width:"fit-content", flexGrow: "4"}}>{tags_arr[i]}</h6>
                </div>
            );
        }
        return(
            <div className="about-me-div">
                <div style={{zIndex:"50", width:"100vw", display:"flex", flexDirection:"column", justifyContent:"space-around", padding:"2vw"}}>
                    <h1>Research: Using ML to Detect Fertilizer Adulteration</h1>
                    <br/>
                    <p>The research is led by Professor Hope Michelson in the Department of Agricultural and Consumer Economics (ACE) at UIUC. Current use of fertilizer in Tanzania has decreased, leading to lower agricultural productivity. The innovation aims to assist farmers in developing countries by detecting adulterated fertilizers using machine learning image classifier algorithms embedded in mobile solutions. We are working in collaboration with local farmers and government regulatory agencies, directly impacting them through novel technologies.</p>
                    <div className="tags-div">{tags}</div>
                </div>
            </div>
        );
    }
}