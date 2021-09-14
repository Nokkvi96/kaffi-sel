import {
  Box,
  Button,
  Stack,
  Heading,
  Text,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { dispatcherState } from "@recoil/atoms";
import { ShoppingItem } from "src/types";

interface IProps {
  data: ShoppingItem;
}

export default function Item({ data }: IProps): any {
  const dispatcher = useRecoilValue(dispatcherState);

  function addToCart() {
    dispatcher?.addToCart({ ...data, quantity: 1, customerNote: "hahaha" });
  }

  return (
    <Box
      bg="white"
      w="100%"
      p={4}
      color="white"
      borderRadius="lg"
      overflow="hidden"
      textColor="primary"
      alignItems="center"
      boxShadow="md"
    >
      <Stack direction="column" spacing={2}>
        <AspectRatio ratio={4 / 3}>
          <Image
            objectFit="cover"
            src="https://via.placeholder.com/300"
            alt="Placeholder"
          />
        </AspectRatio>
        <Heading as="h2" size="lg">
          {data.name}
        </Heading>
        <Text size="md">{data.price} kr</Text>
        <Text size="md">{data.description}</Text>
        <Button onClick={addToCart}>Bæta við í körfu</Button>
      </Stack>
    </Box>
  );
}
