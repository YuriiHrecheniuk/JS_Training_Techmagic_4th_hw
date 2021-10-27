import {Component} from '@angular/core';
import {ISearchParams} from '../../../models/search-params.interface';
import {MovieService} from '../../../services/movie.service';
import {IShow} from '../../../models/show.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.scss']
})
export class SearchTabComponent {

  type!: 'movie' | 'tv';

  searchResults: IShow[] = [];

  constructor(private movieService: MovieService) {
  }

  search(searchParams: ISearchParams): void {
    this.type = searchParams.type;

    this.movieService.search(searchParams)
      .subscribe(searchResults => {
        this.searchResults = searchResults.results;
      });
  }

}
