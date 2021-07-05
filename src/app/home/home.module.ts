import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { booksReducer } from '../state/books.reducer';
//import { collectionReducer } from '../state/collection.reducer';
import { reducers, metaReducers } from '../reducers';
import { collectionReducer } from '../state/collection.reducer';


@NgModule({
  declarations: [
    HomeComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer}),
  ]
})
export class HomeModule { }
