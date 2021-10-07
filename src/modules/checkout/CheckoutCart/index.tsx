import { useRecoilValue } from "recoil";

import { Box, Stack, StackDivider } from "@chakra-ui/react";

import { dispatcherState } from "@recoil/atoms";

import CheckoutCartItem from "./CheckoutCartItem";
import { CartItem } from "src/types";

interface IProps {
  cart: Array<CartItem>;
}
export function CheckoutCart({ cart }: IProps) {
  const dispatcher = useRecoilValue(dispatcherState);

  const removeFromCart = (id: number, note: string) => {
    dispatcher?.removeFromCart(id, note);
  };

  return (
    <Box
      p={[2, 2, 4]}
      border="2px"
      borderColor="gray.400"
      borderRadius="md"
      w="100%"
    >
      <Stack
        directino="row"
        spacing={4}
        divider={<StackDivider borderColor="gray.300" />}
      >
        {cart.map((c) => (
          <CheckoutCartItem cartItem={c} />
        ))}
      </Stack>
    </Box>
  );
}
