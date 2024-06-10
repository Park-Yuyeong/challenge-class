class CartAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  // 사용자의 장바구니 내용 제공
  async getCart() {
    const path = "/cart";

    const response = await this.#axios.get(path);
    const result = response.data.result;

    return result;
  }

  // 장바구니에 상품 추가
  async addItemToCart(productId) {
    const path = `/cart/products/${productId}`;

    const response = await this.#axios.post(path);
    const result = response.data.result;

    return result;
  }

  // 장바구니에서 상품 차감
  async removeItemFromCart(productId) {
    const path = `/cart/products/${productId}`;

    const response = await this.#axios.delete(path);
    const result = response.data.result;

    return result;
  }

  // 장바구니에서 상품 제거
  async clearItemInCart(productId) {
    const path = `/cart/products/${productId}/clear`;

    const response = await this.#axios.delete(path);
    const result = response.data.result;

    return result;
  }
}

export default CartAPI;
