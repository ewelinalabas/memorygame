import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import '../styles/Navigation.css';

export const Navigation = ({ location }) => {
  return (
    <Navbar expand="sm">
        <Navbar.Brand >Memory</Navbar.Brand>
        <Nav activeKey={location.pathname} className="mr-auto">
          <Nav.Link href="/" className="nav-item nav-link">
            Game
          </Nav.Link>
          <Nav.Link href="/scoreboard" className="nav-item nav-link">
            Scoreboard
          </Nav.Link>
        </Nav>
    </Navbar>
  )
}
