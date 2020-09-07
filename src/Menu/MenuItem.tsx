import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, 
        FaUserCircle, 
        FaLaptopCode,
        FaDribbble } from "react-icons/fa"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["rgb(249,200,99)", "rgb(207,190,94)", "rgb(144,144,63)", "rgb(100,106,42)", "rgb(63,84,24)", "#4400FF"];

export const MenuItem = ({ id, url, label } : { id: number, url: string, label: string }) => {
  const style = { color: `${colors[id]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={url}>
        
        <div className="icon-placeholder" style={{color:"#222"}} >
          {id == 0 ? <FaUserCircle /> : ""}
          {id == 1 ? <FaLaptopCode /> : ""}
          {id == 2 ? <FaDribbble /> : ""}
          {id == 3 ? <FaUserCircle /> : ""}
        </div>
        <div className="text-placeholder" style={{color:"#222"}} >{label}</div>
      </Link>
    </motion.li>
  );
};
