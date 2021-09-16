import { useState, useRef, useEffect, useCallback } from "react";
import { Center, Heading, SimpleGrid, useDisclosure } from "@chakra-ui/react";

import { useSetRecoilState } from "recoil";

import { dispatcherState } from "@recoil/atoms";
import { createDispatcher, Dispatcher } from "@recoil/dispatcher";

import Item from "./Item";
import AddToCartModal from "../AddToCartModal";

export function ShoppingItems(): JSX.Element {
  const data = [
    {
      id: 1,
      name: "Hamborgari",
      price: 1200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi augue, feugiat eget elit ac, commodo iaculis mi. Ut metus dui, lobortis et vestibulum eget, sollicitudin posuere urna.",
      imgUri: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Pizza",
      price: 1250,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi augue, feugiat eget elit ac, commodo iaculis mi. Ut metus dui, lobortis et vestibulum eget, sollicitudin posuere urna.",
      imgUri: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Pizza m/ sveppum",
      price: 1250,
      description: "Váá!",
      imgUri: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Pizza m/ skinu og ananas",
      price: 1250,
      description: "Váá!",
      imgUri: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Pizza m/ pepperoni",
      price: 1250,
      description: "Váá!",
      imgUri: "https://via.placeholder.com/150",
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selected, setSelected] = useState(data[0]);

  const callback = useCallback((d) => {
    setSelected(d);
    onOpen();
  }, []);

  const setDispatcher = useSetRecoilState(dispatcherState);
  const dispatcherRef = useRef<Dispatcher>(createDispatcher());

  useEffect(() => {
    setDispatcher(dispatcherRef.current);
  }, []);

  return (
    <section>
      <Center>
        <Heading as="h1" size="3xl" mb={[4, 6, 8]}>
          Matseðill
        </Heading>
      </Center>
      <SimpleGrid minChildWidth="22rem" gap={[4, 6, 8]}>
        {data.map((d) => (
          <Item key={d.id} parentCallback={callback} data={d} />
        ))}
      </SimpleGrid>
      {isOpen && (
        <AddToCartModal data={selected} isOpen={isOpen} onClose={onClose} />
      )}
    </section>
  );
}
