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

  quoteDownVote() {
    this.quote.downVote -=1;
  }

  quoteUpVote() {
    this.quote.upVote +=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
