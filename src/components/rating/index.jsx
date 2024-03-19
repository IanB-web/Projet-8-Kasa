import React from "react";
import activeStar from "../../assets/img/activeStar.svg";
import inactiveStar from "../../assets/img/inactiveStar.svg";
import "./rating.scss";

const Rating = ({ rating }) => {
  const stars = []; // Creer un tableau pour stocker les étoiles

  for (let i = 1; i <= 5; i++) {
    // Boucle pour afficher les étoiles
    if (i <= rating) {
      // Tant que i est inférieur ou égal à la note on injecte des étoiles pleines
      stars.push(
        <img className="stars" key={i} src={activeStar} alt="star-filled" />
      );
    } else {
      // Sinon on injecte une étoile vide
      stars.push(
        <img className="stars" key={i} src={inactiveStar} alt="star-empty" />
      );
    }
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
