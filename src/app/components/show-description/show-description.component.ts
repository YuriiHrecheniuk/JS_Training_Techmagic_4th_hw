import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ShowService} from '../../services/show.service';
import {IShow} from '../../models/show.interface';

@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.scss']
})
export class ShowDescriptionComponent implements OnChanges {

  @Input() showId!: number;
  @Input() showType!: 'tv' | 'movie';
  posterUrl!: string;
  genres!: string[];

  show!: IShow;

  constructor(private movieService: ShowService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.movieService.getShow(this.showType, this.showId)
      .subscribe(show => {
        this.show = show;
        this.posterUrl = environment.IMG_URL + show.poster_path;
        this.genres = show.genres.map(genre => genre.name);
      });
  }
}
