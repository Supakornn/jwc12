import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    color: white;
    padding: 18px 10px;
    font-size: 18px;
    font-weight: 100;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    margin-top: -5px;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #612378;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>เกี่ยวกับหมอหมึก</li>
      <li>บทความ</li>
      <li>จองคิว</li>
    </Ul>
  );
};

export default RightNav;
