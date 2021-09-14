import NextLink from "next/link";
import { Box, Container, Stack, Flex, Heading, Spacer } from "@chakra-ui/react";

export function Hero(props: any): any {
  return (
    <section>
      <Box paddingY={[4, 6, 8]} bg="secondary.500" color="white" {...props}>
        <Container maxW="container.xl">
          <Stack
            direction={{ base: "column", md: "row" }}
            width="100%"
            spacing={[6, 8, 12]}
          >
            <Box width="100%">
              <Heading as="h1" size="4xl">
                Kaffi Sel <br /> Þar sem lífið á sér stað
              </Heading>
            </Box>
            <Box width="100%">
              <Heading as="h1" size="4xl">
                hehe
              </Heading>
            </Box>
          </Stack>
        </Container>
      </Box>
    </section>
  );
}
