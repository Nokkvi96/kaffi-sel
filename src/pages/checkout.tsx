import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
// import { DevTool } from "@hookform/devtools";
import * as yup from "yup";

import { useRecoilValue, useRecoilState } from "recoil";
import {
  Box,
  Button,
  Container,
  Stack,
  VStack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { whiten } from "@chakra-ui/theme-tools";

import { cartState, dispatcherState } from "@recoil/atoms";
import { cartStatsState } from "@recoil/selectors";
import { Header } from "@components";
import { CheckoutCart } from "@modules/checkout";

const schema = yup.object().shape({
  name: yup.string().required(),
});
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
    setFocus,
    formState: { errors, isSubmitting, isDirty, isValid },
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

  /**
   * clears cart in dispatcher
   */
  function clearCart() {
    dispatcher?.clearCart();
  }

  /**
   * adds spacing every 4 numbers and sets focus to next input when card number is complete.
   * @param v card number input
   */
  function handleCardNum(v: string) {
    setValue(
      "card.num",
      v
        .replace(/\s|[^0-9]+/g, "")
        .match(/.{1,4}/g)
        ?.join(" ") ?? ""
    );
    getValues("card.num").length >= 19 && setFocus("card.exp");
  }

  /**
   * adds '/' between month and year e.g. '08/21' and sets focus to next input when input is complete.
   * @param v card expiration input
   */
  function handleCardExp(v: string): void {
    setValue(
      "card.exp",
      v
        .replace(/\s|[^0-9]+/g, "")
        .match(/.{1,2}/g)
        ?.join("/") ?? ""
    );
    getValues("card.exp").length >= 5 && setFocus("card.cvv");
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <Container maxW="container.md">
            <VStack spacing={[4, 6, 8]}>
              <CheckoutCart cart={cart} />
              <form
                onSubmit={handleSubmit((data) => {
                  console.log(data);
                })}
              >
                <ErrorMessage
                  errors={errors}
                  name="name"
                  render={({ message }) => <p>{message}</p>}
                />
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
                      <FormControl id="cc-number" isRequired>
                        <FormLabel>Kortanúmer</FormLabel>
                        <Input
                          autoComplete="cc-number"
                          {...register("card.num", {
                            required: true,
                            pattern: {
                              value: /^(\d{4} ){3}\d{4}$/i,
                              message:
                                "Kortanúmer er á forminu xxxx xxxx xxxx xxxx",
                            },
                          })}
                          onChange={(e) => handleCardNum(e.target.value)}
                          maxLength={19}
                        />
                      </FormControl>
                    </Box>
                    <Stack width="50%" direction="row">
                      <FormControl id="cc-exp" isRequired>
                        <FormLabel>Gildistími</FormLabel>
                        <Input
                          autoComplete="cc-exp"
                          {...register("card.exp", {
                            required: true,
                            pattern: /^\d{2}\/\d{2}$/i,
                          })}
                          onChange={(e) => handleCardExp(e.target.value)}
                          maxLength={5}
                        />
                      </FormControl>
                      <FormControl id="securitycode" isRequired>
                        <FormLabel>Öryggisnúmer</FormLabel>
                        <Input
                          type="number"
                          autoComplete="cc-csc"
                          {...register("card.cvv", {
                            required: true,
                            maxLength: {
                              value: 3,
                              message: "Öryggisnúmer er aðeins 3 stafir",
                            },
                            pattern: {
                              value: /^\d{3}$/i,
                              message:
                                "Öryggisnúmer inniheldur aðeins tölustafi",
                            },
                          })}
                          maxLength={3}
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
                      disabled={!isDirty || !isValid}
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
        {/* <DevTool control={control} /> */}
      </main>
    </>
  );
};

export default Checkout;
