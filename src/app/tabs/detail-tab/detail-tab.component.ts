import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from "rxjs";


@Component({
  selector: 'app-detail',
  templateUrl: './detail-tab.component.html',
  styleUrls: ['./detail-tab.component.scss']
})
export class DetailTabComponent implements OnInit, OnDestroy {

  routerParams!: Params;
  subscription!: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.routerParams = params;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
