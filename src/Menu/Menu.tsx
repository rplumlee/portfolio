import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = { 
  open: (height = 1000) => ({
    clipPath: `circle(1200px at 0px 0px)`,
    background: "rgba(255,255,255,1)",
    zIndex: 100,
    transition: {
      type: "spring",
      stiffness: 100,
      restDelta: 2,
      duration: .5,
      damping: 15,
    }
  }),
  closed: {
    clipPath: "circle(0px at 0px 0px)",
    background: "rgba(255,255,255,1)",
    zIndex: -1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      duration: .5
    }
  }
};

const navVariants = {
  "open": {
    zIndex: 100
  },
  "closed":{
    zIndex: -1,
    transition:{
      delay: .8
    }
  }
}

export const Menu = ({isOpen, toggleOpen}) => {
  const containerRef:any = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <span>
<motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      variants={navVariants}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation isOpen={isOpen} toggle={() => toggleOpen()}/>
      
    </motion.nav>
      <motion.span animate={isOpen ? "open" : "closed"} initial={false} className="menu-wrap"><MenuToggle toggle={() => toggleOpen()} isOpen={isOpen}  /></motion.span>
    </span>
    
  );
};

export default Menu