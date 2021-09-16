import { useState, useReducer } from "react";

import { useRecoilValue } from "recoil";
import { dispatcherState } from "@recoil/atoms";
import {
  Flex,
  Stack,
  HStack,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { MdRemove, MdAdd } from "react-icons/md";

import quantityReducer from "./quantityReducer";

import { ShoppingItem } from "src/types";

interface IProps {
  data: ShoppingItem;
  isOpen: boolean;
  onClose: any;
}
export default function AddToCartModal({
  data,
  isOpen,
  onClose,
}: IProps): JSX.Element {
  const [note, setNote] = useState(""); // Customer note
  const [state, dispatch] = useReducer(quantityReducer, {
    quantity: 1,
    price: data.price,
  });
  const { price, quantity } = state;

  const dispatcher = useRecoilValue(dispatcherState);

  function addToCart() {
    console.log(note, quantity, price);
    dispatcher?.addToCart({
      id: data.id,
      name: data.name,
      price: price,
      description: data.description,
      imgUri: data.imgUri,
      quantity,
      customerNote: note,
    });
    onClose();
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack direction="column" spacing={3}>
              <Box>{data.description}</Box>
              <FormControl>
                <FormLabel mb={1}>Athugasemdir:</FormLabel>
                <Input
                  placeholder={`Athugasemd fyrir ${data.name}`}
                  size="lg"
                  onChange={(e) => setNote(e.target.value)}
                />
              </FormControl>
              <Flex justifyContent="space-between" alignContent="center">
                <Box>{price} kr.</Box>
                <HStack spacing={3}>
                  <IconButton
                    aria-label="decrement"
                    icon={<MdRemove />}
                    rounded="full"
                    onClick={() => dispatch({ type: "decrement" })}
                  />
                  <Text>{quantity} </Text>
                  <IconButton
                    aria-label="increment"
                    icon={<MdAdd />}
                    rounded="full"
                    onClick={() => dispatch({ type: "increment" })}
                  />
                </HStack>
              </Flex>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Stack direction={["column", "row"]} spacing={[3]} width="100%">
              <Button variant="ghost" onClick={onClose} width="100%">
                Hætta við
              </Button>
              <Button colorScheme="blue" width="100%" onClick={addToCart}>
                Bæta við körfu
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
