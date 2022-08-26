import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/constants";
import useRequestData from "../hooks/useRequestData";
import { goBack, goToApplicationFormPage, goToHomePage } from "../routes/Coordinator";
import { Card, EmptySpan, Footer, Header, LoadingDiv, PageButton, PageContainer } from "../style";
import logo from "../img/logo.svg"


function ListTripsPage() {

    const navigate = useNavigate();

    // GET

    const [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${BASE_URL}trips`);


    const tripsList = dataTrips && dataTrips.trips.map((trip) => {
        return (
            <Card key={trip.id}>
                <li><span>Nome:</span>{trip.name}</li>
                <li><span>Descrição:</span>{trip.description}</li>
                <li><span>Planeta:</span>{trip.planet}</li>
                <li><span>Duração:</span>{trip.durationInDays}</li>
                <li><span>Data:</span>{trip.date.split("-").reverse().join("/")}</li>
            </Card>
        )
    })

    const tripsForm = () => {
        if (dataTrips.trips.length === 0) {
            alert("Ops, parece que não temos nenhuma viagem cadastrada. Tente mais tarde.")
        } else {
            goToApplicationFormPage(navigate)
        }
    }

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
                    <PageButton onClick={() => tripsForm()}>Formulário de Inscrição</PageButton>
                </div>
                {isLoadingTrips && <LoadingDiv><img src='https://media.giphy.com/media/eNvoDhEKvUSC7euox4/giphy.gif' alt="gif" /><span>Carregando...</span></LoadingDiv>}
                {!isLoadingTrips && dataTrips && (dataTrips.trips.length === 0 ? <EmptySpan>Nenhuma viagem cadastrada.</EmptySpan> : tripsList)}
                {!isLoadingTrips && !dataTrips && errorTrips}
            </PageContainer>
            <Footer>
                <p>&copy; 2022 LabeX Ltda.</p>
            </Footer>
        </>
    );
}

export default ListTripsPage;