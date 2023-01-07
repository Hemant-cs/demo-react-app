import React, { useState } from "react";

const NavBar = (props) => {
  const [searchedCity, setSearchedCity] = useState("");

  const changeCity = (searchedCity) => {
    props.changeCity(searchedCity);
    setSearchedCity('')
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Weather Finder
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link disabled">
                  Selected City : {props.selectedCity[0].toUpperCase()+props.selectedCity.slice(1).toLowerCase()}
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => setSearchedCity(event.target.value)}
                value = {searchedCity}
              />
              <button
                className={searchedCity ? "btn btn-outline-success": 'btn btn-disable'}
                type="submit"
                onClick={()=>changeCity(searchedCity)}
                disabled = {!searchedCity}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
