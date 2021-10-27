import {Component, OnInit} from '@angular/core';
import {ShowService} from 'src/app/services/show.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending-tab.component.html',
  styleUrls: ['./trending-tab.component.scss']
})
export class TrendingTabComponent implements OnInit {

  showIds!: number[];

  constructor(private movieService: ShowService) {}

  ngOnInit(): void {
    this.movieService.getTrending('movie', 'week')
      .subscribe(showIds => {
        this.showIds = showIds;
      });
  }

}
