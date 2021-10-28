import {Component, EventEmitter, Output} from '@angular/core';
import {ISearchParams} from '../../../../models/search-params.interface';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  type: 'movie' | 'tv' = 'movie';

  @Output() searchParams = new EventEmitter<ISearchParams>();

  onSubmit(form: NgForm): void {
    form.value.page = 1;
    this.searchParams.emit(form.value);
  }

}
