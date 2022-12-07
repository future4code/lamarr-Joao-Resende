import { connection } from '../data/connection'

export default async function selectAllUsers(name: string, type: string, order: string, sort: string, size: number, offset: number): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE name LIKE "%${name}%"
       AND type LIKE "%${type}%"
       ORDER BY ${order} ${sort}
       LIMIT ${size}
       OFFSET ${offset};
    `)

    return result[0]
}