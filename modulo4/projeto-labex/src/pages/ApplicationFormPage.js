import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/Coordinator";
import { Campo, Form, PageButton, PageContainer } from "../style";
import { BASE_URL } from "../constants/constants";
import useRequestData from "../hooks/useRequestData";

function ApplicationFormPage() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)

    const [selectedTrip, setSelectedTrip] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')

    // POST

    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const applyToTrip = (id, name, age, applicationText, profession, country) => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/trips/${id}/apply`,
            {
                'name': name,
                'age': age,
                'applicationText': applicationText,
                'profession': profession,
                'country': country
            },
            headers)
            .then(() => {
                setIsLoading(false)
                alert("Cadastrado com sucesso!")

            }).catch((err) => {
                setIsLoading(false)
                setError(err)
                alert("Erro!")
            })
    }



    return (
        <PageContainer>
            <Form>
                <h1>Inscreva-se para uma viagem</h1>
                <Campo>
                    <select value={selectedTrip} onChange={(e) => { setSelectedTrip(e.target.value) }}>
                        <option value={""}>Escolha uma viagem</option>
                    </select>
                </Campo>
                <Campo>
                    <input placeholder="Nome" type="text" />
                </Campo>
                <Campo>
                    <input placeholder="Idade" type="number" />
                </Campo>
                <Campo>
                    <textarea rows={3} placeholder="Texto de Candidatura" type="text" />
                </Campo>
                <Campo>
                    <input placeholder="Profissão" type="text" />
                </Campo>
                <Campo>
                    <select name="lista-escolaridade" value={selectedCountry} onChange={(e) => { setSelectedCountry(e.target.value) }}>
                        <option value={""}>Escolha um país</option>
                    </select>
                </Campo>

                <div>
                    <button onClick={() => goBack(navigate)}>Voltar</button>
                    <button onClick={() => applyToTrip()}>Enviar</button>
                </div>
            </Form>
        </PageContainer>
    );
}

export default ApplicationFormPage;