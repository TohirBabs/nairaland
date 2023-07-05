"use client";
import Image from "next/image";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/chakra/theme";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <div className="">nairaland 2.0</div>
    </ChakraProvider>
  );
}
