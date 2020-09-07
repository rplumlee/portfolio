import React from "react";
import { motion } from "framer-motion";


export function FirstLite() {
  return (
    <div className="smith-description">
      <div>
          <div className="content">
            <h3>Overview</h3>
            <p>
                First Lite is a successful outdoors apparell brand that my team designed, built out and maintained a custom shopify theme for. 
                The store features a large diverse product base, a blog, and a whole lot of landing pages.
            </p>
            
          </div>
          <div className="image"><motion.img src="../images/firstlite-1-min.png" whileHover={{scale: 1.7, zIndex: 5}}/></div>
      </div>

      <div>
        <div className="image"><motion.img src="../images/firstlite-2-min.png" whileHover={{scale: 1.7, zIndex: 5}}/></div>
        <div className="content">
            <h3>Development</h3>
            <p>
                First Lite's store packs a lot of customization into standard Shopify features. The theme is functional and clean, with 
                custom content sections and handlebars driven collection templates. Most recently I've been building out product and athlete feature 
                landing pages with Greensock.
            </p>
          </div>
      </div>

      
    </div>
  );
}

export default FirstLite