import {Component} from '@angular/core';
import {ISearchParams} from '../../models/search-params.interface';
import {ShowService} from '../../services/show.service';
import {IResultsIds} from '../../models/results.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.scss']
})
export class SearchTabComponent {

  searchParams!: ISearchParams;

  searchResults: IResultsIds | null = null;

  constructor(private movieService: ShowService) {}

  search(searchParams: ISearchParams): void {
    this.searchParams = searchParams;
    this.searchResults = null;

    this.movieService.search(searchParams)
      .subscribe(results => {
        this.searchResults = results;
      });
  }

  showMore(): void {
    this.searchParams.page++;

    this.movieService.search(this.searchParams)
      .subscribe(results => {
        this.searchResults!.ids.push(...results.ids);
      });
  }

  isFinished(): boolean {
    return this.searchParams.page >= this.searchResults!.total_pages;
  }

}
