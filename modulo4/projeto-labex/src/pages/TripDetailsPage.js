import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { goBack, goToHomePage } from "../routes/Coordinator";
import { Footer, Header } from "../style";
import logo from "../img/logo.svg"
import { BASE_URL } from "../constants/constants";
import useProtectedPage from "../hooks/useProtectedPage";


function TripDetailsPage() {

    useProtectedPage();

    const navigate = useNavigate();

    // GET

    const [trip, setTrip] = useState([])
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)

    useEffect(() => {
        setIsLoading(true);

        const token = localStorage.getItem("token");

        axios.get(`${BASE_URL}id`,
        {
            headers: {
                auth: token
            }
        }).then((response) => {
            setIsLoading(false)
            setTrip(response.data.trip)

        }).catch((err) => {
            setIsLoading(false)
            setError(err)
        })
    }, [])


    return (
        <>
            <Header>
                <div onClick={() => goToHomePage(navigate)}>
                    <img src={logo} alt="logo" />
                    <h1>Labe</h1><h1 className="orange">X</h1>
                </div>
            </Header>
            <div>
                <h1>TripDetailsPage</h1>
                <button onClick={() => goBack(navigate)}>Voltar</button>
            </div>
            <Footer>
                <p>&copy; 2022 LabeX Ltda.</p>
            </Footer>
        </>
    );
}

export default TripDetailsPage;