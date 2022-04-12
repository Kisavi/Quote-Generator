import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Disastrous Quote', 'Sasa Mnataka nifanye nini Jameni...', 'Uhuru Kinyasa', 'Ali Baba', new Date(2022, 3, 1), 0, 0, false),
    new Quote(1, 'Expressional Quote', 'Mtu kama huyo ni bure kabisaa! Ooh yes!', 'Niwai Kibangi', 'Chaggy Chan', new Date(2022, 3, 6), 0, 0, false),
    new Quote(1, 'Happy Quote', 'Ukiwa na wakando hutaki kapicha, ukuwa na wako manze unachachisha...', 'The Other Delo', 'Magix Njenga', new Date(2022, 2, 28), 0, 0, false),
  ]

  //function to add new quote generated from the form
  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote)
  }

  //function to delete quote when delete button is pressed
  deletQuote(index: any) {
    let result = confirm(`Are you sure you want to delete this quote by ${this.quotes[index].author}?`)
    if (result) {
      this.quotes.splice(index, 1)
    }
  }

  //function of toggling the quote details
  toggleDetails(index: any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  // // highlighting quote with highest upvotes
  inspirationalQuote() {
    // Step 1: here we check and return the highest upvote value/score
    let maxValue: number = Math.max.apply(
      Math,
      this.quotes.map(function (quote) {
        return quote.upVote
      })
    );
    //we can check to see the upvote with the highest value/score
    console.log(maxValue);

    //Step 2: here we find the index of the quote based on the maxValue we got above
    let quoteIndex: number = this.quotes.findIndex(
      (quote) => quote.upVote === maxValue
    );
    //we check the quote index that contains the highest number of upvotes using the maxValue we got above
    console.log(quoteIndex);

    //Step 3: Loop through all the quotes and set the value of isInspirational to true at index of quote with highest maxValue
    this.quotes.forEach((quote) => {
      quote.isInspirational = false;
    });
    this.quotes[quoteIndex].isInspirational = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
