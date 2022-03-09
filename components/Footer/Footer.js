import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Group.svg";
import { CustomButton } from "../Custom/CustomButton";
import { InputCustom } from "../Custom/InputCustom";

const Footer = (props) => {
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
              <InputCustom placeholder="Email" active />
              <InputCustom placeholder="ФИО" active />
              <CustomButton>Оставить заявку</CustomButton>
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
`;
const FooterLogo = styled.div``;
