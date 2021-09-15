import { Box, Container, Stack, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";

import { Header } from "@components";
import { ShoppingItems } from "@modules/menu";

const Menu: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Container maxW="container.xl">
          <Stack direction="column" mt={[6, 8, 12]} spacing={[6, 8, 12]}>
            <ShoppingItems />
          </Stack>
        </Container>
      </main>
    </>
  );
};

export default Menu;
