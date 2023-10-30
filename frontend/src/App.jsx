import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BeerType from "./components/BeerType";
import BeerCards from "./components/BeerCards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [beerData, setBeerData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBeerBySearch, setFilteredBeerBySearch] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/beerData")
      .then((resp) => resp.json())
      .then((data) => setBeerData(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredBeerBySearch(
        beerData.filter((val) => {
          return val.name.includes(searchTerm);
        })
      );
    } else {
      setFilteredBeerBySearch([]);
    }
  }, [searchTerm, beerData]);

  const beer = searchTerm.length > 0 ? filteredBeerBySearch : beerData;
  const beerDataSort = beer.sort(() => Math.random() - 0.5);
  const beerDataRandom = beerDataSort.slice(0, 12);

  return (
    <Router>
      <Header />
      <SearchBar setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home beer={beerDataRandom} />} />
        <Route path="/all" element={<BeerCards beer={beerDataRandom} />} />
        <Route path="/beertype/:beerName" element={<BeerType beer={beer} />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
