import { Movie } from "../types/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create({ id, title, description, durationInMinutes, yearOfRelease }: any): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id: id,
        title: title,
        description: description,
        duration_in_minutes: durationInMinutes,
        year_of_release: yearOfRelease,
      })
      .into(MovieDatabase.TABLE_NAME);
  }

  select = async (): Promise<Movie[]> => {
    try {
      const result = await MovieDatabase.connection(MovieDatabase.TABLE_NAME)
        .select()

      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
