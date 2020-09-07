import React from "react";
import { motion } from "framer-motion";


export function Moore() {
  return (
    <div className="smith-description">
      <div>
          <div className="content">
            <h3>Overview</h3>
            <p>
                This was my first custom Shopify theme. The client wanted a clean but unique look and feel to feature their product imagery, 
                and didn't like anything the theme store had to offer, so I decided to build them a custom one.
            </p>
            
          </div>
          <div className="image"><motion.img src="../images/moore-1-min.png" whileHover={{scale: 1.7, zIndex: 5}}/></div>
      </div>

      <div>
        <div className="image"><motion.img src="../images/moore-2-min.png" whileHover={{scale: 1.7, zIndex: 5}}/></div>
        <div className="content">
            <h3>Development</h3>
            <p>
                Moore's store was built with custom liquid templating and plain old jQuery. I integrated fullpage.js into the theme and 
                built out the liquid sections to that the client has full control over adding and removing content while choosing from options for a 
                variety of different layouts.
            </p>
          </div>
      </div>

      
    </div>
  );
}

export default Moore