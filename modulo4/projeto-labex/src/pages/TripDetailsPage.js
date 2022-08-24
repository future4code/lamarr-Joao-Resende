import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { goBack, goToHomePage } from "../routes/Coordinator";
import { ApprovedList, CardButtons, EmptySpan, Footer, Header, PageButton, PageContainer, TripCard, TripDetailsTitles, TripInfoDiv, TripInfoList } from "../style";
import logo from "../img/logo.svg"
import { BASE_URL } from "../constants/constants";
import useProtectedPage from "../hooks/useProtectedPage";


function TripDetailsPage() {

    useProtectedPage();

    const pathParams = useParams();

    const navigate = useNavigate();

    // GET

    const [tripData, setTripData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [candidatesData, setCandidatesData] = useState(undefined)
    const [approvedCandidates, setApprovedCandidates] = useState([])

    // AXIOS

    const token = localStorage.getItem("token");


    // GET

    useEffect(() => {
        getTripDetail()
    }, [])

    const getTripDetail = () => {
        setIsLoading(true);

        axios.get(`${BASE_URL}trip/${pathParams.id}`,
            {
                headers: {
                    auth: token
                }
            }).then((response) => {
                setIsLoading(false)
                setTripData([response.data.trip])
                setCandidatesData(response.data.trip.candidates)
                setApprovedCandidates(response.data.trip.approved)
            }).catch((err) => {
                setIsLoading(false)
                setError(err)
            })
    }

    // PUT

    const headers = {
        headers: {
            'Content-Type': 'application/json',
            auth: token
        }
    }

    const decideCandidate = (candidate, choice) => {

        const body = { approve: choice }

        axios.put(`${BASE_URL}trips/${pathParams.id}/candidates/${candidate.id}/decide`, body, headers)
            .then(() => {
                if (choice === true) {
                    alert(`Candidato ${candidate.name} aprovado com sucesso!`)
                } else {
                    alert(`Candidato ${candidate.name} reprovado com sucesso!`)
                }
                getTripDetail()
            }).catch((err) => {
                alert("Erro!")
                console.log(err)
            })
    }

    // RENDER TRIP DETAILS

    const tripInfo = tripData && tripData.map((trip) => {
        return (
            <TripInfoDiv key={trip.id}>
                <h1>{trip.name}</h1>
                <TripInfoList>
                    <li><span>Nome:</span>{trip.name}</li>
                    <li><span>Descrição:</span>{trip.description}</li>
                    <li><span>Planeta:</span>{trip.planet}</li>
                    <li><span>Duração:</span>{trip.durationInDays}</li>
                    <li><span>Data:</span>{trip.date}</li>
                </TripInfoList>
            </TripInfoDiv>
        )
    })

    // RENDER CANDIDATES

    const candidatesList = candidatesData && candidatesData.map((candidate) => {
        return (
            <TripCard key={candidate.id}>
                <li><span>Nome:</span>{candidate.name}</li>
                <li><span>Profissão:</span>{candidate.profession}</li>
                <li><span>Idade:</span>{candidate.age}</li>
                <li><span>País:</span>{candidate.country}</li>
                <li><span>Texto de Candidatura:</span>{candidate.applicationText}</li>
                <CardButtons>
                    <button onClick={() => decideCandidate(candidate, false)}>Reprovar</button>
                    <button onClick={() => decideCandidate(candidate, true)}>Aprovar</button>
                </CardButtons>
            </TripCard>
        )
    })

    // RENDER APPROVED CANDIDATES

    const approvedCandidatesList = approvedCandidates && approvedCandidates.map((candidate) => {
        return (
            <ApprovedList>
                <li>{candidate.name}</li>
            </ApprovedList>
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

                {isLoading && <span>Carregando...</span>}
                {!isLoading && tripData && tripInfo}
                {!isLoading && !tripData && error}
                <div>
                    <PageButton onClick={() => goBack(navigate)}>Voltar</PageButton>
                </div>
                <TripDetailsTitles>Candidatos Pendentes</TripDetailsTitles>
                {isLoading && <span>Carregando...</span>}
                {!isLoading && tripData && (candidatesData.length === 0 ? <EmptySpan>Nenhum candidato registrado.</EmptySpan> : candidatesList)}
                {!isLoading && !tripData && error}
                <TripDetailsTitles>Candidatos Aprovados</TripDetailsTitles>
                {isLoading && <span>Carregando...</span>}
                {!isLoading && tripData && (approvedCandidates.length === 0 ? <EmptySpan>Nenhum candidato aprovado.</EmptySpan> : approvedCandidatesList)}
                {!isLoading && !tripData && error}

            </PageContainer>

            <Footer>
                <p>&copy; 2022 LabeX Ltda.</p>
            </Footer>
        </>
    );
}

export default TripDetailsPage;