import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/app/components/product-card";
import styled from "styled-components";
import CheckoutModal from "@/app/components/checkout-modal";
import { useCartStore } from "@/app/stores/CartStore";

type Product = {
  id: number;
  name: string;
  photo: string;
  price: number;
  description?: string | any;
};

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
  justify-content: center;
  padding: 20px;
  width: 70%;
  height: 80vh;
`;

const ProductsList = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Products"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
        );
        console.log(data.products);
        return data.products as Product[];
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
      }
    },
  });

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Ocorreu um erro ao buscar os dados</p>;

  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          id={product.id}
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.photo}
          description={product.description}
          onBuyClick={() => addToCart(product)}
        />
      ))}
      <CheckoutModal />
    </ListContainer>
  );
};

export default ProductsList;
