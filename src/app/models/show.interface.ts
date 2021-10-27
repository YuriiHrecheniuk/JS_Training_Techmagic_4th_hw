export interface IShow {
  id: number;
  name?: string;
  title?: string;
  genres: { name: string }[];
  overview: string;
  poster_path: string;
}
