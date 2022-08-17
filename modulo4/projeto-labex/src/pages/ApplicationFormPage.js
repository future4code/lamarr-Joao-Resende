import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/Coordinator";
import { Campo, Form, PageContainer } from "../style";
import { BASE_URL, countryOptions, tripOptions } from "../constants/constants";
import { useForm } from "../hooks/useForm";

function ApplicationFormPage() {

    const navigate = useNavigate();

    const [selectedTrip, setSelectedTrip] = useState(tripOptions[0].value)

    const [form, onChange, clear] = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })


    // POST

    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const applyToTrip = (ev) => {
        ev.preventDefault();

        axios.post(`${BASE_URL}/trips/${1}/apply`, form, headers) // COLOCAR ID 
            .then(() => {
                alert("Cadastrado com sucesso!")

            }).catch((err) => {
                console.log(err)
                alert("Erro!")
            })

        clear();
    }



    return (
        <PageContainer>
            <Form onSubmit={applyToTrip}>
                <h1>Inscreva-se para uma viagem</h1>
                <Campo>
                    <select value={selectedTrip} onChange={(e) => { setSelectedTrip(e.target.value) }} required >
                        {tripOptions.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.value}
                            </option>
                        ))}
                    </select>
                </Campo>
                <Campo>
                    <input name="name" value={form.name} onChange={onChange} placeholder="Nome" type="text" required />
                </Campo>
                <Campo>
                    <input name="age" value={form.age} onChange={onChange} placeholder="Idade" type="number" required />
                </Campo>
                <Campo>
                    <textarea name="applicationText" value={form.applicationText} onChange={onChange} rows={3} placeholder="Texto de Candidatura" type="text" required />
                </Campo>
                <Campo>
                    <input name="profession" value={form.profession} onChange={onChange} placeholder="Profissão" type="text" required />
                </Campo>
                <Campo>
                    <select name="country" value={form.country} onChange={onChange} required>
                        {countryOptions.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.value}
                            </option>
                        ))}
                    </select>
                </Campo>

                <div>
                    <button onClick={() => goBack(navigate)}>Voltar</button>
                    <button type="submit">Enviar</button>
                </div>
            </Form>
        </PageContainer>
    );
}

export default ApplicationFormPage;