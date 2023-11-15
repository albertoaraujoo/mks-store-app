import React from "react";
import styled from "styled-components";
import ShoppingBag from "../icons/shopping-bag";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  onBuyClick: (item: any) => void;
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 218px;
  height: 285px;
  border-radius: 10px;
  gap: 5px;
  box-shadow: 0px 2px 8px 0px #00000022;
`;

const ProductImage = styled.img`
  width: 140px;
  height: 140px;
`;

const NameAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const ProductName = styled.h5`
  font-size: 16px;
  font-weight: 400;
  text-align: start;
  width: 60%;
  color: #2c2c2c;
  margin-left: 8px;
`;

const ProductPrice = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
  background-color: #373737;
  padding: 4px;
  border-radius: 5px;
  color: #fff;
`;

const ProductDescription = styled.p`
  align-self: start;
  font-size: 10px;
  color: #2c2c2c;
  width: 80%;
  margin-left: 8px;
`;

const BuyButton = styled.button<{ addedToCart: boolean }>`
  display: flex;
  background-color: ${({ addedToCart }) =>
    addedToCart ? "#4caf50" : "#0f52ba"};
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 0 0 8px 8px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;

const ProductCard = ({
  id,
  name,
  price,
  image,
  description,
  onBuyClick,
}: Product) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleBuyClick = () => {
    onBuyClick(id);
    setAddedToCart(true);
  };
  return (
    <CardContainer>
      <ProductImage src={`${image}`} />
      <NameAndPriceContainer>
        <ProductName>{name}</ProductName>
        <ProductPrice>R${price}</ProductPrice>
      </NameAndPriceContainer>
      <ProductDescription>{description}</ProductDescription>
      <BuyButton addedToCart={addedToCart} onClick={handleBuyClick}>
        <ShoppingBag /> {addedToCart ? "ADICIONADO" : "COMPRAR"}
      </BuyButton>
    </CardContainer>
  );
};

export default ProductCard;
