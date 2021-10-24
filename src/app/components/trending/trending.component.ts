import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import {IMovie} from "../../models/movie.interface";
import {ITrending} from "../../models/trending.interface";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  trending: IMovie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getTrending('movie', 'day')
      .subscribe((trending: ITrending) => {
        this.trending = trending.results;
        console.log(this.trending);
      });
  }

}
