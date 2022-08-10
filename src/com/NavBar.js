import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <HeaderBox>
      <Contlor
        to="/"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Home
      </Contlor>
      <Contlor
        to="/Introduction"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Introduction
      </Contlor>
      <Contlor
        to="/I:dentity"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        I:dentity
      </Contlor>
      <Contlor
        to="/Connected"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Connected
      </Contlor>
      <Contlor
        to="/Guest"
        className={(({ isActive }) => (isActive ? "active" : "inactive"), "hi")}
      >
        Guest
      </Contlor>
    </HeaderBox>
  );
};

export default NavBar;

const HeaderBox = styled.nav`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  padding-top: 1.7vw;
  z-index: 10000;
  background-color: black;
  .hi {
    margin-right: 3.4vw;
  }
`;

export const Contlor = styled(NavLink)`
  margin: 0 2.5vw;
  color: white;
  font-weight: 400;
  font-size: 1.9vw;

  &.active {
    filter: blur(3px);
  }
`;
