import React from "react";
import { motion } from "framer-motion";


export function SIP() {
  return (
    <div className="smith-description">
      <div>
          <div className="content">
            <h3>Overview</h3>
            <p>
                Senior Insurance Partner needed a site with a custom quote engine quickly, and I delivered on the side in about a week. There's nothing very complex here, 
                but I'm proud of how the design turned out. 
            </p>
            
          </div>
          <div className="image"><motion.img src="../images/sip-1-min.png" whileHover={{scale: 1.7, zIndex: 5}}/></div>
      </div>

      <div>
        <div className="image"><motion.img src="../images/sip-2-min.png" whileHover={{scale: 1.7, zIndex: 5}}/></div>
        <div className="content">
            <h3>Development</h3>
            <p>
                This is just a 2 page site, and didn't require anything beyond some good old CSS and jQuery calls. I built out a clean homepage with lots of 
                icon features, and a simple, clean quote engine that calls an insurance policy API based on some questions to the user. I used clean, simple loading 
                states and chained some email actions on the end of the process.
            </p>
          </div>
      </div>

      
    </div>
  );
}

export default SIP