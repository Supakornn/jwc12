import React from "react";
import styled from "styled-components";
import Burger from "../components/Burger";
const NavbarContainer = styled.div`
  width: 100%;
  height: 55px;
  border: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Navbar = () => {
  return (
    <NavbarContainer>
      <div></div>
      <Burger />
    </NavbarContainer>
  );
};

export default Navbar;
