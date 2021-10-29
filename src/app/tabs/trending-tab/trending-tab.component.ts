import {Component, OnInit} from '@angular/core';
import {ShowService} from 'src/app/services/show.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-trending',
  templateUrl: './trending-tab.component.html',
  styleUrls: ['./trending-tab.component.scss']
})
export class TrendingTabComponent implements OnInit {

  showIds$!: Observable<number[]>;

  constructor(private movieService: ShowService) {}

  ngOnInit(): void {
    this.showIds$ = this.movieService.getTrending('movie', 'week');
  }

}
