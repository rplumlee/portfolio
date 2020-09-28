import React from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ id, title, category, theme, titleColor }) {
  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`} layout>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <motion.img className="card-image" src={`${process.env.PUBLIC_URL}/images/${id}.png`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category" style={{color: titleColor}}>{category}</span>
            <h2 style={{color: titleColor}}>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={`/client-work/${id}`} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId }) {
  return (
    <ul className="card-list">
      {items.map(card => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
