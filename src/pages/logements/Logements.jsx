import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Header from "/src/components/header";
import Footer from "/src/components/footer";
import Error from "/src/components/error";
import Dropdown from "/src/components/dropdown";
import Rating from "/src/components/rating";
import Carrousel from "/src/components/carrousel";
import "./logement.scss";

const Logement = () => {
  const { id } = useParams();

  const [logement, setLogement] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError404, setIsError404] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => {
        return response.json(); // Retourner le contenu de la réponse
      })
      .then((logements) => {
        // Récupérer le logement qui correspond à l'id et le mettre dans un state
        const result = logements.find((logement) => logement.id === id);
        if (result === undefined) {
          setIsError404(true);
        }
        setLogement(result);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <p>Chargement en cours</p>;

  if (isError) {
    return <p>une erreur est survenue</p>;
  }

  if (isError404) {
    return <Error />;
  }

  return (
    <>
      <Header />
      <div className="logement">
        <Carrousel images={logement.pictures} />

        <div className="logement__info">
          <div className="logement__intro">
            <h1 className="logement__title">{logement.title} </h1>
            <span className="logement__location">{logement.location}</span>
            <div className="tags">
              {logement.tags.map((tag) => (
                <p className="tag" key={tag}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="host">
            <div className="host__info">
              <p className="host__name">{logement.host.name}</p>
              <img
                src={logement.host.picture}
                alt=""
                className="host__portrait"
              />
            </div>
            <Rating rating={logement.rating} />
          </div>
        </div>

        <div className="logement__dropdown">
          <Dropdown title="Description">
            <p className="menu__txt" onClick={handleClick}>
              {logement.description}
            </p>
          </Dropdown>
          <Dropdown title="Équipements">
            <div className="menu__txt" onClick={handleClick}>
              <ul>
                {logement.equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            </div>
          </Dropdown>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Logement;
