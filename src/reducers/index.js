import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books"
import ActiveBook from './reducer_active_book'

// If we ran this in our browser right now. Our application would have
// single peace of state called books. Witch returns whatever
// gets returned from the books reducer
const rootReducer = combineReducers({

   books : BooksReducer,
   activeBook : ActiveBook
// we also added a activeBook reducer. books and activeBook are keys
});

export default rootReducer;
