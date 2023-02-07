import { CustomError } from "../error/CustomError";
import { Movie } from "../model/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create(movie: Movie): Promise<void> {
    try {
      await MovieDatabase.connection
        .insert({
          id: movie.getId(),
          title: movie.getTitle(),
          description: movie.getDescription(),
          duration_in_minutes: movie.getDuration(),
          year_of_release: movie.getYear(),
        })
        .into(MovieDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }

  select = async (): Promise<Movie[]> => {
    try {
      const result = await MovieDatabase.connection(MovieDatabase.TABLE_NAME)
        .select()

      return result;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  };
}
