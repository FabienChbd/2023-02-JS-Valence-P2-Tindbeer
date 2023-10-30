import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import BeerCards from "./BeerCards";

function BeerType({ beer }) {
  const { beerName } = useParams();
  const filteredBeer = beer.filter((b) => b.color === beerName);
  const finalBeer = filteredBeer.length > 0 ? filteredBeer : beer;

  return (
    <>
      <h1 className="beerType">Bières {beerName}s</h1>
      <div>
        <main className="App">
          <BeerCards beer={finalBeer} />
        </main>
      </div>
    </>
  );
}

BeerType.propTypes = {
  beer: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BeerType;
