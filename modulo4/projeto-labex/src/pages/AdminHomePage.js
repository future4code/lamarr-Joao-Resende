import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToCreateTripPage, goToHomePage, goToTripDetailsPage } from "../routes/Coordinator";
import { AdminTripCard, Footer, Header, PageButton, PageContainer } from "../style";
import logo from "../img/logo.svg"
import { BASE_URL } from "../constants/constants";
import useRequestData from "../hooks/useRequestData";
import useProtectedPage from "../hooks/useProtectedPage";

function AdminHomePage() {

    useProtectedPage();

    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }

    const [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${BASE_URL}trips`);

    
    const adminTripsList = dataTrips && dataTrips.trips.map((trip) => {
        return (
            <AdminTripCard key={trip.id} onClick={() => goToTripDetailsPage(navigate)}>
                <span>{trip.name}</span>
                <button ><i className="fa fa-trash-o"/></button>
            </AdminTripCard>
        )
    })

    return (
        <>
            <Header>
                <div onClick={() => goToHomePage(navigate)}>
                    <img src={logo} alt="logo" />
                    <h1>Labe</h1><h1 className="orange">X</h1>
                </div>
            </Header>

            <PageContainer>
                <h1>Painel Administrativo</h1>
                <div>
                    <PageButton onClick={() => goToHomePage(navigate)}>Voltar</PageButton>
                    <PageButton onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</PageButton>
                    <PageButton onClick={logout}>Logout</PageButton>
                </div>

                {isLoadingTrips && <span>Loading...</span>}
                {!isLoadingTrips && dataTrips && adminTripsList}
                {!isLoadingTrips && !dataTrips && errorTrips}

            </PageContainer>

            <Footer>
                <p>&copy; 2022 LabeX Ltda.</p>
            </Footer>
        </>
    );
}

export default AdminHomePage;