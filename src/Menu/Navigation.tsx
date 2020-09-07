import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

interface toggleProps {
  toggle: any,
  isOpen: boolean
}

export const Navigation = ({ toggle, isOpen}:toggleProps) => (
  <motion.ul variants={variants} className={isOpen ? "open" : " "}>
    {items.map(i => (
      <MenuItem {...i} key={i.id} />
    ))}
  </motion.ul>
);

const items = [{
                id: 0,
                url: '/',
                label: "Profile"
              },
              {
                id: 1,
                url: '/client-work',
                label: "Client Work"
              },
              {
                id: 2,
                url: '/playground',
                label: "Playground"
              }]