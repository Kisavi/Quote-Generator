import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    // new Quote (1, 'Peter Ouma', 'Monday', 'Never give up'),
    // new Quote (2, 'Peter Ouma', new Date(2022,4,15), 'Never give up'),
    // new Quote (3, 'Peter Ouma', new Date(2022,4,5), 'Never give up'),
    {id: 1, name: 'Uhuru Kinyasa',  description: 'Fellow Kenyans...', creationDate: new Date(2022,0,1)},
    {id: 2, name: 'Niwai Kibangi', description: 'Mafi ya kuku...', creationDate: new Date(2022,1,3)},
    {id: 3, name: 'Magix Njenga', description: 'Magix Njenga on the beat...', creationDate: new Date(2022,2,15)},
  ]

  completeQuote(isComplete:any, index:any) {
    if(isComplete) {
      this.quotes.splice(index,1)
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
