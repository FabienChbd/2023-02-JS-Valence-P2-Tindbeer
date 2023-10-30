import React, { useState } from "react";
import PropTypes from "prop-types";

function Card({ name, color, image, origin, alcohol, ibu, ebc, texte }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  let card;
  if (isMouseOver) {
    card = (
      <div className="beerDetail">
        <p>{texte}</p>
      </div>
    );
  } else {
    card = (
      <div className="content">
        <p className="beerTitle">{name}</p>
        <p>Bière de type : {color}</p>
        <p>Origine : {origin}</p>
        <p>Degré d'alcool : {alcohol}</p>
        <p>Amertume : {ibu !== 0 ? ibu : "N/C"}</p>
        <p>EBC : {ebc !== 0 ? ebc : "N/C"}</p>
      </div>
    );
  }

  return (
    <div
      className="cardOfBeer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="picture">
        <img src={image} alt={name} className="beer-picture" />
      </div>
      {card}
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  alcohol: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  ebc: PropTypes.number.isRequired,
  texte: PropTypes.string.isRequired,
};

export default Card;
