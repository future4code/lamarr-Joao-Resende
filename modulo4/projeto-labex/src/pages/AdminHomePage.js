import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToCreateTripPage, goToTripDetailsPage } from "../routes/Coordinator";

function AdminHomePage() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>AdminHomePage</h1>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
            <button onClick={() => goToTripDetailsPage(navigate)}>Detalhes da Viagem</button>
        </div>
    );
  }
  
  export default AdminHomePage;