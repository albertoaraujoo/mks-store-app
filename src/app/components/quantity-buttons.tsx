import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 39px;
  border-radius: 4px;
  border: solid 1px #bfbfbf;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

const PartsContainer = styled.div`
  display: flex;
`;

const Parts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  cursor: pointer;
`;

const QuantityButtons = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Container>
      <Text>Qtd:</Text>
      <PartsContainer>
        <Parts onClick={decreaseQuantity}> - |</Parts>
        <Parts>{quantity}</Parts>
        <Parts onClick={increaseQuantity}>| + </Parts>
      </PartsContainer>
    </Container>
  );
};

export default QuantityButtons;
