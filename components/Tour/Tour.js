import React from "react";
import styled from "styled-components";
import Img from "../../assets/GroupTour.svg";
import Image from "next/image";
import { CustomButton } from "../Custom/CustomButton";
import { InputCustom } from "../Custom/InputCustom";

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
              <InputCustom primary placeholder="Email" />
              <InputCustom primary placeholder="ФИО" />
              <CustomButton>Оставить заявку</CustomButton>
            </div>
          </TourForm>
        </div>
        <div>
          <TourImg>
            <div className="img">
              <Image src={Img} alt="picture" />
            </div>
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
  @media (max-width: 768px) {
    display: block;
  }
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
      margin-top: 15px;
    }
    @media (max-width: 768px) {
      width: 348px;
      height: 62px;

      font-weight: 500;
      font-size: 34px;
      line-height: 34px;
      .textColor {
        margin: -5px 0 20px;
      }
    }
  }
  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #3d3c3c;
    padding-top: 30px;
    margin-top: 15px;
    @media (max-width: 768px) {
      width: 309px;
      height: 78px;

      font-weight: 400;
      font-size: 12px;
      line-height: 21px;
    }
  }
`;
const TourForm = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
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
`;
const TourImg = styled.div`
  display: flex;
  .img {
    width: 650px;
    height: 600px;
  }
  @media (max-width: 768px) {
    width: 379px;
    height: 273px;

    margin-top: 80px;
  }
`;
