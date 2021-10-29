import {Component, OnInit} from '@angular/core';
import {ShowService} from '../../services/show.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss']
})
export class HomeTabComponent implements OnInit {

  showId$!: Observable<number>;

  constructor(private showService: ShowService) {}

  ngOnInit(): void {
    this.showRandomMovie();
  }

  showRandomMovie(): void {
    this.showId$ = this.showService.getDiscover(getRandomInt(1, 501))
      .pipe(map(results => results[getRandomInt(1, results.length)]));
  }
}

function getRandomInt(min: number,
                      max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// when user visits the page he gets a random movie to watch

