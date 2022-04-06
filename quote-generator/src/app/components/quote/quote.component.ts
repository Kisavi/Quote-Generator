import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    //  new Quotes (1, 'Peter Ouma', 'Monday', 'Never give up'),
    // new Quotes (2, 'Peter Ouma', new Date(2022,4,15), 'Never give up'),
    // new Quote (3, 'Peter Ouma', new Date(2022,4,5), 'Never give up'),
    {id: 1, category: 'Motivational Quote', description: 'Fellow Kenyans...', author: 'Uhuru Kinyasa', submitter: 'Chaggy Jan'},
    {id: 2, category: 'Emotional Quote', description: 'Mafi ya kuku...', author: 'Niwai Kibangi', submitter: 'Hakika Wema'},
    {id: 3, category: 'Happy Quote', description: 'Magix Njenga on the beat...', author: 'Magix Njenga', submitter: 'Fadhili Adili'},
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
