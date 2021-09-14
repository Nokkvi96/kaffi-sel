export type CartItem = ShoppingItem & {
  quantity: number;
  customerNote: string;
};

export type ShoppingItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUri: string;
};
