import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISearchParams} from '../models/search-params.interface';
import {IResults, IResultsIds} from '../models/results.interface';
import {IShow} from '../models/show.interface';
import {map, pluck} from 'rxjs/operators';

@Injectable()
export class ShowService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.API_KEY}`
    })
  };

  constructor(private httpClient: HttpClient) {
  }


  // we only need full show info in the ShowDescription component
  // in all other cases we need just ID of the show
  public getShow(showType: 'tv' | 'movie', showId: number): Observable<IShow> {
    return this.httpClient.get<IShow>(`${environment.BASE_URL}/${showType}/${showId}`, this.httpOptions);
  }

  public getTrending(mediaType: 'all' | 'movie' | 'tv' | 'person',
                     timeWindow: 'day' | 'week'): Observable<number[]> {
    return this.httpClient.get<IResults>(`${environment.BASE_URL}/trending/${mediaType}/${timeWindow}`, this.httpOptions)
      .pipe(pluck('results'))
      .pipe(map(results => results.map(result => result.id)));
  }

  public getDiscover(page: number = 1): Observable<number[]> {
    const queryParams = new HttpParams()
      .set('vote_average.gte', '8')
      .set('page', `${page}`)
      .set('with_original_language', 'en')
      .set('include_adult', 'false');

    return this.httpClient.get<IResults>(`${environment.BASE_URL}/discover/movie`,
      {...this.httpOptions, params: queryParams})
      .pipe(pluck('results'))
      .pipe(map(results => results.filter(result => result.poster_path)))
      .pipe(map(results => results.map(result => result.id)));
  }

  public search(searchParams: ISearchParams): Observable<IResultsIds> {
    const queryParams = new HttpParams()
      .set('query', searchParams.query)
      .set('page', `${searchParams.page}`);

    return this.httpClient.get<Required<IResults>>(`${environment.BASE_URL}/search/${searchParams.type}`,
      {...this.httpOptions, params: queryParams})
      .pipe(map(obs => {
        return {
          ids: obs.results.map(result => result.id),
          total_pages: obs.total_pages,
        };
      }));
      // .pipe(map(results => results.map(result => result.id)));
  }

}
