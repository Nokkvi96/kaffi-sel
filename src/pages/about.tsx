import type { NextPage } from "next";
import Head from "next/head";
import { Box, Container, Stack, Heading } from "@chakra-ui/react";

import { Header, Hero } from "@components";

const About: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero mb={[6, 8, 12]} />
        <Container maxW="container.xl">
          <Heading as="h1" size="xl"></Heading>
        </Container>
      </main>
    </>
  );
};

export default About;
