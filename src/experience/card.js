import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import './cards.css'


export default function ExpandingCard(props) {
    var cards = []
    for(var i in props.items){
        cards.push(
          <Card project={props.items[i].project} img={props.items[i].img} description={props.items[i].description} tags={props.items[i].tags}/>
        );  
    }
    return(
        <div className="cards-div">
            {cards}
        </div>
    );
}

function Card(props) {
    let [hover,setHover]=React.useState(false);
    return(
      <div>
        <motion.div
            whileHover={{
                scale: [1, 1.1],
                rotate: [0, 360],
            }}
            transition={{duration: 0.3}}
            className={hover ? "item-secondary" : "item-primary"}
            onMouseOver={()=>setHover(true)} 
            onMouseOut={()=>setHover(false)}
        >
            <h5 className="item-text" hidden={!hover}>{props.project}</h5>
            <h3 className="item-text" hidden={hover}>{props.description}</h3>
        </motion.div>
      </div>
    );
}