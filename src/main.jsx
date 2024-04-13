import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from '@chakra-ui/react'

import { global, reset } from "./styles/index.js";
import { Global } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
    <Global styles={reset} />
    <Global styles={global} />
    <App />
    </ChakraProvider>
  </React.StrictMode>
);
