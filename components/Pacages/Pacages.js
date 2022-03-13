import Image from "next/image";
import React from "react";
import styled from "styled-components";
import PackageBg from "../../assets/bg.png";
import { pacageCards } from "./PacageCards";
import MobileBg from "../../assets/mobile_bg.png";

const Pacages = () => {
  return (
    <PacagesWrapper>
      <div className="background_image">
        <Image alt="" src={PackageBg} />
      </div>
      <div className="mobile_bg">
        <Image src={MobileBg} alt="" />
      </div>
      <div className="container">
        <div>
          <Title>Пакеты</Title>
          <p className="mobile_text">
            Мы можем оказать содействие на всех этапах исследования, начиная от
            разработки методологии , поиска информантов, сбора данных и
            заканчивая написанием отчета. Также в рамках данной услуги есть
            отличная возможность изучить регион Центральной Азии, ее культуру и
            природу.
          </p>
        </div>
        <GroupImg>
          {pacageCards.map((item, index) => {
            return (
              <div className="packages_card" key={index}>
                <Image className="image_card" src={item.image} alt="" />
                <p>{item.text}</p>
              </div>
            );
          })}
        </GroupImg>
        <Text>
          <div>
            <p>
              Мы можем оказать содействие на всех этапах исследования, начиная
              <span> от разработки методологии </span>, поиска информантов,
              сбора данных и заканчивая написанием отчета. Также в рамках данной
              услуги есть отличная
              <span> возможность изучить регион Центральной Азии</span> , ее
              культуру и природу.
            </p>
          </div>
        </Text>
      </div>
    </PacagesWrapper>
  );
};
export default Pacages;

const PacagesWrapper = styled.section`
  padding: 120px 0;
  min-height: 100%;
  padding-bottom: 37px;
  position: relative;
  z-index: 1000;
  .background_image {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0;
    width: 100%;
    bottom: 0;
    /* width: 100vw; */
    /* height: 100vh; */
    height: 100%;
    z-index: 1;
    @media (max-width: 900px) {
      display: none;
    }
  }
  .mobile_bg {
    display: none;
    @media (max-width: 768px) {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0;
      width: 100%;
      bottom: 0;
      /* width: 100vw; */
      /* height: 100vh; */
      height: 100%;
      z-index: 1;
      background-color: red;
    }
  }
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 48px;
  line-height: 61px;
  letter-spacing: 0.02em;
  color: #313131;

  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    .mobile_text {
      width: 343px;
      height: 120px;
      left: 31px;
      top: 771px;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 21px;
      color: #5f5f5f;
    }
  }
`;
const GroupImg = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  z-index: 1000;
  .packages_card {
    width: 440px;
    height: 440px;
    background: #ffffff;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.18);
    border-radius: 54px;
    border: none;
    padding: 0;
    margin: 42px 0 107px;
    &:last-child {
      top: 50px;
      left: 120px;
    }
  }
  p {
    font-family: Gilroy;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #1c1c1c;
    padding: 20px 40px 60px;
    word-wrap: wrap;
    white-space: pre-wrap;
  }
  Image:last-child {
    top: 50px;
    left: 120px;
  }
`;
const Text = styled.span`
  display: inline;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #505050;
  margin: 72px 0 146px;
  @media (max-width: 768px) {
    display: none;
  }
  span {
    color: #7f9d1b;
  }
`;
