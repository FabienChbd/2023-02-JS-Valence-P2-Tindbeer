import { useState } from "react";
import PropTypes from "prop-types";
import TinderCard from "react-tinder-card";
import "./Home.css";

function Home({ beer }) {
  const beerDataSort = beer.sort(() => Math.random() - 0.5);
  const beerDataRandom = beerDataSort.slice(0, 19);
  const [lastDirection, setLastDirection] = useState();
  const [infoTextClass, setInfoTextClass] = useState("infoText");

  const swiped = (direction) => {
    setLastDirection(direction);
    setInfoTextClass("infoText show");
    setTimeout(() => {
      setInfoTextClass("infoText");
    }, 2000);
  };

  return (
    <div className="tinderCard">
      <h1>Swipe it!</h1>
      <div className="cardContainer">
        {beerDataRandom.map((character) => (
          <TinderCard
            className="swipe"
            key={character.id}
            onSwipe={(dir) => swiped(dir)}
          >
            <div
              style={{ backgroundImage: `url(${character.image})` }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <h2 className={infoTextClass}>
        {lastDirection === "right"
          ? "🍻 You like it! 🍻"
          : "❌ Not this one for today ❌"}
      </h2>
    </div>
  );
}

Home.propTypes = {
  beer: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Home;
