import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { goToHomePage } from "../routes/Coordinator";
import axios from "axios";
import { Campo, Footer, Form, Header, PageContainer } from "../style";
import logo from "../img/logo.svg"
import { BASE_URL } from "../constants/constants";


function LoginPage() {

    const navigate = useNavigate();

    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const login = (ev) => {
        ev.preventDefault()

        axios.post(`${BASE_URL}login`, form)
            .then(response => {
                localStorage.setItem("token", response.data.token)
                navigate("/admin/trips/list")
            })
            .catch((error) => {
                alert("Erro! Usuário ou senha incorreta.")
                console.log(error.message)
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
                <Form onSubmit={login}>
                    <h1>Login</h1>
                    <Campo>
                        <input
                            name="email"
                            placeholder="E-mail"
                            value={form.email}
                            onChange={onChange}
                            type="email"
                            required
                        />
                    </Campo>
                    <Campo>
                        <input
                            name="password"
                            placeholder="Senha"
                            value={form.password}
                            onChange={onChange}
                            type="password"
                            required
                        />
                    </Campo>
                    <div>
                        <button type="button" onClick={() => goToHomePage(navigate)}>Voltar</button>
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

export default LoginPage;