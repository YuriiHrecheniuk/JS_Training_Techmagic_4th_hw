import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie.interface';
import {ISearchParams} from "../../../models/search-params.interface";
import {ITV} from "../../../models/tv.interface";
import {MovieService} from "../../../services/movie.service";

@Component({
  selector: 'app-search',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.scss']
})
export class SearchTabComponent implements OnInit {

  searchResults: IMovie[] | ITV[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  search(searchParams: ISearchParams): void {
    this.movieService.search(searchParams)
      .subscribe(results => {
        this.searchResults = results;
        console.log('here')
        console.log(this.searchResults);
      });
  }

}
