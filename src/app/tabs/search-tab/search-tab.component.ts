import {Component} from '@angular/core';
import {ISearchParams} from '../../models/search-params.interface';
import {ShowService} from '../../services/show.service';
import {IResultsIds} from '../../models/results.interface';
import {forkJoin, Observable} from 'rxjs';
import {map, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.scss']
})
export class SearchTabComponent {

  searchResults$!: Observable<IResultsIds>;
  totalShows$!: Observable<number[]>;
  searchParams!: ISearchParams;

  constructor(private movieService: ShowService) {}

  search(searchParams: ISearchParams): void {
    this.searchParams = searchParams;

    this.searchResults$ = this.movieService.search(searchParams);

    this.totalShows$ = this.searchResults$.pipe(pluck('ids'));
  }

  showMore(): void {
    this.searchParams.page++;

    const moreResults$ = this.movieService.search(this.searchParams)
      .pipe(pluck('ids'));

    this.totalShows$ = forkJoin([this.totalShows$, moreResults$])
      .pipe(map(([s1, s2]) => [...s1, ...s2]));
  }
}
