import React from "react";
import styled from "styled-components";

const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin: 50px;
  height: fit-content;
  color: white;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  h2 {
    margin-top: 20px;
    font-weight: 100;
  }

  .desc {
    text-align: center;
    margin-top: 30px;
    width: 300px;
    font-weight: 100;
    font-size: 16px;
  }
`;

const Reviews = ({ pic, title, desc }) => {
  return (
    <Review>
      <img src={pic} alt="title" />
      <h2>{title}</h2>
      <div className="desc">
        <p>{desc}</p>
      </div>
    </Review>
  );
};

export default Reviews;
