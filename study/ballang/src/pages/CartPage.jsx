import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import api from "../api/api";

const CartPage = () => {
  const queryClient = useQueryClient();

  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => api.cart.getCart(),
  });

  const { mutateAsync: removeItemFromCart } = useMutation({
    mutationFn: (productId) => api.cart.removeItemFromCart(productId),
  });

  const handleClickRemoveItemFromCart = async (productId) => {
    await removeItemFromCart(productId);

    alert("장바구니에서 상품이 제거되었습니다.");

    queryClient.invalidateQueries({ queryKey: ["cart"] });
  };

  return (
    <div>
      <h1>장바구니</h1>

      {isLoading ? (
        "loading..."
      ) : (
        <ul style={{ textAlign: "left" }}>
          {cart.items.map((cartItem) => (
            <li key={cartItem.id}>
              <h5>{cartItem.product.name}</h5>
              <span>{cartItem.quantity}</span>
              <button
                onClick={() =>
                  handleClickRemoveItemFromCart(cartItem.product.id)
                }
              >
                장바구니에서 빼기
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
