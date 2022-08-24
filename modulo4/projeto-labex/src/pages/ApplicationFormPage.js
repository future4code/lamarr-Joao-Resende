import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBack, goToHomePage } from "../routes/Coordinator";
import { Campo, Footer, Form, Header, PageContainer } from "../style";
import { BASE_URL, countryOptions } from "../constants/constants";
import { useForm } from "../hooks/useForm";
import logo from "../img/logo.svg"
import useRequestData from "../hooks/useRequestData";

function ApplicationFormPage() {

    const navigate = useNavigate();

    const [selectedTrip, setSelectedTrip] = useState()

    const [form, onChange, clear] = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

    const [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${BASE_URL}trips`);


    const selectTrips = dataTrips && dataTrips.trips.map((trip) => {
        return { name: trip.name, id: trip.id }
    }).map((option, index) => {
        return (
            <option key={index} value={option.id}>
                {option.name}
            </option>
        )
    })

    // POST

    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const applyToTrip = (ev) => {
        ev.preventDefault();

        axios.post(`${BASE_URL}trips/${(selectedTrip)}/apply`, form, headers)
            .then(() => {
                alert("Cadastrado com sucesso!")

            }).catch((err) => {
                console.log(err)
                alert("Erro!")
            })

        clear();
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
                <Form onSubmit={applyToTrip}>
                    <h1>Inscreva-se para uma viagem</h1>
                    <Campo>
                        <select defaultValue={""} onChange={(e) => { setSelectedTrip(e.target.value) }} required >
                            <option value="">Escolha uma viagem</option>
                            {isLoadingTrips && <option>Loading...</option>}
                            {!isLoadingTrips && dataTrips && selectTrips}
                            {!isLoadingTrips && !dataTrips && errorTrips}
                        </select>
                    </Campo>
                    <Campo>
                        <input
                            name="name"
                            pattern="^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}$"
                            title="Digite pelo menos 3 letras (apenas letras são permitidas)."
                            value={form.name} 
                            onChange={onChange}
                            placeholder="Nome"
                            type="text"
                            required />
                    </Campo>
                    <Campo>
                        <input
                            name="age"
                            min={18}
                            value={form.age}
                            onChange={onChange}
                            placeholder="Idade"
                            type="number"
                            required />
                    </Campo>
                    <Campo>
                        <input
                            name="applicationText"
                            pattern="^.{30,}$"
                            title="Digite pelo menos 30 caracteres."
                            value={form.applicationText}
                            onChange={onChange}
                            rows={3}
                            placeholder="Texto de Candidatura"
                            type="text"
                            required />
                    </Campo>
                    <Campo>
                        <input
                            name="profession"
                            pattern="^.{10,}$"
                            title="Digite pelo menos 10 caracteres."
                            value={form.profession}
                            onChange={onChange}
                            placeholder="Profissão"
                            type="text"
                            required />
                    </Campo>
                    <Campo>
                        <select defaultValue={""} name="country" onChange={onChange} required>
                            <option value="">Escolha um país</option>
                            {countryOptions.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.value}
                                </option>
                            ))}
                        </select>
                    </Campo>

                    <div>
                        <button type="button" onClick={() => goBack(navigate)}>Voltar</button>
                        <button type="submit">Enviar</button>
                    </div>
                </Form>
            </PageContainer>

            <Footer>
                <p>&copy; 2022 LabeX Ltda.</p>
            </Footer>
        </>
    );
}

export default ApplicationFormPage;