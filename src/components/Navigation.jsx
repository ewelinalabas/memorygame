import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav } from "react-bootstrap";
import '../styles/Navigation.css';
import { IMAGES } from '../constants';

const NavigationPure = ({ location, phase }) => {
  const disabled = phase === "play"

  return (
    <Navbar expand="sm">
        <Navbar.Brand>
          <img 
            src={IMAGES["logo"]}
            alt="Cards"
          ></img>
          Memory
        </Navbar.Brand>
        <Nav activeKey={location.pathname} className="mr-auto">
          <Nav.Link href="/" className="nav-item nav-link">
            Game
          </Nav.Link>
          <Nav.Link href="/scoreboard" disabled={disabled} className="nav-item nav-link">
            Scoreboard
          </Nav.Link>
        </Nav>
    </Navbar>
  );
};

export const Navigation = connect(
  state => ({
    phase: state.game.phase
  })
)(NavigationPure)
