import { combineReducers } from "redux";
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({  // really the mapping of our state
	books: BooksReducer
});

export default rootReducer;



/*
	import { combineReducers } from "redux";

	const rootReducer = combineReducers({

	});

	export default rootReducer;
*/