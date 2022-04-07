import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Motivational Quote', 'Fellow Kenyans...', 'Uhuru Kinyasa', 'Chaggy Jan'),
    new Quote(1, 'Emotional Quote', 'Mafi ya kuku...', 'Niwai Kibangi', 'Hakika Wema'),
    new Quote(1, 'Happy Quote', 'Magix Njenga on the beat...', 'Magix Njenga', 'Fadhili Adili'),
   
    // {id: 3, category: 'Happy Quote', description: 'Magix Njenga on the beat...', author: 'Magix Njenga', submitter: 'Fadhili Adili'},
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