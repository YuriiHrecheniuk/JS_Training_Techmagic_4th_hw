import {Component} from '@angular/core';
import {ISearchParams} from '../../../models/search-params.interface';
import {ShowService} from '../../../services/show.service';
import {IShow} from '../../../models/show.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.scss']
})
export class SearchTabComponent {

  type!: 'movie' | 'tv';

  searchResultsIds: number[] = [];

  constructor(private movieService: ShowService) {}

  search(searchParams: ISearchParams): void {
    this.type = searchParams.type;

    this.movieService.search(searchParams)
      .subscribe(results => {
        this.searchResultsIds = results;
      });
  }

}

// todo: add button to see more search results
