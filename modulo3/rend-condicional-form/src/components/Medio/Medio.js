import React from "react";
import { Campo, Container } from "./style";

export function Medio() {
    return (
        <Container>
            <Campo>
                <label for="graduacao">Por que você não terminou um curso de graduação?</label>
                <textarea name="graduacao" rows={2} required/>
            </Campo>
            <Campo>
                <label for="lista-cursos">Você fez algum curso complementar?</label>
                <select name="lista-cursos" required>
                    <option value={""}>Escolha uma opção</option>
                    <option value={"CT"}>Curso técnico</option>
                    <option value={"CI"}>Curso de inglês</option>
                    <option value={"NF"}>Não fiz curso complementar</option>
                </select>
            </Campo>
        </Container>
    )
}