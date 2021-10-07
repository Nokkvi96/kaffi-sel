import { Box, Container, Stack, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";

import { Header } from "@components";
import { ShoppingItems } from "@modules/menu";

const Menu: NextPage = (props) => {
  console.log(props);
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
  const res = await fetch("http://localhost:3000/api");
  const menu = await res.json();

  return {
    props: {
      menu,
    },
  };
}

export default Menu;
