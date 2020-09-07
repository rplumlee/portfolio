import * as React from "react";
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion";

export const Header = () => {

  const { scrollY } = useViewportScroll();
  const y1 = {y: useSpring(useTransform(scrollY, [0, 680, 20000], ["0%", "200px", "20000px"]), {damping: 12})};
  const y2 = {y: useSpring(useTransform(scrollY, [0, 680, 20000], ["0%", "300px", "20000px"]))};
  const y3 = {y: useSpring(useTransform(scrollY, [0, 680, 20000], ["0%", "400px", "20000px"]))};
  const y4 = {y: useSpring(useTransform(scrollY, [0, 680, 20000], ["0%", "500px", "20000px"]))};
  const y5 = {y: useSpring(useTransform(scrollY, [0, 680, 20000], ["0%", "0", "20000px"]))};
  const y6 = {y: useSpring(useTransform(scrollY, [0, 900, 20000], ["0%", "100px", "20000px"]))};
  const y8 = {y: useSpring(useTransform(scrollY, [0, 500], ["0%", "250px"])), opacity: useSpring(useTransform(scrollY, [0, 600], [1, .0]))};
  const [offsetTop, setOffsetTop] = React.useState(0);
  
  return(
    <div style={{overflowY: "hidden",width: "100vw"}}>
      
      <div className="parallax"style={{height: 800, overflow: "hidden", position: "relative"}}>
        
      <motion.img src="images/landing/5.jpg" initial={{ y: 0 }} style={ y5 }/>
      <motion.img src="images/landing/4.png" initial={{ y: 0 }} style={ y4 }/>
      <motion.img src="images/landing/3.png" initial={{ y: 0 }} style={ y3 }/>
      <motion.img src="images/landing/2.png" initial={{ y: 0 }} style={ y2 }/>
      <motion.img className="foreground" src="images/landing/1.png" initial={{ y: 0 }} style={ y1 }/>
      <motion.h1 initial={{ y: 0 }} style={ y8 } className="intro-h1"><span><span style={{fontWeight: 300,fontSize:"1.5em"}}>{'\{'}</span>React Perspective</span><small>By Reid Plumlee</small></motion.h1>
     


    
    
        
        
        
      </div>


  </div>
)};
