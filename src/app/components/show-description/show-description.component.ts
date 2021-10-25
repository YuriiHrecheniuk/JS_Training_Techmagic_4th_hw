import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {environment} from "../../../environments/environment";
import {IMovie} from "../../models/movie.interface";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.scss']
})
export class ShowDescriptionComponent implements OnChanges {

  @Input() movieId!: number;
  posterUrl = environment.IMG_URL;
  genres: string[] = [];

  movie: IMovie | undefined;

  constructor(private movieService: MovieService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.movieId) {
      this.movieService.getMovie(this.movieId)
      .subscribe((movie: IMovie) => {
        this.movie = movie;
        this.posterUrl += movie.poster_path;
        this.genres = movie.genres.map(genre => genre.name);
      });
    }
  }

}
