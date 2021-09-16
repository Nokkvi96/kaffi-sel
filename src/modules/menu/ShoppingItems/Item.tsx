import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  AspectRatio,
  Spacer,
} from "@chakra-ui/react";
import { ShoppingItem } from "src/types";

interface IProps {
  parentCallback: any;
  data: ShoppingItem;
}

export default function Item({ parentCallback, data }: IProps): any {
  const onClick = () => {
    parentCallback(data);
  };

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
      <Flex direction="column">
        <AspectRatio ratio={4 / 3} mb={3}>
          <Image
            objectFit="cover"
            src="https://via.placeholder.com/300"
            alt="Placeholder"
          />
        </AspectRatio>
        <Heading as="h2" size="lg" pb={1}>
          {data.id}. {data.name}
        </Heading>
        <Text size="md" pb={2}>
          {data.price} kr
        </Text>
        <Text size="md" mb={3} noOfLines={3}>
          {data.description}
        </Text>
        <Spacer />
        <Button onClick={onClick} mt="auto">
          Bæta við í körfu
        </Button>
      </Flex>
    </Box>
  );
}
