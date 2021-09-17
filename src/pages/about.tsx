import type { NextPage } from "next";
import { Box, Container, Stack, Heading } from "@chakra-ui/react";

import { Header } from "@components";

const About: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Container maxW="container.xl">
          <Heading as="h1" size="xl"></Heading>
        </Container>
      </main>
    </>
  );
};

export default About;
