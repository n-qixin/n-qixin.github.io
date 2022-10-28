import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  public devName: string = "";
  public role: string = "";
  public title: string = "";

  constructor(private _portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.title = this._portfolioService.getTitle();
    this.devName = this._portfolioService.getDevName();
    this.role = this._portfolioService.getRole();
  }

}
