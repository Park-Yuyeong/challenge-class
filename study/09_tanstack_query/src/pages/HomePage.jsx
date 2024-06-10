import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

const HomePage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    // queryKey는 배열로 만듦 (데이터 모델명 string, 데이터를 설명하는 정보 object)
    queryKey: ["products"],
    queryFn: () => api.products.getProducts(),
  });

  if (isLoading) return <Page>loading...</Page>;
  if (isError) return <Page>error...</Page>;

  return (
    <Page>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}> {product.name}</Link>
          </li>
        ))}
      </ol>
    </Page>
  );
};

export default HomePage;
