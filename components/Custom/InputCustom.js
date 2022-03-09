import styled from "styled-components";

export const InputCustom = styled.input`
  padding: 13px 38px;
  border: 0.739726px solid #ffffff;
  box-sizing: border-box;
  border-radius: 72px;
  margin-right: 12px;
  outline: none;
  background: ${(props) => (props.primary ? "white" : "#494949")};

  ::placeholder {
    color: ${(props) => (props.active ? "white" : "#1c1c1c")};

    font-size: 1.5em;
    text-align: center;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
  }
`;
