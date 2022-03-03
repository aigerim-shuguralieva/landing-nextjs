import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Group.svg";
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterInner>
          <Contacts>
            <div className="title">Контакты</div>
            <p>
              Вы можете связаться с нами по телефону или почти, а также
              воспользовавшись формой обратной связи
            </p>
          </Contacts>
          <FooterForm>
            <div className="title">Связаться с нами</div>
            <div className="form_group">
              <input placeholder="Email" />
              <input placeholder="ФИО" />
              <button>Оставить заявку</button>
            </div>
          </FooterForm>
          <FooterLogo>
            <Image src={Logo} alt="" />
          </FooterLogo>
        </FooterInner>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background: #494949;
  padding: 33px 0 19px;
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: #e8e8e8;
    margin-bottom: 15px;
  }
`;
const Contacts = styled.div`
  max-width: 360px;
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #cdcdcd;
  }
`;
const FooterForm = styled.form`
  .form_group {
    display: flex;
    align-items: center;
  }

  input {
    padding: 13px 38px;
    border: 0.739726px solid #ffffff;
    box-sizing: border-box;
    border-radius: 72px;
    margin-right: 12px;
    background: #494949;
    outline: none;

    ::placeholder {
      color: blue;
      font-size: 1.5em;
      text-align: center;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.02em;
      color: #ffffff;
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
const FooterLogo = styled.div``;
