import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../model/user'

export class TokenGenerator {

    public generateToken = (input: AuthenticationData): string => {
        const token = jwt.sign(
            {
                id: input.id,
                role: input.role
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: "1h"
            }
        )
        return token
    }

    public tokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as jwt.JwtPayload

        const result = {
            id: payload.id,
            role: payload.role
        }

        return result
    }
}