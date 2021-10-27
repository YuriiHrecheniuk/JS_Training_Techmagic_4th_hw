import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITrending} from '../models/trending.interface';
import {IDiscover} from '../models/discover.interface';
import {ISearchParams} from '../models/search-params.interface';
import {ISearchResults} from '../models/search-results.interface';
import {IShow} from '../models/show.interface';

@Injectable()
export class MovieService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.API_KEY}`
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  public getShow(showType: 'tv' | 'movie', showId: number): Observable<IShow> {
    return this.httpClient.get<IShow>(`${environment.BASE_URL}/${showType}/${showId}`, this.httpOptions);
  }

  public getTrending(mediaType: 'all' | 'movie' | 'tv' | 'person',
                     timeWindow: 'day' | 'week'): Observable<ITrending> {
    return this.httpClient.get<ITrending>(`${environment.BASE_URL}/trending/${mediaType}/${timeWindow}`, this.httpOptions);
  }

  public getDiscover(page: number = 1): Observable<IDiscover> {
    const queryParams = new HttpParams()
      .set('vote_average.gte', '8')
      .set('page', `${page}`)
      .set('with_original_language', 'en')
      .set('include_adult', 'false');

    return this.httpClient.get<IDiscover>(`${environment.BASE_URL}/discover/movie`,
      {...this.httpOptions, params: queryParams});
  }

  public search(searchParams: ISearchParams): Observable<ISearchResults> {
    const queryParams = new HttpParams()
      .set('query', searchParams.query);

    return this.httpClient.get<ISearchResults>(`${environment.BASE_URL}/search/${searchParams.type}`,
      {...this.httpOptions, params: queryParams});
  }

}
