import {
  Stack,
  Button,
  Menu,
  MenuButton,
  Icon,
  MenuList,
  MenuItem,
  Flex,
  Text,
} from "@chakra-ui/react";

import { useRecoilValue, useRecoilState } from "recoil";

import { MdShoppingCart } from "react-icons/md";

import { cartStatsState } from "@recoil/selectors";
import { cartState, dispatcherState } from "@recoil/atoms";
import { CartItem } from "src/types";

export default function Cart(): JSX.Element {
  const { unique } = useRecoilValue(cartStatsState);

  const [cart] = useRecoilState(cartState);
  const dispatcher = useRecoilValue(dispatcherState);

  const removeFromCart = (id: number, note: string) => {
    dispatcher?.removeFromCart(id, note);
  };

  function clearCart() {
    dispatcher?.clearCart();
  }

  return (
    <Menu>
      <MenuButton
        bg="inherit"
        rounded="full"
        color="white"
        padding="1"
        leftIcon={<Icon as={MdShoppingCart} />}
      >
        {!(unique > 0) ? "" : unique}
      </MenuButton>
      <MenuList color="black">
        {cart.map((c) => (
          <MenuItem minH="3rem">
            <Flex
              direction="row"
              alignContent="center"
              justifyContent="space-between"
              width="100%"
            >
              <Text textAlign="center" isTruncated>
                {c.name} ({c.quantity}) <br /> {c.customerNote}
              </Text>
              <Button onClick={() => removeFromCart(c.id, c.customerNote)}>
                X
              </Button>
            </Flex>
          </MenuItem>
        ))}
        <Stack direction="column" gap={2}>
          <Button width="100%" onClick={clearCart}>
            Hreinsa körfu
          </Button>
          <Button width="100%">Klára innkaup</Button>
        </Stack>
      </MenuList>
    </Menu>
  );
}
