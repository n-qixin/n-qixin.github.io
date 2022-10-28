import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message = "This is msg from contact component";

  @Output() childEmitter = new EventEmitter;

  fireMsg() {
    this.childEmitter.emit(this.message);
  }

  fireInnerMsg(){
    this.childEmitter.emit("From inner msg");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
