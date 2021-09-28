import { useState, useRef, useEffect, useCallback } from "react";
import { Center, Heading, SimpleGrid, useDisclosure } from "@chakra-ui/react";

import { useSetRecoilState } from "recoil";

import { dispatcherState } from "@recoil/atoms";
import { createDispatcher, Dispatcher } from "@recoil/dispatcher";

import Item from "./Item";
import AddToCartModal from "./AddToCartModal";
import { ShoppingItem } from "src/types";

interface IProps {
  menu: Array<any>;
}
export function ShoppingItems({ menu }: IProps): JSX.Element {
  console.log(menu);
  const data = [
    {
      id: 1,
      name: "Margherita",
      price: 1200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi augue, feugiat eget elit ac, commodo iaculis mi. Ut metus dui, lobortis et vestibulum eget, sollicitudin posuere urna.",
      imgUri: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Pizza m/ pepperoni",
      price: 1250,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi augue, feugiat eget elit ac, commodo iaculis mi. Ut metus dui, lobortis et vestibulum eget, sollicitudin posuere urna.",
      imgUri: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Pizza m/ skinku og ananas",
      price: 1250,
      description: "Váá!",
      imgUri: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Pizza m/ pepp og svepp",
      price: 1250,
      description: "Váá!",
      imgUri: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Þín pizza",
      price: 1500,
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
      <Center mb={[2, 4, 6]}>
        <Heading as="h1" size="3xl">
          Matseðill
        </Heading>
      </Center>
      {menu.map((d) => (
        <>
          <Center my={[4, 6, 8]}>
            <Heading as="h2" size="2xl">
              {d[0].title}
            </Heading>
          </Center>
          <SimpleGrid minChildWidth="22rem" gap={[4, 6, 8]}>
            {d[1].map((item: ShoppingItem) => (
              <Item key={item.id} parentCallback={callback} data={item} />
            ))}
          </SimpleGrid>
        </>
      ))}
      {isOpen && (
        <AddToCartModal data={selected} isOpen={isOpen} onClose={onClose} />
      )}
    </section>
  );
}
