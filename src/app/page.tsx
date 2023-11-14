"use client";
import styled from "styled-components";
import ProductsList from "./sections/products-list/ProductsList";
import Header from "./sections/header/Header";
import Footer from "./sections/footer/Footer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <Header numberOfItems={9} />
      <ProductsList />
      <Footer />
    </Container>
  );
}
