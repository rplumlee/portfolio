import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { closeSpring } from "./animations";

export const Image = ({
  id,
  isSelected,
  pointOfInterest = 0,
  width,
  startX,
  endX,
  startY,
  endY,
  overlayColor
}) => {
  const inverted = useInvertedScale();

  return (
    <motion.div
      className="card-image-container"
      style={{ ...inverted, originX: 0, originY: 0 }}
    > <div className="card-image-overlay" style={{background: overlayColor}}></div>
      <motion.img
        className="card-image"
        src={`images/${id}.png`}
        alt=""
        initial={false}
        animate={
          isSelected ? { x: endX, y: endY} : { x: startX, y: startY }
        }
        style={{width: width}}
        transition={closeSpring}
      />
    </motion.div>
  );
};
