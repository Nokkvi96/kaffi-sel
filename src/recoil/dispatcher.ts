import { useRecoilCallback } from "recoil";
import { cartState } from "./atoms";
import { CartItem } from "src/types";

export const createDispatcher = () => {
  // TODO byrta skilaboð á skjánum

  // showMessage()
  // hideMessage()

  const addToCart = useRecoilCallback(({ set }) => (newItem: CartItem) => {
    set(cartState, (oldCart: CartItem[]) => {
      const index = oldCart.findIndex(
        // condition gæti breyst eftir ID
        (c) =>
          c.name === newItem.name && c.customerNote === newItem.customerNote
      );
      if (index >= 0) {
        return [
          ...oldCart.slice(0, index),
          {
            id: oldCart[index].id,
            name: oldCart[index].name,
            price: oldCart[index].price,
            description: oldCart[index].description,
            imgUri: oldCart[index].imgUri,
            quantity: oldCart[index].quantity + newItem.quantity,
            customerNote: oldCart[index].customerNote,
          },
          ...oldCart.slice(index + 1),
        ];
      }
      return [...oldCart, newItem];
    });
    // showMessage(`${text} hefur verið bætt í körfu`);
  });

  const removeFromCart = useRecoilCallback(
    ({ set }) =>
      (id: number, note = "") => {
        set(cartState, (oldCart: CartItem[]) => {
          const index = oldCart.findIndex(
            // condition gæti breyst eftir ID
            (c) => c.id === id && c.customerNote === note
          );
          console.log(index);
          console.log(oldCart.slice(0, index));
          console.log(oldCart.slice(index + 1));
          if (index > -1) {
            return [...oldCart.slice(0, index), ...oldCart.slice(index + 1)];
          } else return oldCart;
        });
      }
  );

  const clearCart = useRecoilCallback(({ reset }) => () => {
    reset(cartState);
  });

  return {
    // showMessage,
    // hideMessage,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

export type Dispatcher = ReturnType<typeof createDispatcher>;
