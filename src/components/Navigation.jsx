import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

export const Navigation = ({ location }) => {
  // const [activePage, setActivePage] = useState("Game")
  const handleClick = (value) => {

  }

  // const navLinks = [
  // <NavLink to="/" key="1" value="Game" className="nav-item nav-link" onClick={(event => handleClick(event.target))}>Game</NavLink>,
  // <NavLink to="/scoreboard" value="Scoreboard" key="2" className="nav-item nav-link">Scoreboard</NavLink>]

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-collapse" id="navbarNavAltMarkup">
        <span className="navbar-brand mb-0 h1">Memory</span>
        <div activeKey={location.pathname} className="navbar-nav">
          <NavLink 
            // activeClassName={activePage == "Game" ? "active" : ""} 
            to="/" className="nav-item nav-link" 
            // onClick={() => setActivePage("Game")}
          >
            Game
          </NavLink>

          <NavLink
            // activeClassName={activePage == "Scoreboard" ? "active" : ""} 
            to="/scoreboard" className="nav-item nav-link"
            // onClick={() => setActivePage("Scoreboard")}
            >
              Scoreboard
          </NavLink>
          {/* {navLinks} */}
        </div>
      </div>
    </nav>
  )
}
