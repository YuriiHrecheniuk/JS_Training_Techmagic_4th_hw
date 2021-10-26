import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {IMovie} from '../../../models/movie.interface';
import {environment} from '../../../../environments/environment';
import {MovieService} from '../../../services/movie.service';
import {IImage} from '../../../models/image.interface';


@Component({
  selector: 'app-about',
  templateUrl: './detail-tab.component.html',
  styleUrls: ['./detail-tab.component.scss']
})
export class DetailTabComponent implements OnInit {

  posterUrl = environment.IMG_URL;

  movie: any;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.movieService.getMovie(params.id)
        .subscribe((movie: IMovie) => {
          this.movie = movie;
          this.posterUrl += movie.poster_path;
        });
    });
  }
}
