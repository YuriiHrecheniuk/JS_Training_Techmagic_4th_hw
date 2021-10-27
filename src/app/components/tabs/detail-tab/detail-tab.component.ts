import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {MovieService} from '../../../services/movie.service';


@Component({
  selector: 'app-about',
  templateUrl: './detail-tab.component.html',
  styleUrls: ['./detail-tab.component.scss']
})
export class DetailTabComponent {

  posterUrl = environment.IMG_URL;

  movie: any;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService) {
  }

  // ngOnInit(): void {
  //   this.route.params.subscribe((params: Params) => {
  //     this.movieService.getShow(params.id)
  //       .subscribe((movie: IShow) => {
  //         this.movie = movie;
  //         this.posterUrl += movie.poster_path;
  //       });
  //   });
  // }
}
