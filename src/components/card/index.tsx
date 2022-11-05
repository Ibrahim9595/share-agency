import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Card = ({ name, icon, desc }) => {
  return (
    <Link to="/contact" className="card-container">
      <img src={icon} alt="icon" className="icon" />
      <h4 className="name">{name}</h4>
      <p className="desc">{desc}</p>
    </Link>
  );
};
export default Card;
