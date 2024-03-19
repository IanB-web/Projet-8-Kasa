import React, { useEffect, useState } from "react";
import Thumb from "./thumb";
import "./gallery.scss";


const Gallery = () => {

  const [galleryData, setGalleryData] = useState([]);

  const getData = () => {
    fetch("/logements.json")
      .then((res) => {return res.json()})
      .then((logements) => setGalleryData(logements))
  };

  useEffect(() => getData(), []);

  return (
    <div className="gallery">
      <ul>
        {galleryData.map((logement) => (
          <Thumb key={logement.id} logement={logement} />
        ))}
      </ul>
    </div>
  );

};

export default Gallery;
