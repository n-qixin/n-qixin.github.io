import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  devName = "NG QI XIN";
  role = "Junior Web Developer";
  title = 'N.QX Portfolio';

  constructor(private _portfolioService: PortfolioService, private contexts: ChildrenOutletContexts) { }

  ngOnInit(): void {
    this._portfolioService.setTitle(this.title);
    this._portfolioService.setDevName(this.devName);
    this._portfolioService.setRole(this.role);
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
