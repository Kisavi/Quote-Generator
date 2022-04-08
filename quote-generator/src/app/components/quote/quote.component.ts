import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Disastrous Quote', 'Sasa Mnataka nifanye nini Jameni...', 'Uhuru Kinyasa', 'Ali Baba', new Date(2022,3,1), 0, 0),
    new Quote(1, 'Expressional Quote', 'Mtu kama huyo ni bure kabisaa! Ooh yes!', 'Niwai Kibangi', 'Chaggy Chan', new Date(2022,3,6), 0, 0),
    new Quote(1, 'Happy Quote', 'Ukiwa na wakando hutaki kapicha, ukuwa na wako manze unachachisha...', 'The Other Delo', 'Magix Njenga', new Date(2022,2,28), 0, 0),
  ]

  // deleteQuote(isComplete:any, index:any) {
  //   if (isComplete) {
  //     let toDelete = confirm(`Are you sure you want to delete this ${this.quotes[index].category}?`) 

  //     if (toDelete) {
  //       this.quotes.splice(index,1)
  //     }
  //   }
  // }
 

  // completeQuote(isComplete:any, index:any) {
  //   if(isComplete) {
  //     this.quotes.splice(index,1)
  //   }
  // }

  addNewQuote(quote:any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote)
  }

  deletQuote(index:any) {
    this.quotes.splice(index,1)
  }

  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
