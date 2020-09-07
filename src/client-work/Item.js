import React from "react";
import { Link } from "react-router-dom";
import { items } from "./data";
import { useDomEvent, motion, useMotionValue, usePresence } from "framer-motion";
import { spring } from "popmotion";
import { mix } from "@popmotion/popcorn";
import { debounce } from "lodash";
import { Smith } from "./descriptions/Smith"
import { Decked } from "./descriptions/Decked"
import { SIP } from "./descriptions/SIP"
import { Moore } from "./descriptions/Moore"
import { FirstLite } from "./descriptions/FirstLite"
import { VSV } from "./descriptions/VSV"

export function Item({ id, history }) {
  let constraints = {
    top: -0,
    bottom: 0
  }
  const { category, title, titleColor } = items.find(item => item.id === id);
  const cardRef = React.useRef(null);
  const containerRef = React.useRef(window);
  const dismissDistance = 120;
  const y = useMotionValue(0);
  const zIndex = useMotionValue(isPresent ? 2 : 0);
  const [isPresent, safeToRemove] = usePresence()

  React.useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 350)


    isPresent && setTimeout(() => { 
      constraints = calculateScrollConstraints(cardRef)
    }, 350)

    
  }, [isPresent])

  function calculateScrollConstraints(ref){
    const element = ref.current;
    const viewportHeight = window.innerHeight;
    const contentTop = element.offsetTop;
    const contentHeight = element.offsetHeight;
    const scrollableViewport = viewportHeight - contentTop * 2;
    const top = Math.min(scrollableViewport - contentHeight, 0);
    let newConstraints = { top, bottom: 0 } 
    return newConstraints;
   }

  function checkSwipeToDismiss(latest) {
    if(y.get() > dismissDistance){
      y.set(0)
      history.push("/client-work")
    }
  } 
  let deltaThreshold = 5;

  // If wheel event fires beyond constraints, multiple the delta by this amount
  let elasticFactor = .5;
  
  function springTo(value, from, to) {
    if (value.isAnimating()) return;
  
    value.start(complete => {
      
      const animation = spring({
        from,
        to,
        velocity: value.getVelocity(),
        stiffness: 200,
        damping: 40
      }).start({
        update: (v) => value.set(v),
        complete
      });
      return () => animation.stop();
    });
  }
  
  const debouncedSpringTo = debounce(springTo, 50);
  const onWheelCallback = (e) => { }
  let lastY = false;
  let startY = 0;
  const onWheel = (event) => {
    event.stopPropagation();
    event.preventDefault();

    
    if(event.type == 'touchmove'){
      elasticFactor = .5
      if(lastY){

        event.deltaY = (lastY - event.changedTouches[0].clientY) * 1.33
        
        lastY = event.changedTouches[0].clientY
      }
      else{
        event.deltaY = (startY - event.changedTouches[0].clientY) * 1.33

        console.log(event.deltaY)
        lastY = event.changedTouches[0].clientY
      }

    }
    else{
      elasticFactor = .3
    }

    const currentY = y.get();
    let newY = currentY - event.deltaY * .75;
    let startedAnimation = false;
    const isWithinBounds =
      constraints && newY >= constraints.top && newY <= constraints.bottom;

    if (constraints && !isWithinBounds) {
      newY = mix(currentY, newY, elasticFactor);

      if (newY < constraints.top) {
        if (event.deltaY <= deltaThreshold) {
          springTo(y, newY, constraints.top);
          startedAnimation = true;
        } else {
          debouncedSpringTo(y, newY, constraints.top);
        }
      }

      if (newY > constraints.bottom) {
        if (event.deltaY >= -deltaThreshold) {
          springTo(y, newY, constraints.bottom);
          startedAnimation = true;
        } else {
          debouncedSpringTo(y, newY, constraints.bottom);
        }
      }
    }

    if (!startedAnimation) {
      y.stop();
      y.set(newY);
    } else {
      debouncedSpringTo.cancel();
    }

    checkSwipeToDismiss();

    onWheelCallback(event);
  };

  const onTouchStart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    startY = event.touches[0].clientY }

  const onTouchEnd = (event) => {
    lastY = false }

  useDomEvent(containerRef, "touchstart", isPresent && onTouchStart, { passive: false });
  useDomEvent(containerRef, "touchend", isPresent && onTouchEnd, { passive: false });
  useDomEvent(containerRef, "touchmove", isPresent && onWheel, { passive: false });
  useDomEvent(containerRef, "wheel", isPresent && onWheel, { passive: false });

  console.log(cardRef)
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        className="overlay"
      >
        <Link to="/client-work/" />
      </motion.div>
      <div className="card-content-container open" style={{zIndex:5}}>
        <motion.div className="card-content" layoutId={`card-container-${id}`} 
            style={isPresent ? {y} : {y: 0}}
            ref={cardRef}
            >
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`./images/${id}.png`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span style={{color: titleColor}} className="category">{category}</span>
            <h2 style={{color: titleColor}}>{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            <Description id={id} />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}


function Description({id}){
  switch(id){
    case 'smith': 
      return <Smith />
    case 'decked': 
      return <Decked />
    case 'vsv': 
      return <VSV />
    case 'firstlite': 
      return <FirstLite />
    case 'moore': 
      return <Moore />
    case 'sip': 
      return <SIP />
    default: 
      return (
        <p>Default</p>
      )
  }
}