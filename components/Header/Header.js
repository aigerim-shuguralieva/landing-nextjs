import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Logo.svg";
import InputIconSvg from "../../assets/search-normal.svg";
import { headerLinks } from "../Header/HeaderLinks";
import Burger from "../../assets/burger.svg";
const Header = () => {
  return (
    <div className="container">
      <HedaerWrapper>
        <LogoContent>
          <Image src={Logo} alt="" />
        </LogoContent>
        <HeaderItems>
          {headerLinks.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </HeaderItems>
        <SearchAndLanguage>
          <div className="search_wrap">
            <InputIcon>
              <Image src={InputIconSvg} alt="" />
            </InputIcon>
            <input />
          </div>
          <div className="language_wrap">
            <div className="input_icon">
              <Image src={InputIconSvg} alt="" />
            </div>
            <div>
              EN <span>|</span> RU
            </div>
          </div>
          <BurgerWrap>
            <Image src={Burger} alt="" />
          </BurgerWrap>
        </SearchAndLanguage>
      </HedaerWrapper>
    </div>
  );
};

export default Header;

const HedaerWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
const LogoContent = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const HeaderItems = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }

  li {
    list-style: none;
    margin: 0 20px;
  }
`;
const SearchAndLanguage = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    margin-top: 65px;
  }
  .search_wrap {
    position: relative;
    input {
      border: 1px solid #000000;
      box-sizing: border-box;
      border-radius: 30px;
      padding: 7px 0 7px 35px;
      width: 250px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }

  .language_wrap {
    margin-left: 50px;
    @media (max-width: 768px) {
      display: flex;
      margin-left: 0;
    }
    .input_icon {
      display: none;
      @media (max-width: 768px) {
        display: block;
        margin-right: 15px;
      }
    }
  }
`;
const InputIcon = styled.div`
  position: absolute;
  top: 3px;
  left: 8px;
`;

const BurgerWrap = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin-left: 0;
  }
`;
