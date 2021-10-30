import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail-tab.component.html',
  styleUrls: ['./detail-tab.component.scss']
})
export class DetailTabComponent {

  constructor(public route: ActivatedRoute) {}

}
