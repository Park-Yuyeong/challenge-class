class ProductsAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  // 전체 상품 목록 조회
  async getProducts() {
    const path = "/products";

    const response = await this.#axios.get(path);
    const result = response.data.result;

    return result;
  }

  // 특정 상품 정보 조회
  async getProduct(productId) {
    const path = `/products/${productId}`;

    const response = await this.#axios.get(path);
    const result = response.data.result;

    return result;
  }
}

export default ProductsAPI;
