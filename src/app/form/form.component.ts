import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  public name: string = "";
  public email: string = "";
  public subject: string = "";
  public text: string = "";

  getData(name: string, email: string, subject: string, text: string): void {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.text = text;
    alert("Thanks " + name + " for contacting me, will reply to " + email + " ASAP.");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
