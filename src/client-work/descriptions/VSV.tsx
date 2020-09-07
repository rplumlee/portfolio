import React from "react";
import { motion } from "framer-motion";


export function VSV() {
  return (
    <div className="smith-description">
      <div>
          <div className="content">
            <h3>Overview</h3>
            <p>
              Another client I've spent quite a bit of time working with is Visit Sun Valley. It is an expansive Wordpress site with all 
              sorts of tourism resources for Sun Valley, Idaho featuring custom plugins, post types, and templates.
            </p>
            
          </div>
          <div className="image"><motion.img src="../images/vsv-1-min.png" whileHover={{scale: 1.7, zIndex: 5}}/></div>
      </div>

      <div>
        <div className="image"><motion.img src="../images/vsv-2-min.png" whileHover={{scale: 1.7, zIndex: 5}}/></div>
        <div className="content">
            <h3>Development</h3>
            <p>
                I've done all sorts of maintenance and work on this site. Most of the templating for the site resources was done in PHP, but the 
                interfaces often involved Greensock or Handlebars. Recently I integrated and built out the structure of FlowXO chatbot and have 
                been working on a custom redo of their calendar plugin using Wordpress' REST API and Handlebars.
            </p>
          </div>
      </div>

    </div>
  );
}

export default VSV