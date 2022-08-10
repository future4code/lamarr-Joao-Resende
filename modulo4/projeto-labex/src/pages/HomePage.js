import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToListTripsPage, goToLoginPage } from "../routes/Coordinator";

function HomePage() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>HomePage</h1>
            <button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</button>
            <button onClick={() => goToLoginPage(navigate)}>Login</button>
            <button onClick={() => goToAdminHomePage(navigate)}>Área de Admin</button>
        </div>
    );
}

export default HomePage;