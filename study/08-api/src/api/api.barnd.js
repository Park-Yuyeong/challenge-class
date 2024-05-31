import { client } from "./api";

export async function getBrands() {
  const GET_BRANDS_ENDPOINT = `/brands`;
  const response = await client.get(GET_BRANDS_ENDPOINT);

  const data = response.data;

  return data;
}

export async function getBrand(brandId) {
  const GET_BRANDS_ENDPOINT = `/brands/${brandId}`;
  const response = await client.get(GET_BRANDS_ENDPOINT);

  const data = response.data;
  return data;
}
