import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  devName = "NG QI XIN";
  role = "Junior Web Developer";
  title = 'N.QX Portfolio';

  constructor(private _portfolioService: PortfolioService) { }
  
  ngOnInit(): void {
    this._portfolioService.setTitle(this.title);
    this._portfolioService.setDevName(this.devName);
    this._portfolioService.setRole(this.role);
  }
  
}
