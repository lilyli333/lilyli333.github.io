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
    const tags = []
    for(var i in props.tags){
        tags.push(
            <div className="tag-button">
                <h6>{props.tags[i]}</h6>
            </div>
        );
    }
    return(
      <div>
        <motion.div
            whileHover={{
                scale: 1.05
            }}
            whileTap={{ scale: 0.995 }}
            transition={{duration: 0.1}}
            className="card-div"
        >
            <div style={{zIndex:"500"}}>
            <h5>{props.project}</h5>
            <p className="paragraph">{props.description}</p>
            <div className="tags-div">{tags}</div>
            </div>
        </motion.div>
      </div>
    );
}