import { faBars, faSearch, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [status, setStatus] = useState('closed-menu');

  const toggle = () => {
    if (status !== 'open-menu') {
      setStatus('open-menu');
    } else {
      setStatus('closed-menu');
    }
  };

  const handleClick = () => {
    setStatus('closed-menu');
  };

  return (
    <header>
      <nav>
        <div className="tab">
          <FontAwesomeIcon icon={faBars} onClick={toggle} />
        </div>
        <div className="tab logo">
          <Link to="/">Makeup Online</Link>
        </div>
        <div className="tab">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </nav>
      <div className={`menu ${status}`}>
        <h2 className="menu-item">
          <Link to="/" onClick={handleClick}>
            HOME
          </Link>
        </h2>
        <h2 className="menu-item">
          <Link to="/categories" onClick={handleClick}>
            CATEGORIES
          </Link>
        </h2>
        <h4 className="menu-toggle">
          <FontAwesomeIcon onClick={toggle} icon={faArrowUp} />
        </h4>
      </div>
    </header>
  );
};

export default Navbar;
