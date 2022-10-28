import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ["green", "blue", "red", "yellow", "black"];
  devName = "NG QI XIN";
  role = "Junior Web Developer";
  title = 'N.QX Portfolio';

  msg = "";
  msg1 = "";
}
