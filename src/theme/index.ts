import { extendTheme } from "@chakra-ui/react";

import { ButtonStyle as Button } from "./components";
import { styles } from "./styles";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#eaf8ea",
      100: "#c9e8c9",
      200: "#a8d8a8",
      300: "#85c885",
      400: "#63b962",
      500: "#4aa049",
      600: "#3a7c39",
      700: "#285928",
      800: "#173617", // main
    },
    background: {
      50: "#f6f0ef", // main
      100: "#ded4d2",
    },
    secondary: {
      50: "#fff9da",
      100: "#ffecad",
      200: "#ffdf7d",
      300: "#ffd24b",
      400: "#ffc51a",
      500: "#e6ab00", // main
      600: "#b38500",
    },
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
  components: {
    Button,
  },
});

export default theme;
