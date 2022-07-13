import React, { useState } from "react";
import { Medio } from "../Medio/Medio";
import { MensagemFinal } from "../MensagemFinal/MensagemFinal";
import { Superior } from "../Superior/Superior";
import { Campo, Container } from "./style";

export function ConteudoFormulario() {
    const [selecionado, setSelecionado] = useState()
    const [open, setOpen] = useState(true)

    function aoEnviar() {
        setOpen(!open)
    }

    return (
        <Container>
            {open ?
                <>
                    <Campo>
                        <label for="nome">Nome Completo:</label>
                        <input type="text" name="nome"/>
                    </Campo>
                    <Campo>
                        <label for="idade">Idade:</label>
                        <input type="number" name="idade"/>
                    </Campo>
                    <Campo>
                        <label for="email">E-mail:</label>
                        <input type="email" name="email"/>
                    </Campo>
                    <Campo>
                        <label for="lista-escolaridade">Qual é a sua escolaridade?</label>
                        <select name="lista-escolaridade" value={selecionado} onChange={(e) => { setSelecionado(e.target.value) }}>
                            <option value={""}>Escolha uma opção</option>
                            <option value={"medio-incompleto"}>Ensino médio incompleto</option>
                            <option value={"medio-completo"}>Ensino médio completo</option>
                            <option value={"superior-incompleto"}>Ensino superior incompleto</option>
                            <option value={"superior-completo"}>Ensino superior completo</option>
                        </select>
                    </Campo>
                    {
                        ((selecionado === "medio-incompleto" || selecionado === "medio-completo") && <Medio/>) ||
                        ((selecionado === "superior-incompleto" || selecionado === "superior-completo") && <Superior/>)
                    }
                    <button type="submit" onClick={aoEnviar}>Enviar</button>
                </>
                : <MensagemFinal/>}
        </Container>
    )
}