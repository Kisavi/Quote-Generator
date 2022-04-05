import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    // new Quote (1, 'Peter Ouma', new Date(2022,4,5), 'Never give up'),
    // new Quote (1, 'Peter Ouma', new Date(2022,4,5), 'Never give up'),
    // new Quote (1, 'Peter Ouma', new Date(2022,4,5), 'Never give up'),
    {id: 1, name: 'Uhuru Kinyasa', day: 'Monday', description: 'Fellow Kenyans...'},
    {id: 2, name: 'Niwai Kibangi', day: 'Friday',description: 'Mafi ya kuku...'},
    {id: 3, name: 'Magix Njenga', day: 'Sunday',description: 'Naiwake...'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
