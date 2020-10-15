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
    let [isOpen,setIsOpen]=React.useState(false);
    return(
      <div>
        <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
            transition={{duration: 0.3}}
        >
        </motion.div>
        <div id="item-div">
            <div id="item-background">
                <div className={isOpen ? "item-expanded" : "item-closed"} id="item">
                    <h6 hidden={isOpen}>{props.primary}</h6>
                    <h5 hidden={!isOpen}>{props.primary}</h5>
                    <p hidden={!isOpen} className="paragraph">{props.secondary}</p>
                </div>
                <Button onClick={() => setIsOpen(!isOpen)} id="card-button" style={{height:"fit-content"}}>
                    <h1 hidden={isOpen}>+</h1>
                    <h1 hidden={!isOpen}>-</h1>
                </Button>
            </div>
            <div hidden={isOpen}>
                <h6>{props.description}</h6>
            </div>
        </div>
    </div>
    );
}