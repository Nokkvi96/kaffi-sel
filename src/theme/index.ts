import { extendTheme } from "@chakra-ui/react";

import { ButtonStyle as Button } from "./components";

const theme = extendTheme({
  colors: {
    primary: "#173617",
    background: "#f6f0ef",
    secondary: "#e6ab00",
    red: {
      50: "#ffe4e8",
      100: "#fbb9bf",
      200: "#f38d95",
      300: "#ec5f6c",
      400: "#e53342", // main
      500: "#cc1a28",
      600: "#a0121e",
      700: "#720a15",
      800: "#47050a",
      900: "#1f0000",
    },
  },
  fonts: {
    heading: "Neuton",
    body: "Montserrat",
  },
  components: {
    Button,
  },
});

export default theme;
