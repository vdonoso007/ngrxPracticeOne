import { Books } from '../interfaces/book-list/books';

export interface AppState {
    books: ReadonlyArray<Books>;
    collection: ReadonlyArray<string>;
}