import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMovie } from '../models/movie.interface';
import { Observable } from 'rxjs';
import {ITrending } from '../models/trending.interface';
import { IImage } from '../models/image.interface';
import { IDiscover } from '../models/discover.interface'

@Injectable()
export class MovieService {
    public httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer ${environment.API_KEY}`
        })
    };

    constructor(private httpClient: HttpClient) {}

    public getMovie(movieId: number): Observable<IMovie> {
        return this.httpClient.get<IMovie>(`${environment.BASE_URL}/movie/${movieId}`, this.httpOptions);
    }

    public getTrending(mediaType: 'all' | 'movie' | 'tv' | 'person',
                       timeWindow: 'day' | 'week'): Observable<ITrending> {
      return this.httpClient.get<ITrending>(`${environment.BASE_URL}/trending/${mediaType}/${timeWindow}`, this.httpOptions);
    }

    public getImage(movieId: number): Observable<IImage> {
      return this.httpClient.get<IImage>(`${environment.BASE_URL}/movie/${movieId}/images`, this.httpOptions);
    }

    public getDiscover(): Observable<IDiscover> {
      return this.httpClient.get<IDiscover>(`${environment.BASE_URL}/discover/movie`,
        { ...this.httpOptions, ...{ vote_average: { gte: 8 } } });
    }

}
