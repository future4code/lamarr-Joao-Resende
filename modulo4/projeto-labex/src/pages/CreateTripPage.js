import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/Coordinator";

function CreateTripPage() {

    const navigate = useNavigate();


    return (
        <div>
            <h1>CreateTripPage</h1>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>

    );
}

export default CreateTripPage;