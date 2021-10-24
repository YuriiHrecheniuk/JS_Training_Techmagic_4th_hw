import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {IMovie} from "../../models/movie.interface";
import {MovieService} from "../../services/movie.service";
import {Params} from "@angular/router";

@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.scss']
})
export class ShowDescriptionComponent implements OnInit {

  @Input() movieId: string;
  posterUrl = environment.IMG_URL;
  genres: string[] = [];

  movie: IMovie = {
    id: '',
    vote_average: 0,
    title: '',
    release_date: '',
    poster_path: '',
    overview: '',
    genres: []
  };

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
      this.movieService.getMovie(this.movieId)
        .subscribe((movie: IMovie) => {
          this.movie = movie;
          this.posterUrl += movie.poster_path;
          this.genres = movie.genres.map(genre => genre.name);
        });
  }

}
