import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToListTripsPage } from "../routes/Coordinator";
import { PageButton, PageContainer } from "../style";

function HomePage() {

    const navigate = useNavigate();
  

    return (
        <PageContainer>
            <h1>HomePage</h1>
            <div>
                <PageButton onClick={() => goToListTripsPage(navigate)}>Ver Viagens</PageButton>
                <PageButton onClick={() => goToAdminHomePage(navigate)}>Área de Admin</PageButton>
            </div>
        </PageContainer>
    );
}

export default HomePage;