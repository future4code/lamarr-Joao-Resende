import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationFormPage } from "../routes/Coordinator";

function ListTripsPage() {

    const navigate = useNavigate();

    
    return (
        <div>
            <h1>ListTripsPage</h1>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(navigate)}>Formulário de Inscrição</button>
        </div>
    );
  }
  
  export default ListTripsPage;