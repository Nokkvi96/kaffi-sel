import { Box, Container, Stack, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";

import { Header, Hero } from "@components";
import { ShoppingItems } from "@modules/menu";

const Menu: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero mb={[6, 8, 12]} />
        <Container maxW="container.xl">
          <Stack direction="column" spacing={[6, 8, 12]}>
            <ShoppingItems />
          </Stack>
        </Container>
      </main>
    </>
  );
};

export default Menu;
