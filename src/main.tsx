import * as React from "react";
import { render } from "react-dom";
import { Header } from "./Header";
import { ClientWork } from "./ClientWork";
import Menu from './Menu/Menu';
import { motion, AnimateSharedLayout, useCycle } from "framer-motion";
import RPParticles from './RPParticles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { FaEnvelope, 
  FaFileCode, 
  FaLinkedin,
  FaGithub } from "react-icons/fa"


import "./styles.scss";
document.title = "Reid's Portfolio"


export const Main = () => {
  const [partyMode, setPartyMode] = React.useState(false);
  const [selected, setSelected] = React.useState(colors[0]);
  const toggleSwitch = () => setPartyMode(!partyMode);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const location = useLocation();

  React.useEffect(() => {
    isOpen ? toggleOpen() : {}
    setPartyMode(false)
  }, [location]);

  const variants = {
    hover: {
      opacity: 1,
      x: 0
    }
  }
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  
enum Type {
    inline = "inline",
    inside = "inside",
    outside = "outside",
    none = "none"
}


  return (
   
      
    
      
        <div style={{width:"100vw"}}>
        <Menu isOpen={isOpen} toggleOpen={toggleOpen} />
          <div style={{width: "100%"}}>
           

            <Switch>
              <Route path="/client-work">
                <Link to="/client-work" />
                <div className="container"> 
                  <h1 className="title">Client Work</h1>
                  <ClientWork />
                </div>
              </Route>
              <Route path="/playground">
                <div className="container"> 
                  <h1 className="title">Just For Fun</h1>
                </div>
              </Route>
              <Route path="/resume">
                <div className="container resume"> 
                  <img src={`${process.env.PUBLIC_URL}/images/resume.png`} />
                </div>
              </Route>
              <Route path="/">
                <div className="contact">
                  <motion.a whileHover="hover" whileTap="hover" layout href="mailto:reidjplumlee@gmail.com"><FaEnvelope size={20} /><motion.span initial={{opacity:0, x: 30}} variants={variants}>reidjplumlee@gmail.com</motion.span></motion.a>
                  <motion.a whileHover="hover" whileTap="hover" layout href={`${process.env.PUBLIC_URL}/resume`}><FaFileCode size={20} /><motion.span initial={{opacity:0, x: 30}} variants={variants}>Resume</motion.span></motion.a>
                  <motion.a whileHover="hover" whileTap="hover" layout href="https://linkedin.com/in/reid-plumlee" target="_blank"><FaLinkedin size={20} /><motion.span initial={{opacity:0, x: 30}} variants={variants}>Linkedin</motion.span></motion.a>
                </div>
                <div className="switch" data-partymode={partyMode} onClick={toggleSwitch}>
                  <motion.div className="handle" layout transition={spring} ></motion.div>
                </div>
                <div className="theme">
                  <AnimateSharedLayout>
                    <ul>
                      {colors.map((color, i) => (
                        <Item
                          key={color}
                          color={color}
                          isSelected={selected === color}
                          borderColor={borderColors[i]}
                          onClick={() => setSelected(color)}
                        />
                      ))}
                    </ul>
                  </AnimateSharedLayout>
                </div>
                <div className="container"> 
                  <motion.div className="profile-wrapper" animate={!partyMode ? {opacity: 1} : {opacity: 0}}>
                    <img src="images/me.jpg" className="avatar" />
                    <h1>Reid Plumlee</h1>
                    <p style={{color:"#f5f5f5"}}>Frontend Engineer</p>

                  </motion.div>  
                  
                </div>
              </Route>
            </Switch>
          </div>
          
          {partyMode ? 

            <RPParticles />
          
          : ""}

          <div className="background" style={{background: selected,position:"fixed",height:"100%",width:"100%",top:0,left:0,zIndex:-2}}></div>
        </div>   
    

  );
}

function Item({ color, isSelected, onClick, borderColor }) {
  return (
    <li className="item" onClick={onClick} style={{ background: color }}>
      {isSelected && (
        <motion.div
          layoutId="outline"
          className="outline"
          initial={false}
          animate={{ borderColor: borderColor }}
          transition={spring}
        />
      )}
    </li>
  );
}

const colors = ["#222222", "linear-gradient(to top right, rgb(247, 201, 192), rgb(203, 191, 158), rgb(158, 180, 125), rgb(109, 168, 92), rgb(47, 155, 58))", "linear-gradient(to top right, rgb(191, 2, 2), rgb(188, 69, 63), rgb(177, 103, 118), rgb(151, 133, 176), rgb(84, 162, 236))", "linear-gradient(to top right, rgb(32, 68, 186), rgb(54, 104, 199), rgb(64, 140, 212), rgb(67, 176, 225), rgb(62, 214, 237))"];
const borderColors = ["#222222", "rgb(158, 180, 125)", "rgb(191, 2, 2)", "rgb(32, 68, 186)"];

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};

export default Main