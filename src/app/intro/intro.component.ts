import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  @Input() public devName:string="";
  @Input() public role:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
