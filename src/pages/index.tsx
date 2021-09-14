import { Box, Container, Stack, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";

import { Header, Hero } from "@components";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero mb={[6, 8, 12]} />
        <Container maxW="container.xl">
          <Stack direction="column" spacing={[6, 8, 12]}>
            <p>Heima</p>
          </Stack>
        </Container>
      </main>
    </>
  );
};

export default Home;
