import React from "react";
import "./App.css";
import { Button, Container, HStack } from "@chakra-ui/react";
import AllRoute from "./Components/custom/AllRoute";
import Navbar from "./Components/custom/Navbar";

function App() {
  return (
    <Container maxW="container.xl" p={4}>
      <Navbar />
      <AllRoute />
    </Container>
  );
}

export default App;