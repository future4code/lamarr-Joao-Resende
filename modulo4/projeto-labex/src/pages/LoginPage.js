import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { goBack } from "../routes/Coordinator";
import axios from "axios";
import { Campo, Form, PageContainer } from "../style";

function LoginPage() {

    const navigate = useNavigate();

    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const login = (ev) => {
        ev.preventDefault();

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-resende-lamarr/login",
            form)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error.message))

        clear();

    }

    return (
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
                        pattern="^.{3,}$"
                        title="mínimo de 3 caracteres"
                        required
                    />
                </Campo>
                <div>
                    <button onClick={() => goBack(navigate)}>Voltar</button>
                    <button type="submit">Enviar</button>
                </div>
            </Form>
        </PageContainer>
    );
}

export default LoginPage;