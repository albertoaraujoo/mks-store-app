"use client";
import { useState } from "react";
import styled from "styled-components";
import CartIcon from "@/app/icons/cart-icon";

import { useOpenStore } from "@/app/stores/OpenStore";

export type HeaderProps = {
  numberOfItems: number;
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0f52ba;
  height: 101px;
  display: flex;
  width: 100%;
  padding: 0 50px 0 50px;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 20px;
  line-height: 1.8;
  width: fit-content;
`;

const MKSText = styled.h1`
  color: #fff;
`;

const SistemasText = styled.h4`
  color: #fff;
  font-weight: 200;
  margin-top: 8px;
`;

const CartButton = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  cursor: pointer;
`;

const CartItemsNumber = styled.p`
  font-weight: bold;
`;

const Header = (headerProps: HeaderProps) => {
  const setOpenTrue = useOpenStore((state) => state.setOpenTrue);
  const [numberOfItems, setNumberOfItems] = useState(0);

  return (
    <Container>
      <TextContainer>
        <MKSText>MKS</MKSText>
        <SistemasText>Sistemas</SistemasText>
      </TextContainer>
      <CartButton onClick={setOpenTrue}>
        <CartIcon />
        <CartItemsNumber>{numberOfItems.toString()}</CartItemsNumber>
      </CartButton>
    </Container>
  );
};

export default Header;
