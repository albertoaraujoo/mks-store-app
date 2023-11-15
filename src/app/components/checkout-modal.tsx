"use client";
import styled from "styled-components";
import CloseButton from "../icons/close-button";
import CheckoutProductCard from "./checkout-product-card";
import { useOpenStore } from "@/app/stores/OpenStore";
import { useCartStore } from "../stores/CartStore";

const ModalCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #0f52ba;
  width: 25%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 1000;
`;

const CheckoutTitleAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100px;
`;

const CheckoutTitle = styled.h2`
  color: #fff;
  font-weight: 700;
  font-size: 27px;
  width: 40%;
`;

const CheckoutProducts = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const TotalText = styled.h1`
  color: #fff;
`;
const TotalValue = styled.h1`
  color: #fff;
`;

const FinalizeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #fff;
  height: 97px;
  width: 100%;
  font-weight: 700;
  font-size: 28px;
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CheckoutModal = () => {
  const setOpenFalse = useOpenStore((state) => state.setOpenFalse);
  const opened = useOpenStore((state) => state.open);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cart);

  const calculateTotal = () => {
    const total = cart.reduce((acc, product) => acc + Number(product.price), 0);
    return Math.ceil(total);
  };

  return opened ? (
    <ModalCheckoutContainer>
      <CheckoutTitleAndButton>
        <CheckoutTitle>Carrinho de Compras</CheckoutTitle>
        <CloseButton height={38} width={38} onClick={setOpenFalse} />
      </CheckoutTitleAndButton>
      <CheckoutProducts>
        {cart?.map((product, index) => (
          <CheckoutProductCard
            id={product.id}
            key={product.id}
            name={product.name}
            photo={product.photo}
            price={product.price}
            onClick={() => removeFromCart(index)}
          />
        ))}
      </CheckoutProducts>

      <BottomContainer>
        <TotalContainer>
          <TotalText>Total:</TotalText>
          <TotalValue>{calculateTotal()}</TotalValue>
        </TotalContainer>
        <FinalizeButton>FINALIZAR</FinalizeButton>
      </BottomContainer>
    </ModalCheckoutContainer>
  ) : null;
};

export default CheckoutModal;
