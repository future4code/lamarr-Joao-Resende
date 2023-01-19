import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { Movie } from "../types/Movie";

export class MovieController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const title = req.body.title as string
      const description = req.body.description as string
      const durationInMinutes = req.body.durationInMinutes as number
      const yearOfRelease = req.body.yearOfRelease as number

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create({ title, description, durationInMinutes, yearOfRelease });

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  get = async (req: Request, res: Response): Promise<void> => {
    try {
      const movieBusiness = new MovieBusiness()
      const movies: Movie[] = await movieBusiness.get()

      res.status(200).send({ movies });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
