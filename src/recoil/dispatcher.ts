import { useRecoilCallback } from "recoil";
import { cartState } from "./atoms";
import { CartItem } from "src/types";

export const createDispatcher = () => {
  // TODO byrta skilaboð á skjánum

  // showMessage()
  // hideMessage()

  const addToCart = useRecoilCallback(({ set }) => (newItem: CartItem) => {
    set(cartState, (oldCart: CartItem[]) => [...oldCart, newItem]);
    // showMessage(`${text} hefur verið bætt í körfu`);
  });

  const clearCart = useRecoilCallback(({ reset }) => () => {
    reset(cartState);
  });

  return {
    // showMessage,
    // hideMessage,
    addToCart,
    clearCart,
  };
};

export type Dispatcher = ReturnType<typeof createDispatcher>;
