import React from "react";
import { useState } from "react";
import {Button} from 'react-bootstrap'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import './turning_cards.css'

export default function TurningCardsText(props) {
    var items = []
    for(var i in props.items){
        items.push(
          <Card primary={props.items[i].primary} secondary={props.items[i].secondary} description={props.items[i].description}/>
        );  
    }
    return(
        <div className="skills-card-div">
            {items}
        </div>
    );
}

function Card(props) {
    const variants = {
        open: { opacity: 1, width: "20vw" },
        closed: { opacity: 1, width: "30vw" },
    }
    let [isOpen,setIsOpen]=React.useState(false);
    return(
      <div>
        <div id="item-div">
            <motion.div
            animate={isOpen ? "closed" : "open"}
            transition={{duration: 0.3}}
            variants={variants}
            >
            <div id="item-background">
                <div className={isOpen ? "item-expanded" : "item-closed"} id="item">
                    <h6 hidden={isOpen}>{props.primary}</h6>
                    <h5 hidden={!isOpen}>{props.primary}</h5>
                    <p hidden={!isOpen} className="paragraph">{props.secondary}</p>
                </div>
                <Button onClick={() => setIsOpen(!isOpen)} id="card-button" style={{height:"fit-content"}} className="button">
                    <h1 hidden={isOpen}>+</h1>
                    <h1 hidden={!isOpen}>-</h1>
                </Button>
            </div>
            </motion.div>
            <div style={{position:"absolute", right:"5px", top: "50%", transform:"translate(0%, -50%)", width:"30%", padding:"7px"}}>
                <h6>{props.description}</h6>
            </div>
        </div>
    </div>
    );
}