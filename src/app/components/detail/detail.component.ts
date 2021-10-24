import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {IMovie} from "../../models/movie.interface";
import {environment} from "../../../environments/environment";
import {MovieService} from "../../services/movie.service";
import {IImage} from "../../models/image.interface";


@Component({
  selector: 'app-about',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  posterUrl = environment.IMG_URL;

  movie: IMovie = {
    id: '',
    vote_average: 0,
    title: '',
    release_date: '',
    poster_path: '',
    overview: '',
    genres: []
  };

  constructor(private route: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.movieService.getMovie(params.id)
        .subscribe((movie: IMovie) => {
          this.movie = movie;
          this.posterUrl += movie.poster_path;
        });
    });
  }
}
