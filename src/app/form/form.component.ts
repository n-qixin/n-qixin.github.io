import { Component, Input, OnInit } from '@angular/core';
import { ContactForm } from '../contactForm';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  public name: string = "";
  public email: string = "";
  public subject: string = "";
  public message: string = "";

  model = new ContactForm(this.name, this.email, this.subject, this.message);
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  getData(name: string, email: string, subject: string, message: string): void {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.message = message;
    alert("Thanks " + name + " for contacting me, will reply to " + email + " ASAP.");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
