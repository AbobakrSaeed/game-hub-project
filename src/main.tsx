import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import theme from "./theme.ts";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>
);

////////the server api used for this project/////
////https://api.rawg.io/docs/#operation/games_list////
