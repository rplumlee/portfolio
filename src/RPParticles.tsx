import * as React from "react";
import Particles from 'react-particles-js';


export const RPParticles = () => {

  
enum Type {
    inline = "inline",
    inside = "inside",
    outside = "outside",
    none = "none"
}


  return (
   
      <div className="home-particles">
<Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 40
	        },
	        "size": {
	            "value": 2
            },
            "line_linked": {
	            "enable": true,
	            "distance": 250,
	            "opacity": 0.2
	        },
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />

        </div>   
    

  );
}

export default RPParticles