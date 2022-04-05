import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote (1, 'Peter Ouma', new Date(2022,4,5), 'Never give up'),
    new Quote (1, 'Peter Ouma', new Date(2022,4,5), 'Never give up'),
    new Quote (1, 'Peter Ouma', new Date(2022,4,5), 'Never give up'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
