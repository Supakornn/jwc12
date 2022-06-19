import React from "react";
import styled from "styled-components";
import Reviews from "../components/Reviews";

const ReviewContainer = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    font-size: 40px;
    font-weight: 100;
  }

  .AllReivews {
    display: flex;
    justify-content: space-around;
  }
`;

const Review = () => {
  return (
    <ReviewContainer>
      <h1>รีวิวจากลูกค้า</h1>
      <div className="AllReivews">
        <Reviews
          pic="https://i.pinimg.com/564x/19/fc/60/19fc6098735759b33678924a0cc7789e.jpg"
          title="แมทธิว นักธุรกิจ"
          desc="หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลยตอนนี้ขายดีเทน้ำเทท่าเลยครับ"
        />
        <Reviews
          pic="https://i.pinimg.com/564x/19/fc/60/19fc6098735759b33678924a0cc7789e.jpg"
          title="แจ๊ค นักแสดง"
          desc="ต้องขอบคุณหมอหมึกในการช่วยให้ความสัมพันธ์ราบรื่นด้วยนะคะทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ"
        />
        <Reviews
          pic="https://i.pinimg.com/564x/19/fc/60/19fc6098735759b33678924a0cc7789e.jpg"
          title="น้ำใส นักศึกษา"
          desc="ที่หมอหมึกบอกมานะคะเกิดเกือบหมดเลยค่ะถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่มากเลยค่ะ ดีนะที่ป้องกันเรื่องร้ายๆทันเวลา"
        />
      </div>
    </ReviewContainer>
  );
};

export default Review;
