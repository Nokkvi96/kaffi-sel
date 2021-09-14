import { selector } from "recoil";
import { cartState } from "./atoms";

export const cartStatsState = selector({
  key: "cartStatsState",
  get: ({ get }) => {
    const cart = get(cartState);
    const unique = cart.length;

    return {
      unique,
    };
  },
});
