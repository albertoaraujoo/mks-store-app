"use client";
import styled from "styled-components";

import ProductsList from "./sections/products-list/ProductsList";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <ProductsList />
    </Container>
  );
}
