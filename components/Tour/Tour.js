import React from "react";
import styled from "styled-components";
import Img from "../../assets/GroupTour.svg";
import Image from "next/image";

const Tour = () => {
  return (
    <div className="container">
      <SectionWrapper>
        <div>
          <Title>
            <div className="text">
              <h1>Исследовательские </h1>
              <br />
              <h1 className="textColor">туры</h1>
            </div>
            <p>
              Исследовательские туры предоставляют возможность зарубежным
              партнерам провести <br /> исследование на любую тему в Кыргызстане
              и других странах Центральной Азии
            </p>
          </Title>
          <TourForm>
            <div className="title">Свяжитесь с нами</div>
            <div className="form_group">
              <input placeholder="Email" />
              <input placeholder="ФИО" />
              <button>Оставить заявку</button>
            </div>
          </TourForm>
        </div>
        <div>
          <TourImg>
            <Image src={Img} alt="picture" width="650px" height="600px" />
          </TourImg>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Tour;

const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  display: inline-block;
  max-width: 680px;

  .text {
    font-weight: 400;
    font-size: 56px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #313131;
    margin-top: 146px;
    margin-bottom: 30px;
    .textColor {
      color: #a5b74c;
    }
  }
  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #3d3c3c;
    padding-top: 30px;
  }
`;
const TourForm = styled.div`
  .form_group {
    display: flex;
    align-items: center;
    margin-bottom: 260px;
  }
  .title {
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #1c1c1c;
    margin-top: 225px;
    margin-bottom: 60px;
  }

  input {
    padding: 13px 38px;
    border: 0.739726px solid #1c1c1c;
    box-sizing: border-box;
    border-radius: 72px;
    margin-right: 12px;

    background: white;
    outline: none;
    ::placeholder {
      color: #1c1c1c;
      font-size: 1.5em;
      text-align: center;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.02em;
      color: #1c1c1c;
    }
  }

  button {
    padding: 13px 38px;
    background: linear-gradient(180.78deg, #1c1c1c 1.35%, #111111 96.41%);
    border-radius: 72px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #ffffff;
    border: none;
  }
`;
const TourImg = styled.div`
  display: flex;
`;
