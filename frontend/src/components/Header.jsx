import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/Rate_Your_Beer.png";

const HeadSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(./src/assets/jonas-jacobsson-uVxPEvrYJxA-unsplash.jpg);
  background-size: 100% 100%;
`;

const SwipeBeerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 300px;
`;

const SwipeTitle = styled.h1`
  font-size: 8em;
  color: var(--secondary-color);
`;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const beerType = ["Blanche", "Blonde", "Brune", "Rousse", "Ambree"];

  const isRootPath = location.pathname === "/";
  const currentBeer = location.pathname.split("/").pop();

  return (
    <div>
      {isRootPath ? (
        <HeadSection>
          <header>
            <div className="tind-beer">
              <img className="logo" src={logo} alt="Tindbeer.logo" />
              <h1 className="pageTitle">
                <span className="letterTitle1">T</span>
                <span className="letterTitle2">i</span>
                <span className="letterTitle3">n</span>
                <span className="letterTitle4">d</span>
                <span className="letterTitle5">b</span>
                <span className="letterTitle6">e</span>
                <span className="letterTitle7">e</span>
                <span className="letterTitle8">r</span>
              </h1>
            </div>
          </header>
          <nav>
            <ul className={`navbar ${scrolled ? "navbarScrolled" : ""}`}>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/all">Selection</Link>
              </li>
              {beerType.map((beerName) => {
                return (
                  <li key={beerName}>
                    <Link to={`/beertype/${beerName}`}>{beerName}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <SwipeBeerDiv>
            <SwipeTitle>Swipe the Beers !</SwipeTitle>
          </SwipeBeerDiv>
        </HeadSection>
      ) : (
        <HeadSection>
          <header>
            <div className="tind-beer">
              <img className="logo" src={logo} alt="Tindbeer.logo" />
              <h1 className="pageTitle">
                <span className="letterTitle1">T</span>
                <span className="letterTitle2">i</span>
                <span className="letterTitle3">n</span>
                <span className="letterTitle4">d</span>
                <span className="letterTitle5">b</span>
                <span className="letterTitle6">e</span>
                <span className="letterTitle7">e</span>
                <span className="letterTitle8">r</span>
              </h1>
            </div>
          </header>
          <nav>
            <ul className={`navbar ${scrolled ? "navbarScrolled" : ""}`}>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              {beerType.map((beerName) => {
                return (
                  <li key={beerName}>
                    <Link to={`/beertype/${beerName}`}>{beerName}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <SwipeBeerDiv>
            <SwipeTitle className="beerType">Bières {currentBeer}s</SwipeTitle>
          </SwipeBeerDiv>
        </HeadSection>
      )}
    </div>
  );
}

export default Header;
