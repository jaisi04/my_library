import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import BookList from '../../components/BookList'

export const Home = () => {
	const { books, searched_key, toggle_check_val, expanded_book_id, setSearchedKey, setToggleCheckVal, setExpandedBookID } = useContext(AppContext);
	// adding sample data
	const sampleData = [
		{
			id: 'available_book',
			name: 'Available Book',
			author: 'Sample Store',
			description: 'It is a sample book in stock. Editing this will create a actual book.',
			count: 4,
		},
		{
			id: 'unavailable_book',
			name: 'Unavailable Book',
			author: 'Sample Store',
			description: 'It is a sample book not in stock. Editing this will create a actual book.',
			count: 0,
		}
	]
	const totalData = books.length ? books : sampleData;
	// search results matching book, author name or description
	const filteredBooks = totalData.filter(book => book.name.toLowerCase().includes(searched_key) || book.author.toLowerCase().includes(searched_key) || book.description.toLowerCase().includes(searched_key));
	// sorting the list in the decreasing order of book count
	const sortedList = filteredBooks.sort((b1, b2) => b1.count > b2.count ? -1 : 1);
	// deciding to exclude unavailable books
	const visibleList = !toggle_check_val ? sortedList.filter(book => book.count > 0) : sortedList;
	// changes to keep scrolled position
	const [currentPosition, setCurrentPosition] = useState({top: 0, left:0});
	useEffect(() => {
		if(expanded_book_id) {		
			const offsets = document.getElementById(expanded_book_id).getBoundingClientRect();
			const top = offsets.top;
			const left = offsets.left;
			if(top !== currentPosition.top){
				setCurrentPosition({top, left});
				window.scrollTo(top, left);
			}
		} else {
			const { top, left } = currentPosition;
			window.scrollTo(top, left);
		}
	}, [expanded_book_id, currentPosition])
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
