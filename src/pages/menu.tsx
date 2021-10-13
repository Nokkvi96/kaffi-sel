import { Box, Container, Stack, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";

import { Header } from "@components";
import { ShoppingItems } from "@modules/menu";

const Menu: NextPage = (props) => {
  return (
    <>
      <Header />
      <main>
        <Container maxW="container.xl">
          <Stack direction="column" mt={[6, 8, 12]} spacing={[6, 8, 12]}>
            {/* @ts-ignore */}
            <ShoppingItems menu={props.menu} />
          </Stack>
        </Container>
      </main>
    </>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  // const res = await fetch("https://kaffi-sel.vercel.app/api");
  const menu = [
    [
      { title: "Pizza" },
      [
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
      ],
    ],
    [
      { title: "Hamborgarar" },
      [
        {
          id: 1,
          name: "Ostborgari",
          price: 1500,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi augue, feugiat eget elit ac, commodo iaculis mi. Ut metus dui, lobortis et vestibulum eget, sollicitudin posuere urna.",
          imgUri: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Beikonborgari",
          price: 1700,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi augue, feugiat eget elit ac, commodo iaculis mi. Ut metus dui, lobortis et vestibulum eget, sollicitudin posuere urna.",
          imgUri: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          name: "Grænmetisborgari",
          price: 1400,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi augue, feugiat eget elit ac, commodo iaculis mi. Ut metus dui, lobortis et vestibulum eget, sollicitudin posuere urna.",
          imgUri: "https://via.placeholder.com/150",
        },
      ],
    ],
    [
      { title: "Drykkir" },
      [
        {
          id: 1,
          name: "Pepsi Max",
          price: 400,
          description: "0.33/l",
          imgUri: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Kristall Lime",
          price: 400,
          description: "0.33/l",
          imgUri: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          name: "Vatn",
          price: 400,
          description: "0.33/l",
          imgUri: "https://via.placeholder.com/150",
        },
      ],
    ],
  ];

  return {
    props: {
      menu,
    },
  };
}

export default Menu;
