import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { BookStoreService } from './shared/book-store.service';
import { AppRoutingModule } from './app-routing.module.one-app';
import { BookResolver } from './shared/book-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    BookStoreService,
    BookResolver,
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
