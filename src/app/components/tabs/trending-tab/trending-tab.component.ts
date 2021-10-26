import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import {IMovie} from "../../../models/movie.interface";
import {ITrending} from "../../../models/trending.interface";

@Component({
  selector: 'app-trending',
  templateUrl: './trending-tab.component.html',
  styleUrls: ['./trending-tab.component.scss']
})
export class TrendingTabComponent implements OnInit {

  movieIDs!: number[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getTrending('movie', 'week')
      .subscribe((trending: ITrending) => {
        this.movieIDs = trending.results.map(movie => movie.id);
      });
  }

}
