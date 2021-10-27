import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss']
})
export class HomeTabComponent implements OnInit {

  movieId = 0;

  constructor(private movieService: MovieService) {
  }

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
