import { atom } from "recoil";
import { CartItem } from "src/types";
import { Dispatcher } from "./dispatcher";

export const cartState = atom<CartItem[]>({
  key: "cartState",
  default: [],
});

export const dispatcherState = atom<Dispatcher | undefined>({
  key: "dispatcherState",
  default: undefined,
});
