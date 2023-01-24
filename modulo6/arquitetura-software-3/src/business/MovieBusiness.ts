import { MovieDatabase } from "../data/MovieDatabase"
import { CustomError } from '../error/CustomError'
import { InvalidDescription, InvalidTitle } from '../error/MovieErrors'
import { Movie } from '../model/Movie'
import { MovieInputDTO } from '../model/movieDTO'
import { generateId } from "../services/idGenerator"

export class MovieBusiness {
  async create(input: MovieInputDTO): Promise<void> {
    try {
      const { title, description, durationInMinutes, yearOfRelease } = input

      if (!title || !description || !durationInMinutes || !yearOfRelease) {
        throw new CustomError(422, "Preencha os campos title, description, durationInMinutes e yearOfRelease.")
      }

      if (description.length < 5) {
        throw new InvalidTitle()
      }

      if (description.length < 20) {
        throw new InvalidDescription()
      }

      const id = generateId()

      const movieDatabase = new MovieDatabase()

      const movie = new Movie(
        id,
        title,
        description,
        durationInMinutes,
        yearOfRelease
      )

      await movieDatabase.create(movie)      
      
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }

  get = async () => {
    try {
      const movieDatabase = new MovieDatabase();
      const movies: Movie[] = await movieDatabase.select()

      return movies;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }

  };

}
