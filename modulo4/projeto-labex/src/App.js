import React from "react";
import PagesRoutes from "./routes/PagesRoutes";
import { Container, GlobalStyle } from "./style";


function App() {
  return (
    <Container>
      <GlobalStyle />

      <PagesRoutes />
    </Container>
  );
}

export default App;
