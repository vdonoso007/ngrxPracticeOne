import { createReducer, on, Action } from '@ngrx/store';

import { retrievedBookList } from './books.actions';
import { Books } from '../interfaces/book-list/books';

export const initialState: ReadonlyArray<Books> = [];

export const booksReducer = createReducer(
    initialState,
    on(retrievedBookList, (state, { Book }) => { console.log('fetching'); return [...Book]; })
);

