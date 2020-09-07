import React from "react";
import { motion } from "framer-motion";


export function SIP() {
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
          <div className="image"><motion.img src="../images/smith-1.png" whileTap={{scale: 2, zIndex: 5}}/></div>
      </div>

      <div>
        <div className="image"><motion.img src="../images/smith-3.png" whileTap={{scale: 2, zIndex: 5}}/></div>
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

      <div>
        <div className="content">
            <h3>Challenges</h3>
            <p>
                This engagement called for quick maintenance response times and reliable code deployments to avoid any store downtime. 
                Maintaining the clunky Java backend while integrating modern tools on the frontend to find new ways to engage users 
                was a continual balancing act. Recently, I handled and massaged their customer data (.csv to .xml, don't try it at home) 
                to facilitate a smooth site transition.
            </p>
            
          </div>
          <div className="image"><motion.img src="../images/smith-2.png" whileTap={{scale: 2, zIndex: 5}}/></div>
      </div>
    </div>
  );
}

export default SIP