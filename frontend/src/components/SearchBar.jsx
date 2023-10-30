import PropTypes from "prop-types";

function SearchBar({ setSearchTerm }) {
  const handleSearchTerm = (e) => {
    const value = e.target.value.toUpperCase();
    setSearchTerm(value);
  };

  return (
    <div className="searchBar">
      <form className="searchForm">
        <label htmlFor="searchBeer"> Trouve ta bière direct : </label>
        <input
          type="text"
          name="searchBeer"
          id="searchBeer"
          placeholder="À la tienne !!!"
          onChange={handleSearchTerm}
        />
      </form>
    </div>
  );
}

SearchBar.propTypes = { setSearchTerm: PropTypes.func.isRequired };

export default SearchBar;
