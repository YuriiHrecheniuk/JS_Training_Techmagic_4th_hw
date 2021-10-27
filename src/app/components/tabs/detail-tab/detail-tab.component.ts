import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail-tab.component.html',
  styleUrls: ['./detail-tab.component.scss']
})
export class DetailTabComponent implements OnInit {

  routerParams: Params = {
    showType: '',
    showId: 0,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.routerParams.showType = params.showType;
      this.routerParams.showId = +params.id;
    });
  }
}
