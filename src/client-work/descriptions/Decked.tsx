import React from "react";
import { motion } from "framer-motion";


export function Decked() {
  return (
    <div className="smith-description">
      <div>
          <div className="content">
            <h3>Overview</h3>
            <p>
                We recently launched the Decked online store with a custom React interfaces. The site features customizable drawer systems for truck and is 
                heavy with product feature content and custom product category design.
            </p>
            
          </div>
          <div className="image"><motion.img src="../images/decked-2-min.png" whileHover={{scale: 1.7, zIndex: 5}}/></div>
      </div>

      <div>
        <div className="image"><motion.img src="../images/decked-1-min.png" whileHover={{scale: 1.7, zIndex: 5}}/></div>
        <div className="content">
            <h3>Development</h3>
            <p>
                Decked's theme development required heavy work with liquid templates for the layout and React for the product features, all optimized for a 
                professional feel. Recently I've been implementing i18next with locizify to translate the store dynamically.
            </p>
          </div>
      </div>

    </div>
  );
}

export default Decked