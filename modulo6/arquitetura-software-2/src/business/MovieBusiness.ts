import { v4 as generateId } from 'uuid'
import { MovieDatabase } from "../data/MovieDatabase"
import { Movie } from '../types/Movie'

export class MovieBusiness {
  async create({ title, description, durationInMinutes, yearOfRelease }: any): Promise<void> {

    if (!title || !description || !durationInMinutes || !yearOfRelease) {
      throw new Error("Dados inválidos (title, description, durationInMinutes, yearOfRelease)")
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      title,
      description,
      durationInMinutes,
      yearOfRelease
    })
  }

  get = async () => {
    try {
      const movieDatabase = new MovieDatabase();
      const movies: Movie[] = await movieDatabase.select()

      return movies;
    } catch (error: any) {
      throw new Error(error.message)
    }

  };

}
