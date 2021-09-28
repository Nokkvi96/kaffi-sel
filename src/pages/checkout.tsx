import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { useRecoilValue, useRecoilState } from "recoil";
import {
  Box,
  Button,
  Container,
  Stack,
  VStack,
  StackDivider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { whiten } from "@chakra-ui/theme-tools";

import { cartState, dispatcherState } from "@recoil/atoms";
import { cartStatsState } from "@recoil/selectors";
import { Header } from "@components";
import { CheckoutCart } from "@modules/checkout";

interface IFormInput {
  name: string;
  phoneNum: string;
  card: {
    num: string;
    exp: string;
    cvv: number;
  };
}

export const Checkout: NextPage = () => {
  const {
    handleSubmit,
    control,
    watch,
    register,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      phoneNum: "",
      card: {
        num: "",
        exp: "",
        cvv: undefined,
      },
    },
  });

  const [cart] = useRecoilState(cartState);
  const dispatcher = useRecoilValue(dispatcherState);

  function formatCardNum(v: string) {
    return v.replace(/(.{4})/g, "$1 ");
    // card.num = card.num.replace(/(\d)(?=(\d\d\d\d)+(?!\d))/g, " ");
  }

  function clearCart() {
    dispatcher?.clearCart();
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <Container maxW="container.md">
            <VStack spacing={[4, 6, 8]}>
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
                    <CheckoutCart cartItem={c} />
                  ))}
                </Stack>
              </Box>
              <form
                onSubmit={handleSubmit((data) => {
                  console.log(data);
                })}
              >
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
                <Stack maxW="md">
                  <FormControl id="cc-name" isRequired>
                    <FormLabel>Fullt nafn</FormLabel>
                    <Input placeholder="Fullt nafn" {...register("name")} />
                  </FormControl>
                  <FormControl id="tel" isRequired>
                    <FormLabel>Símanúmer</FormLabel>
                    <Input
                      placeholder="Símanúmer"
                      {...register("phoneNum", { pattern: /^(\+354)?\d{7}$/i })}
                    />
                  </FormControl>
                  {/**
                   * Kort
                   */}
                  <Stack
                    direction={["column", "row"]}
                    spacing={4}
                    justify="space-between"
                  >
                    <Box width="50%">
                      <FormControl id="cc-number">
                        <FormLabel>Kortanúmer</FormLabel>
                        <Input
                          autoComplete="cc-number"
                          placeholder="Kortanúmer"
                          {...register("card.num", {
                            required: true,
                            // pattern: /^(\d{4} ){3}\d{4}$/i,
                            setValueAs: (v: string) => formatCardNum(v),
                          })}
                        />
                      </FormControl>
                    </Box>
                    <Stack width="50%" direction="row">
                      <FormControl id="cc-exp">
                        <FormLabel>Gildistími</FormLabel>
                        <Input
                          autoComplete="cc-exp"
                          {...register("card.exp", {
                            required: true,
                            pattern: /^\d{2}\/\d{2}$/i,
                          })}
                        />
                      </FormControl>
                      <FormControl id="securitycode">
                        <FormLabel>CVV</FormLabel>
                        <Input
                          type="number"
                          maxLength={3}
                          autoComplete="cc-csc"
                          {...register("card.cvv", {
                            required: true,
                            maxLength: { value: 3, message: "adeins 3 stafir" },
                            pattern: /^\d{3}$/i,
                          })}
                        />
                      </FormControl>
                    </Stack>
                  </Stack>
                  <Stack
                    direction={["column", "row"]}
                    spacing={[3]}
                    width="100%"
                  >
                    <Button variant="ghost" onClick={clearCart} width="100%">
                      Hætta við
                    </Button>
                    <Button
                      type="submit"
                      bgColor="primary"
                      color="white"
                      width="100%"
                      _hover={{ bg: whiten("primary", 10) }}
                    >
                      Klára innkaup
                    </Button>
                  </Stack>
                </Stack>
              </form>
            </VStack>
          </Container>
        </section>
        <DevTool control={control} />
      </main>
    </>
  );
};

export default Checkout;
