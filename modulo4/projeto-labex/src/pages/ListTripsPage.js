import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/constants";
import useRequestData from "../hooks/useRequestData";
import { goBack, goToApplicationFormPage, goToHomePage } from "../routes/Coordinator";
import { Footer, Header, PageButton, PageContainer, TripCard } from "../style";
import logo from "../img/logo.svg"


function ListTripsPage() {

    const navigate = useNavigate();

    const [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${BASE_URL}trips`);


    const tripsList = dataTrips && dataTrips.trips.map((trip) => {
        return (
            <TripCard key={trip.id}>
                <li><span>Nome:</span>{trip.name}</li>
                <li><span>Descrição:</span>{trip.description}</li>
                <li><span>Planeta:</span>{trip.planet}</li>
                <li><span>Duração:</span>{trip.durationInDays}</li>
                <li><span>Data:</span>{trip.date}</li>
            </TripCard>
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
                <h1>Lista de Viagens</h1>
                <div>
                    <PageButton onClick={() => goBack(navigate)}>Voltar</PageButton>
                    <PageButton onClick={() => goToApplicationFormPage(navigate)}>Formulário de Inscrição</PageButton>
                </div>
                {isLoadingTrips && <span>Loading...</span>}
                {!isLoadingTrips && dataTrips && tripsList}
                {!isLoadingTrips && !dataTrips && errorTrips}
            </PageContainer>
            <Footer>
                <p>&copy; 2022 LabeX Ltda.</p>
            </Footer>
        </>
    );
}

export default ListTripsPage;