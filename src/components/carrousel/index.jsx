import { useState } from "react";
import "./carrousel.scss";

import rightArrow from "../../assets/img/arrow_right.png";
import leftArrow from "../../assets/img/arrow_left.png";

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // State > Index de l'image actuelle

  function nextImage() {
    // Passe a l'image suivante
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }

  function prevImage() {
    // Passe a l'image precedente
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }

  return (
    <div className="carrousel">
      {images.length > 1 && ( // Si il n'y a qu'une seul image, on n'affiche seulement l'image
        <>
          {/* // Affiche le compteur d'image */}
          <p className="carrousel__count">
            {currentIndex + 1} / {images.length}
          </p>

          {/* // Affiche les fleches de navigation, au click on passe a l'image suivante ou precedente */}
          <img
            className="arrow arrow__left"
            src={leftArrow}
            alt="Flèche gauche"
            onClick={prevImage}
          />
          <img
            className="arrow arrow__right"
            src={rightArrow}
            alt="Flèche droite"
            onClick={nextImage}
          />
        </>
      )}

      {/* // Affiche l'image actuelle en fonction de l'index */}
      <img className="carrousel__img" src={images[currentIndex]} alt="Logement" />
    </div>
  );
};

export default Carrousel;
