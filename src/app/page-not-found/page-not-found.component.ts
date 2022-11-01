import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1> Error 404: Page not found. </h1>
    <h3> Redirecting in <span id="countdownSpan">5</span> ... </h3>
  `,
  styles: ['*{ text-align: center;}']
})

export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var countdown = 4;
    var x = setInterval(function () {
      $("#countdownSpan").html(countdown.toString());
      countdown--;
      
      if (countdown == -1) {
        clearInterval(x);
        window.location.href = "/";
      }
    }, 1000);
  }

}
