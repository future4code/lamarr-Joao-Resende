import React from "react";
import { Campo, Container } from "./style";

export function Superior() {
    return (
        <Container>
            <Campo>
                <label for="curso">Qual curso?</label>
                <input type="text" name="curso" required/>
            </Campo>
            <Campo>
                <label for="unidade-ensino">Qual a unidade de ensino?</label>
                <input type="text" name="unidade-ensino" required/>
            </Campo>
        </Container>
    )
}