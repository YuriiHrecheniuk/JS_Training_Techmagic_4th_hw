import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ShowService} from '../../services/show.service';
import {IShow} from '../../models/show.interface';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.scss']
})
export class ShowDescriptionComponent implements OnChanges {

  @Input() showId!: number;
  @Input() showType!: 'tv' | 'movie';
  @Input() detail = false;

  posterBaseUrl = environment.IMG_URL;
  show$!: Observable<IShow>;

  constructor(private movieService: ShowService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.showId) {
      this.show$ = this.movieService.getShow(this.showType, this.showId);
    }
  }
}
