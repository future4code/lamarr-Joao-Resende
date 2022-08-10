import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/Coordinator";

function ApplicationFormPage() {

    const navigate = useNavigate();


    return (
        <div>
            <h1>ApplicationFormPage</h1>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    );
}

export default ApplicationFormPage;