import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../../router/routes";
import "./navigation.scss"

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to={routes.home}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to={routes.about}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
