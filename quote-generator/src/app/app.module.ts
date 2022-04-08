import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuoteItemComponent } from './components/quote-item/quote-item.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { DateCountPipe } from './date-count.pipe';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteItemComponent,
    QuoteComponent,
    QuoteFormComponent,
    DateCountPipe,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
