import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Logo.svg";
import InputIconSvg from "../../assets/search-normal.svg";
import { headerLinks } from "../Header/HeaderLinks";
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
            EN <span>|</span> RU
          </div>
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
const LogoContent = styled.div``;
const HeaderItems = styled.ul`
  display: flex;

  li {
    list-style: none;
    margin: 0 20px;
  }
`;
const SearchAndLanguage = styled.div`
  display: flex;
  align-items: center;
  .search_wrap {
    position: relative;
    input {
      border: 1px solid #000000;
      box-sizing: border-box;
      border-radius: 30px;
      padding: 7px 0 7px 35px;
      width: 250px;
    }
  }

  .language_wrap {
    margin-left: 50px;
  }
`;
const InputIcon = styled.div`
  position: absolute;
  top: 3px;
  left: 8px;
`;
