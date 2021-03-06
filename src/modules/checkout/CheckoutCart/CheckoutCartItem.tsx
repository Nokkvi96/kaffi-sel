import { useRecoilValue } from "recoil";

import { Box, Button, Stack } from "@chakra-ui/react";

import { dispatcherState } from "@recoil/atoms";
import { CartItem } from "src/types";

interface IProps {
  cartItem: CartItem;
}

export default function CheckoutCartItem({ cartItem }: IProps) {
  const dispatcher = useRecoilValue(dispatcherState);

  const removeFromCart = (id: number, note: string) => {
    dispatcher?.removeFromCart(id, note);
  };

  return (
    <Stack direction="row">
      <Box>
        {cartItem.id}. {cartItem.name}
      </Box>
      <Box>{cartItem.customerNote}</Box>
      <Box>{cartItem.price}</Box>
      <Button
        onClick={() => removeFromCart(cartItem.id, cartItem.customerNote)}
      >
        X
      </Button>
    </Stack>
  );
}
