interface QuantityState {
  quantity: number;
  price: number;
}

type QuantityAction = { type: "increment" | "decrement" };

export default function quantityReducer(
  state: QuantityState,
  action: QuantityAction
): QuantityState {
  const { quantity, price } = state;
  switch (action.type) {
    case "increment":
      return {
        quantity: quantity + 1,
        price: price + price * (1 / quantity),
      };
    case "decrement":
      if (quantity <= 1) {
        return state;
      }
      return {
        quantity: quantity - 1,
        price: price - price * (1 / quantity),
      };
  }
}
