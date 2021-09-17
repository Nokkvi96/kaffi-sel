import { useEffect } from "react";

import {
  Box,
  Center,
  Container,
  Stack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

// import img from "@public/plant.svg";

interface IProps {
  heading: string;
  paragraph?: string;
  bgColor?: string;
  textColor?: string;
  direction?: "row" | "row-reverse";
  img: string;
}

export function Section({
  heading,
  paragraph,
  bgColor = "secondary",
  direction = "row",
  textColor = "white",
  img,
}: IProps) {
  return (
    <section>
      <Box py={[6, 8, 12]} bg={bgColor} color={textColor}>
        <Container maxW="container.xl">
          <Stack
            direction={{ base: "column", md: direction }}
            width="100%"
            spacing={[6, 8, 12]}
          >
            <Box width="100%">
              <Heading as="h1" size="4xl" mb={[2, 2, 4]}>
                {heading}
              </Heading>
              {paragraph && <Text fontSize="2xl">{paragraph}</Text>}
            </Box>
            <Box width="100%">
              <Image src={img} />
            </Box>
          </Stack>
        </Container>
      </Box>
    </section>
  );
}
