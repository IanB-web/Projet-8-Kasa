import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../../router/routes";
import "./Thumb.scss";


const Thumb = ({ logement }) => {
  return (
    <NavLink to={routes.logements(logement.id)} className="thumb">
      <img src={logement.cover} alt={logement.title} className="thumb-img" />
      <h3>{logement.title}</h3>
    </NavLink>
  );
};

export default Thumb;
