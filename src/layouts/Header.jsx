import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  h1 {
    font-size: 50px;
    color: white;
    font-weight: normal;
  }
  p {
    font-size: 20px;
    color: white;
    font-weight: normal;
    margin: 20px;
  }
  a {
    height: 50px;
    width: 170px;
    background-color: #fff;
    color: #612378;
    text-decoration: none;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin: 20px;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <h1>หมอหมึก</h1>
      <p>ผู้มีประสบการณ์พยากรณ์มากกว่า 10 ปี พร้อมคำพยาการณ์ที่แม่นยำ</p>
      <a href="btn">จองคิว</a>
    </HeaderContainer>
  );
};

export default Header;
