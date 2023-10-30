import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function BeerCards({ beer }) {
  return (
    <div>
      {beer.length === 0 ? (
        <p className="noBeer">Aucune bière trouvée.</p>
      ) : (
        <div className="beerCards">
          {beer.map((val) => (
            <Card
              key={val.id}
              name={val.name}
              color={val.color}
              image={val.image}
              origin={val.origin}
              alcohol={val.alcohol}
              ibu={val.ibu}
              ebc={val.ebc}
              texte={val.texte}
            />
          ))}
        </div>
      )}
    </div>
  );
}

BeerCards.propTypes = {
  beer: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default BeerCards;
