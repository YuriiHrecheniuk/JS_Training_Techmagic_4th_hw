import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import {IMovie} from "../../../models/movie.interface";
import {ITrending} from "../../../models/trending.interface";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  movieIDs: number[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getTrending('movie', 'day')
      .subscribe((trending: ITrending) => {
        this.movieIDs = trending.results.map(movie => movie.id);
      });
  }

}
