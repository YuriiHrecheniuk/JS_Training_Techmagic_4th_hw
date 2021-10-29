import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ShowService} from '../../services/show.service';
import {IShow} from '../../models/show.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.scss']
})
export class ShowDescriptionComponent implements OnChanges, OnDestroy {

  @Input() showId!: number;
  @Input() showType!: 'tv' | 'movie';
  posterUrl!: string;
  genres!: string[];

  show!: IShow;

  subscription!: Subscription;

  constructor(private movieService: ShowService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.showId) {
      this.subscription = this.movieService.getShow(this.showType, this.showId)
        .subscribe(show => {
          this.show = show;
          this.posterUrl = environment.IMG_URL + show.poster_path;
          this.genres = show.genres.map(genre => genre.name);
        });
    }
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
