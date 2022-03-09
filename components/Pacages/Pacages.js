import Image from "next/image";
import React from "react";
import styled from "styled-components";
import img1 from "../../assets/Img1.svg";
import img2 from "../../assets/Img2.svg";
import img3 from "../../assets/Img3.svg";
import img4 from "../../assets/Img4.svg";
import img5 from "../../assets/Img5.svg";
import img6 from "../../assets/Img6.svg";
import bg from "../../assets/bg.png";

const Pacages = () => {
  return (
    <PacagesWrapper>
      <div className="container">
        <Title>Пакеты</Title>
        <GroupImg>
          <button>
            <Image src={img1} alt="" />
            <br />
            <p className="text">Исследование в Кыргызстане</p>
          </button>
          <button>
            <Image src={img2} alt="" />
            <br />
            <p>Культурные, экологические туры по Кыргызстану</p>
          </button>
          <button>
            <Image src={img3} alt="" />
            <br />
            <p>Исследование+культурный/экологический туризм в Кыргызстане</p>
          </button>
          <button>
            <Image src={img4} alt="" />
            <br />
            <p>Исследование в Центральной Азии</p>
          </button>
          <button>
            <Image src={img5} alt="" />
            <br />
            <p>Культурные, экологические туры по Центральной Азии</p>
          </button>
          <button>
            <Image className="img6" src={img6} alt="" />
            <br />
            <p>
              Исследование+культурный/экологический туризм в других странах ЦА
            </p>
          </button>
        </GroupImg>
        <Text>
          <p>
            Мы можем оказать содействие на всех этапах исследования,
            <span> начиная от разработки методологии </span>,поиска информантов
            , сбора данных и заканчивая написанием отчета. Также в рамках данной
            услуги есть отличная
            <span> возможность изучить регион Центральной Азии</span> , ее
            культуру и природу.
          </p>
        </Text>
      </div>
    </PacagesWrapper>
  );
};
export default Pacages;

const PacagesWrapper = styled.section`
  background-image: url(${bg});
  background-color: green;
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 48px;
  line-height: 61px;
  letter-spacing: 0.02em;
  color: #313131;
  margin: 47px 0 42px;
`;
const GroupImg = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: 20px;

  button {
    width: 440px;
    height: 440px;
    background: #ffffff;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.18);
    border-radius: 54px;
    border: none;
    padding: 0;
    margin: 42px 0px 107px 50px;
    position: relative;
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
    &.text {
      padding-top: 34px;
    }
  }
`;
const Text = styled.div`
  display: inline;

  margin: 72px 0 146px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #505050;

  span {
    color: #7f9d1b;
  }
`;
