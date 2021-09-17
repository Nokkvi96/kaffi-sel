import type { NextPage } from "next";
import { useRecoilValue, useRecoilState } from "recoil";
import { Box, Container, Stack } from "@chakra-ui/react";

import { cartState, dispatcherState } from "@recoil/atoms";
import { cartStatsState } from "@recoil/selectors";

import { Header } from "@components";

export const Checkout: NextPage = () => {
  const { unique } = useRecoilValue(cartStatsState);

  const [cart] = useRecoilState(cartState);
  const dispatcher = useRecoilValue(dispatcherState);

  const removeFromCart = (id: number, note: string) => {
    dispatcher?.removeFromCart(id, note);
  };

  function clearCart() {
    dispatcher?.clearCart();
  }

  console.log(cart);
  return (
    <>
      <Header />
      <main>
        <Container maxW="container.xl">
          <Container maxW="container.md">
            <Stack directino="row" spacing={4}>
              {cart.map((c) => (
                <Stack direction="row">
                  <Box>{c.name}</Box>
                  <Box>{c.customerNote}</Box>
                  <Box>{c.price}</Box>
                </Stack>
              ))}
            </Stack>
          </Container>
        </Container>
      </main>
    </>
  );
};

export default Checkout;
