import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #fff;

  .ButtonContainer > a {
    font-size: 15px;
    text-decoration: none;
    padding: 20px;
    color: white;
  }
`;
const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="ButtonContainer">
        <a href="#">เกี่ยวกับหมอหมึก</a>
        <a href="#">บทความ</a>
        <a href="#">จองคิว</a>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
