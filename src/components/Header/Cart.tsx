import {
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

  const removeFromCart = (id: number) => {
    dispatcher?.removeFromCart(id);
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
            <Flex direction="column">
              <Text>
                {c.name} - {c.quantity}
                <Button onClick={() => removeFromCart(c.id)}>X</Button>
              </Text>
            </Flex>
          </MenuItem>
        ))}
        <Button onClick={clearCart}>Hreinsa körfu</Button>
      </MenuList>
    </Menu>
  );
}
