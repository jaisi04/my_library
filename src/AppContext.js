import React, { createContext, useReducer } from 'react';

export const initialValues = {
	books: [],
	searched_key: '',
	toggle_check_val: false,
	expanded_book_id: 0,
	addBook: () => null,
	editBook: () => null,
	setSearchedKey: () => null,
	setToggleCheckVal: () => null,
	setExpandedBookID: () => null,
}

export const AppContext = createContext(initialValues)


function reducer(state, action) {
	const { books } = state;
	switch (action.type) {
		case 'add_book':
			return { ...state, books: [...books, action.book] };
		case 'edit_book':
			const { id } = action.book;
			const unChangedBooks = books.filter(book => book.id !== id);
			return { ...state, books: [...unChangedBooks, action.book] };
		case 'set_search_key':
			return { ...state, searched_key: action.searched_key };
		case 'set_toggle_check_val':
			return { ...state, toggle_check_val: !state.toggle_check_val };
		case 'set_expanded_book_id':
			return { ...state, expanded_book_id: state.expanded_book_id === action.id ? 0 : action.id };
		default:
			return state;
	}
}

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialValues)

	return (
		<AppContext.Provider
			value={{
				...state,
				addBook: (book) => dispatch({ type: 'add_book', book }),
				editBook: (book) => dispatch({ type: 'edit_book', book }),
				setSearchedKey: (searched_key) => dispatch({ type: 'set_search_key', searched_key }),
				setToggleCheckVal: () => dispatch({ type: 'set_toggle_check_val', }),
				setExpandedBookID: (id) => dispatch({ type: 'set_expanded_book_id', id }),
			}}>
			{children}
		</AppContext.Provider>);
}