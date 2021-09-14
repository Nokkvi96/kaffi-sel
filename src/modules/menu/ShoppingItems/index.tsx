import { useRef, useEffect, useCallback } from "react";
import { Center, Heading, SimpleGrid } from "@chakra-ui/react";

import { useRecoilState, useSetRecoilState } from "recoil";

import { cartState, dispatcherState } from "@recoil/atoms";
import { createDispatcher, Dispatcher } from "@recoil/dispatcher";

import Item from "./Item";

export function ShoppingItems(): JSX.Element {
  const data = [
    {
      id: 1,
      name: "Hamborgari",
      price: 1200,
      description: "Ummm, mjög gott!",
      imgUri: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Pizza",
      price: 1250,
      description: "Váá!",
      imgUri: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Pizza",
      price: 1250,
      description: "Váá!",
      imgUri: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Pizza",
      price: 1250,
      description: "Váá!",
      imgUri: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Pizza",
      price: 1250,
      description: "Váá!",
      imgUri: "https://via.placeholder.com/150",
    },
  ];

  const [cart] = useRecoilState(cartState);

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
          <Item key={d.id} data={d} />
        ))}
      </SimpleGrid>
    </section>
  );
}
