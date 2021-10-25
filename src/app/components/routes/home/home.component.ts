import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { IMovie } from '../../../models/movie.interface';
import { IImage } from 'src/app/models/image.interface';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieId = 0;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getDiscover(getRandomInt(1, 501))
      .subscribe(discover => {
        this.movieId = discover.results[getRandomInt(1, 20)].id;
      });
  }
}

function getRandomInt(min: number,
                      max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
