import * as React from "react";
import { Avatar } from "react-lorem-ipsum";
import { motion, useInvertedScale } from "framer-motion";

export const Header = () => (
  <header style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px"}}>
<h1>Some things I've been working on...</h1>
   
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
