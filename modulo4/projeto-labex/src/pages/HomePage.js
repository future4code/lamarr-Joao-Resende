import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToHomePage, goToListTripsPage } from "../routes/Coordinator";
import { Footer, Header, PageButton, PageContainer } from "../style";
import logo from "../img/logo.svg"

function HomePage() {

    const navigate = useNavigate();


    return (
        <>
            <Header>
                <div onClick={() => goToHomePage(navigate)}>
                    <img src={logo} alt="logo" />
                    <h1>Labe</h1><h1 className="orange">X</h1>
                </div>
            </Header>
            <PageContainer>
                <div>
                    <PageButton onClick={() => goToListTripsPage(navigate)}>Ver Viagens</PageButton>
                    <PageButton onClick={() => goToAdminHomePage(navigate)}>Área de Admin</PageButton>
                </div>
            </PageContainer>
            <Footer>
                <p>&copy; 2022 LabeX Ltda.</p>
            </Footer>
        </>
    );
}

export default HomePage;