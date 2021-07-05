import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Books } from 'src/app/interfaces/book-list/books';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent {

  @Input() books: Array<Books>;
  @Output() remove = new EventEmitter();

}
