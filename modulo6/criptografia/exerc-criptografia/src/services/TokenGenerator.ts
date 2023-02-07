import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../model/user'

export class TokenGenerator {

    public generateToken = (id: string) => {
        const token = jwt.sign(
            { id },
            process.env.JWT_KEY as string,
            { expiresIn: "1h" }
         )
        return token 
    }

    public tokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as jwt.JwtPayload

        return {id: payload.id as string}
    }
}