import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  receive() {
    alert("Thank you for getting in Touch. Your feedback has been received and recorded.")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
