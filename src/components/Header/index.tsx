import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Stack,
  Flex,
  Heading,
  Link,
} from "@chakra-ui/react";

import { useRecoilValue } from "recoil";

import { MdShoppingCart } from "react-icons/md";

import { cartStatsState } from "@recoil/selectors";

export function Header(): JSX.Element {
  const iconSize = "2rem";

  const { unique } = useRecoilValue(cartStatsState);

  return (
    <Box
      as="nav"
      paddingY={[2, 4]}
      bg="primary.800"
      color="white"
      boxShadow="inner"
    >
      <Container maxW="container.xl">
        <Flex
          align="center"
          justify="space-between"
          wrap="wrap"
          bg="primary.800"
        >
          <NextLink href="/" passHref>
            <Link>
              <Heading as="h2" size="lg">
                Kaffi Sel
              </Heading>
            </Link>
          </NextLink>
          <Stack direction="row" spacing="4" align="center">
            <NextLink href="/menu" passHref>
              <Link>
                <Heading as="h3" size="md">
                  Matseðill
                </Heading>
              </Link>
            </NextLink>
            <NextLink href="/about" passHref>
              <Link>
                <Heading as="h3" size="md">
                  Um Okkur
                </Heading>
              </Link>
            </NextLink>
            <Button
              bg="inherit"
              _hover={{ scale: "1.5" }}
              rounded="full"
              color="white"
              padding="1"
            >
              <MdShoppingCart /> {!(unique > 0) ? "" : unique}
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
