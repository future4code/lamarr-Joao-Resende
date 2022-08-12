import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/constants";
import useRequestData from "../hooks/useRequestData";
import { goBack, goToApplicationFormPage } from "../routes/Coordinator";
import { PageButton, PageContainer, TripCard } from "../style";

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
        <PageContainer>
            <h1>Lista de Viagens</h1>
            <div>
                <PageButton onClick={() => goBack(navigate)}>Voltar</PageButton>
                <PageButton onClick={() => goToApplicationFormPage(navigate)}>Formulário de Inscrição</PageButton>
            </div>
            {isLoadingTrips && "Loading..."}
            {!isLoadingTrips && dataTrips && tripsList}
            {!isLoadingTrips && !dataTrips && errorTrips}
        </PageContainer>
    );
}

export default ListTripsPage;