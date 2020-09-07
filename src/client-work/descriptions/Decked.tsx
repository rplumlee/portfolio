import React from "react";
import { motion } from "framer-motion";


export function Decked() {
  return (
    <div className="smith-description">
      <div>
          <div className="content">
            <h3>Overview</h3>
            <p>
                Since our team built out this site (nearly 7 years ago), Smith has become the most successful ecommerce channel for their 
                parent company by a large margin. I served as account lead for the last year, consulting with the Smith team and working on 
                the code base leading up to their transition to a new site. 
            </p>
            
          </div>
          <div className="image"><motion.img src="../images/decked-1.png" whileTap={{scale: 2, zIndex: 5}}/></div>
      </div>

      <div>
        <div className="image"><motion.img src="../images/decked-2.png" whileTap={{scale: 2, zIndex: 5}}/></div>
        <div className="content">
            <h3>Development</h3>
            <p>
                The site is built on SAP's Hybris ecommerce platform, with a JAVA/Spring backend and JSTL templating. 
                My development time was split pretty evenly between maintenance, feature development, and design. I extended 
                the java backend, designed and coded product features and landing pages, integrated 3rd party plugins and analytics,
                and built out interfaces with React. 
            </p>
          </div>
      </div>

    </div>
  );
}

export default Decked