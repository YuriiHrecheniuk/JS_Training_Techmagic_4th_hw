import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IMovie } from '../../models/movie.interface';
import { IImage } from 'src/app/models/image.interface';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movie: IMovie = {
    id: '',
    vote_average: 0,
    title: '',
    release_date: '',
    poster_path: '',
    overview: '',
    genres: []
  };

  public posterUrl = environment.IMG_URL;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getDiscover()
      .subscribe(discover => {
        this.movie = discover.results[0];
      });
  }
}
