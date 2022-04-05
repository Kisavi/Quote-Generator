import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuoteItemComponent } from './content/quote-item/quote-item.component';
import { QuoteComponent } from './content/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteItemComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
