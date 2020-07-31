import * as React from "react";
import { Avatar } from "react-lorem-ipsum";
import { motion, useInvertedScale } from "framer-motion";

export const Header = () => (
  <header style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", position: "relative"}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:"absolute",top:-80,left:"50%",transform: "translateX(-50%) rotate(180deg)",width: "100vw",zIndex:-1}}>
    <path fill="#273036" fill-opacity=".5" d="M0,224L60,192C120,160,240,96,360,90.7C480,85,600,139,720,138.7C840,139,960,85,1080,58.7C1200,32,1320,32,1380,32L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
  </svg>
  <h2>Some things I've been working on</h2>
   
      <motion.img
        className="me-image"
        src="images/me.jpg"
        alt=""
        style={{borderRadius: 35, height:70, width:70}}
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
      />
   
          
  </header>
);
