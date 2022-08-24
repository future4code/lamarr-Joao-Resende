import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToHomePage } from "../routes/Coordinator";
import { Campo, Footer, Form, Header, PageContainer } from "../style";
import logo from "../img/logo.svg"
import { BASE_URL, planetOptions } from "../constants/constants";
import axios from "axios";
import { useForm } from "../hooks/useForm";
import useProtectedPage from "../hooks/useProtectedPage";


function CreateTripPage() {

    useProtectedPage();

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [form, onChange, clear] = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    // POST

    const headers = {
        headers: {
            'Content-Type': 'application/json',
            auth: token
        }
    }

    const createTrip = (ev) => {
        ev.preventDefault();

        axios.post(`${BASE_URL}trips`, form, headers)
            .then(() => {
                alert("Viagem criada com sucesso!")

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
                <Form onSubmit={createTrip}>
                    <h1>Criar Viagem</h1>
                    <Campo>
                        <input
                            name="name"
                            pattern="^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{5,}$"
                            title="Digite pelo menos 5 letras (apenas letras são permitidas)."
                            value={form.name} onChange={onChange}
                            placeholder="Nome da viagem"
                            type="text"
                            required />
                    </Campo>
                    <Campo>
                        <select defaultValue={""} name="planet" onChange={onChange} required >
                            <option value="">Escolha um planeta</option>
                            {planetOptions.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.value}
                                </option>
                            ))}
                        </select>
                    </Campo>
                    <Campo>
                        <input
                            name="date"
                            min={new Date().toISOString().slice(0, 10)}
                            value={form.date}
                            onChange={onChange}
                            placeholder="Data"
                            type="date"
                            required />
                    </Campo>
                    <Campo>
                        <input
                            name="description"
                            pattern="^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{30,}$"
                            title="Digite pelo menos 30 letras (apenas letras são permitidas)."
                            value={form.description}
                            onChange={onChange}
                            placeholder="Descrição"
                            type="text"
                            required />
                    </Campo>
                    <Campo>
                        <input
                            name="durationInDays"
                            min={50}
                            value={form.durationInDays}
                            onChange={onChange}
                            placeholder="Duração em dias"
                            type="number"
                            required />
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

export default CreateTripPage;