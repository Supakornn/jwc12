import React from "react";
import styled from "styled-components";
const ContactContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  padding-bottom: 50px;

  img {
    width: 500px;
    height: 500px;
  }

  .text {
    width: 500px;
    margin-left: 200px;
  }
  h1 {
    font-size: 40px;
    font-weight: 100;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    .text {
      margin-right: 130px;
      margin-bottom: 20px;
    }
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }
    img {
      width: 500px;
      height: 500px;
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <div className="img">
        <img src="https://lzd-img-global.slatic.net/g/p/e23a0775a4f504b4d407eece7b2051a5.jpg_2200x2200q80.jpg_.webp" />
      </div>
      <div className="text">
        <h1>ทำนายชะตากับหมอหมึก</h1>
        <p>สามารถจองคิวได้ในเว็บหรือ</p>
        <p>อีเมล: octopus_fortune@teller.com</p>
        <p>โทรศัพทร์: 099 XXXX XXX</p>
        <p>และมาที่สำนักที่</p>
        <p>ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ เขตอินเตอร์เน็ต กรุงเทพ 99999</p>
        <p> ตามวันเวลาที่นัดไว้</p>
        <br></br>
        <p>จำกัดที่ 10 คิวต่อหนึ่งวัน เปิดทำการ</p>
        <p>10.00 - 18.30 พัก 12.00 - 13.00</p>
        <p>เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์</p>
      </div>
    </ContactContainer>
  );
};

export default Contact;
