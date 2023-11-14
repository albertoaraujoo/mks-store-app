"use client";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 54px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
`;
const Footer = () => {
  return (
    <FooterContainer>
      MKS sistemas © Todos os direitos reservados
    </FooterContainer>
  );
};

export default Footer;
