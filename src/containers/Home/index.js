import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import BookList from '../../components/BookList'

export const Home = () => {
	const { books, searched_key, toggle_check_val, expanded_book_id, setSearchedKey, setToggleCheckVal, setExpandedBookID } = useContext(AppContext);
	// search results matching book or auther name
	const filteredBooks = books.filter(book => book.name.toLowerCase().includes(searched_key) || book.auther.toLowerCase().includes(searched_key));
	// sorting the list in the decreasing order of book count
	const sortedList = filteredBooks.sort((b1, b2) => b1.count > b2.count ? -1 : 1);
	// deciding to exclude unavailable books
	const visibleList = !toggle_check_val ? sortedList.filter(book => book.count > 0) : sortedList;

	return (
		<BookList
			bookList={visibleList}
			isChecked={toggle_check_val}
			searchedKey={searched_key}
			setSearchedKey={setSearchedKey}
			setToggleCheckVal={setToggleCheckVal}
			setExpandedBookID={setExpandedBookID}
			expandedBookID={expanded_book_id}
		/>
	);
};
