import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { Movie } from "../model/Movie";
import { MovieInputDTO } from "../model/movieDTO";

export class MovieController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const title = req.body.title as string
      const description = req.body.description as string
      const durationInMinutes = req.body.durationInMinutes as number
      const yearOfRelease = req.body.yearOfRelease as number

      const input: MovieInputDTO = {
        title,
        description,
        durationInMinutes,
        yearOfRelease
      }

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create(input);

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }

  get = async (req: Request, res: Response): Promise<void> => {
    try {
      const movieBusiness = new MovieBusiness()
      const movies: Movie[] = await movieBusiness.get()

      res.status(200).send({ movies });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  };
}
