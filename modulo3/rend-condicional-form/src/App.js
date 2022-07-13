import React from "react";
import { ConteudoFormulario } from "./components/ConteudoFormulario/ConteudoFormulario";
import { Form, Header } from "./style";
import logo from "./img/logo.png"


function App() {

return (
  <Form>
    <Header>
      <img src={logo} />
      <h1>LabenuForms</h1>
    </Header>
    <ConteudoFormulario />
  </Form>
);
}

export default App;
