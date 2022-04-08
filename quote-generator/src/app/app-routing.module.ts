import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { QuoteComponent } from './components/quote/quote.component';

const routes: Routes = [
  {path: '', component: QuoteComponent},
  {path: 'contact-form', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
