import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {

  @Input() 'quote': Quote;
  @Output() isComplete = new EventEmitter<boolean>();

//downvote function
  quoteDownVote() {
    this.quote.downVote -=1;
  }

  // upvote function
  quoteUpVote() {
    this.quote.upVote +=1;
  }

  // // highlighting quote with highest upvotes
  // inspirationalQuote() {
  //   // Step 1: here we check and return the highest upvote value/score
  //   let maxValue: number = Math.max.apply(
  //     Math,
  //     this.quotes.map(function (quote) {
  //       return quote.upVote
  //     })
  //   );
  //   //we can check to see the upvote with the highest value/score
  //   console.log(maxValue);

  //   //Step 2: here we find the index of the quote based on the maxValue we got above
  //   let quoteIndex: number = this.quotes.findIndex(
  //     (quote) => quote.upVote === maxValue
  //   );
  //   //we check the quote index that contains the highest number of upvotes using the maxValue we got above
  //   console.log(quoteIndex);

  //   //Step 3: Loop through all the quotes and set the value of isInspirational to true at index of quote with highest maxValue
  //   this.quotes.forEach((quote) => {
  //     quote.isInspirational = false;
  //   });
  //   this.quotes[quoteIndex].isInspirational = true;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
