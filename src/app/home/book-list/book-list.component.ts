import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Books } from 'src/app/interfaces/book-list/books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  @Input() books: Array<Books>;
  @Output() add = new EventEmitter();

}
