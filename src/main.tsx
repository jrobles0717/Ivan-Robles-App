import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { system } from "./theme"; // Import your custom system if you created one

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      {" "}
      {/* Use the system as the value */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
