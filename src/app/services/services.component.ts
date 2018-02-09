import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {
  selectedTab: number;
  subscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.queryParamMap.subscribe(params => {
      this.selectedTab = +params.get('tab');
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
