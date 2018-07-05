import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <header className="app-header">
    <nav className="navbar navbar-expand navbar-dark text-white  app-nav flex-column flex-sm-row">
      <a className="navbar-brand" href="/" style={{margin:'20px'}}>
        <img src="../logo.png" alt="logo"/>
      </a>
      <button className="navbar-toggler" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <button className="btn btn-danger nav-link" onClick={props.showModal}>
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  showModal: PropTypes.func,
};

export default Header;
