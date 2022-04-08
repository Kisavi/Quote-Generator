import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Disastrous Quote', 'Sasa Mnataka nifanye nini Jameni...', 'Uhuru Kinyasa', 'Ali Baba', new Date(2022, 3, 1), 0, 0),
    new Quote(1, 'Expressional Quote', 'Mtu kama huyo ni bure kabisaa! Ooh yes!', 'Niwai Kibangi', 'Chaggy Chan', new Date(2022, 3, 6), 0, 0),
    new Quote(1, 'Happy Quote', 'Ukiwa na wakando hutaki kapicha, ukuwa na wako manze unachachisha...', 'The Other Delo', 'Magix Njenga', new Date(2022, 2, 28), 0, 0),
  ]

  //function to add new quote generated from the form
  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote)
  }
 
  //function to delete quote when delete button is pressed
  deletQuote(index: any) {
    let result = confirm(`Are you sure you want to delete this ${this.quotes[index].category}?`)
    if (result) {
      this.quotes.splice(index, 1)
    }
  }

  //function of toggling the quote details
  toggleDetails(index: any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
