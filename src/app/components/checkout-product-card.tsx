import styled from "styled-components";
import QuantityButtons from "./quantity-buttons";
import CloseButton from "../icons/close-button";

type CheckoutProductCardProps = {
  name: string;
  photo: string;
  price: number;
  key: number;
  onRemove: () => void;
};

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  height: 101px;
  border-radius: 10px;
  background-color: #ffffff;
`;

const ProductImageAndName = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
  width: 50%;
  justify-self: flex-start;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
`;

const ProductName = styled.h5`
  font-size: 13px;
  font-weight: 400;
`;

const ProductPrice = styled.p`
  font-size: 15px;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const CloseButtonBox = styled.div`
  position: absolute;
  top: -90;
  right: 0;
`;

const CheckoutProductCard = ({
  name,
  photo,
  price,
  key,
  onRemove,
}: CheckoutProductCardProps) => {
  return (
    <CardContainer key={key}>
      <CloseButtonBox>
        <CloseButton onClick={onRemove} height={20} width={20} />
      </CloseButtonBox>
      <ProductImageAndName>
        <ProductImage src={`${photo}`} />
        <ProductName>{name}</ProductName>
      </ProductImageAndName>
      <QuantityButtons />
      <ProductPrice>R${price}</ProductPrice>
    </CardContainer>
  );
};

export default CheckoutProductCard;
