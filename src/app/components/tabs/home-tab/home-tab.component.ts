import {Component, OnInit} from '@angular/core';
import {ShowService} from '../../../services/show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss']
})
export class HomeTabComponent implements OnInit {

  showId = 0;

  constructor(private movieService: ShowService) {
  }

  ngOnInit(): void {
    this.movieService.getDiscover(getRandomInt(1, 501))
      .subscribe(results => {
        this.showId = results[getRandomInt(1, results.length)];
      });
  }
}

function getRandomInt(min: number,
                      max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
