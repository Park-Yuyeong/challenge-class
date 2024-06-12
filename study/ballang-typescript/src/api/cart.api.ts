import { AxiosInstance } from "axios";
import { GetCartData } from "./cart.type";

class CartAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  // 사용자의 장바구니 내용 제공
  async getCart() {
    const path = "/cart";

    const response = await this.axios.get<GetCartData>(path);
    const result = response.data;

    return result;
  }

  // 장바구니에 상품 추가
  async addItemToCart(productId: number) {
    const path = `/cart/products/${productId}`;

    const response = await this.axios.post(path);
    const result = response.data.result;

    return result;
  }

  // 장바구니에서 상품 차감
  async removeItemFromCart(productId: number) {
    const path = `/cart/products/${productId}`;

    const response = await this.axios.delete(path);
    const result = response.data.result;

    return result;
  }

  // 장바구니에서 상품 제거
  async clearItemInCart(productId: number) {
    const path = `/cart/products/${productId}/clear`;

    const response = await this.axios.delete(path);
    const result = response.data.result;

    return result;
  }
}

export default CartAPI;
