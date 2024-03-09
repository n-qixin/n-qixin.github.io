import { Component, Input, OnInit } from '@angular/core';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public title: string = "";
  downloadIcon = faFileDownload;

  constructor() { }

  ngOnInit(): void {
  }

}
