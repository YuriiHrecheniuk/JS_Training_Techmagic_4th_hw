export interface IMovie {
    id: string;
    vote_average: number;
    title: string;
    release_date: string;
    poster_path: string;
    overview: string;
    genres: { name: string }[]
}
