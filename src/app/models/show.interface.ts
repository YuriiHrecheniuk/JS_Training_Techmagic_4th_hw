export interface IShow {
  id: number;
  name?: string;
  title?: string;
  genres: { name: string }[];
  overview: string;
  poster_path: string;

  release_date?: string;
  vote_average?: number;
  budget?: number;

  number_of_episodes?: number;
  languages?: string[];
}
