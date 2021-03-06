import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Books } from '../interfaces/book-list/books';

export const selectBooks = createSelector(
    (state: AppState) => state.books,
    (books: Array<Books>) => books
);

export const selectCollectionState = createFeatureSelector<
AppState,
ReadonlyArray<string>
>("collection");

export const selectBookCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books: Array<Books>, collection: Array<string>) => {
        return collection.map((id) => books.find((book) => book.id === id));
    } );

