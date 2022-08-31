import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToCreateTripPage, goToHomePage, goToTripDetailsPage } from "../routes/Coordinator";
import { AdminTripCard, EmptySpan, Footer, Header, LoadingDiv, PageButton, PageContainer } from "../style";
import logo from "../img/logo.svg"
import { BASE_URL } from "../constants/constants";
import useRequestData from "../hooks/useRequestData";
import useProtectedPage from "../hooks/useProtectedPage";

function AdminHomePage() {

    useProtectedPage();

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [dataTrips, isLoadingTrips, errorTrips, getTrips] = useRequestData(`${BASE_URL}trips`);

    const logout = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }

    // DELETE

    const headers = {
        headers: {
            'Content-Type': 'application/json',
            auth: token
        }
    }

    const deleteTrip = (trip) => {
        if (window.confirm(`Você tem certeza que deseja deletar a viagem ${trip.name}?`)) {
            axios.delete(`${BASE_URL}trips/${trip.id}`, headers)
                .then(() => {
                    alert("Viagem deletada!")
                    getTrips()
                }).catch((err) => {
                    alert("Erro!")
                    console.log(err.response)
                })
        }
    }


    // RENDER CARDS


    const adminTripsList = dataTrips && dataTrips.trips.map((trip) => {
        return (
            <AdminTripCard key={trip.id} onClick={() => goToTripDetailsPage(navigate, trip.id)}>
                <span>{trip.name}</span>
                <button onClick={(e) => {
                    e.stopPropagation()
                    deleteTrip(trip)
                }}>
                    <i className="fa fa-trash-o" />
                </button>
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

                {isLoadingTrips && <LoadingDiv><img src='https://media.giphy.com/media/eNvoDhEKvUSC7euox4/giphy.gif' alt="gif" /><span>Carregando...</span></LoadingDiv>}
                {!isLoadingTrips && dataTrips && (dataTrips.trips.length === 0 ? <EmptySpan>Nenhuma viagem cadastrada.</EmptySpan> : adminTripsList)}
                {!isLoadingTrips && !dataTrips && errorTrips}

            </PageContainer>

            <Footer>
                <p>&copy; 2022 LabeX Ltda.</p>
            </Footer>
        </>
    );
}

export default AdminHomePage;