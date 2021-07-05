import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBookCollection, selectBooks } from '../state/books.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook
} from '../state/books.actions';
import { GoogleBooksService } from '../interfaces/book-list/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  constructor(private booksService: GoogleBooksService, private store: Store) { }

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  ngOnInit(): void {
    this.booksService
      .getBooks()
      .subscribe((Book) => 
        this.store.dispatch(retrievedBookList( { Book })));
  }

}
