import React, { useState } from "react";
import Header from "/src/components/header";
import Footer from "/src/components/footer";
import Dropdown from "/src/components/dropdown";
import Banner from "/src/components/banner";
import "./about.scss";

const About = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <>
      <Header />

      <main>
        <div className="content about__content">
          <Banner src="./aboutBanner.png" />

          <div className="menu">
            <Dropdown title="Fiabilité">
              <p className="menu__txt" onClick={handleClick}>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            </Dropdown>
            <Dropdown title="Respect">
              <p className="menu__txt" onClick={handleClick}>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </Dropdown>
            <Dropdown title="Service">
              <p className="menu__txt" onClick={handleClick}>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </Dropdown>
            <Dropdown title="Sécurité">
              <p className="menu__txt" onClick={handleClick}>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            </Dropdown>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
