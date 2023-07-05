import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/comfortaa/300.css";
import "@fontsource/comfortaa/400.css";
import "@fontsource/comfortaa/700.css";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#5F8D4E",
    },
  },
  fonts: {
    body: `'Comfortaa', sans-serif`,
  },
  styles: {
    global: () => {
      body: {
        bg: "gray.200";
      }
    },
  },
});
