import { baseURL } from "./api";

export async function getProduct(productId) {
  const GET_PRODUCT_ENDPOINT = `${baseURL}/products/${productId}`;

  const response = await fetch(GET_PRODUCT_ENDPOINT);

  const data = await response.json();

  return data;
}

export async function getProducts() {
  const GET_PRODUCT_ENDPOINT = `${baseURL}/products`;

  const response = await fetch(GET_PRODUCT_ENDPOINT);

  const data = await response.json();

  return data;
}
