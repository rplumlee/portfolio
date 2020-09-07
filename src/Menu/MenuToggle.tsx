import * as React from "react";
import { motion } from "framer-motion";

const Path = (props:any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

interface toggleProps {
  toggle: any,
  isOpen: boolean
}
export const MenuToggle = ({ toggle, isOpen}:toggleProps) => (
  <button onClick={toggle} className={isOpen ? "logo open menu-toggle" : "logo menu-toggle"} >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 23 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 23 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 23 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);
