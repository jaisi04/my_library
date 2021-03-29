import React from 'react';
import { URL_ADD_BOOK } from '../assets/urls';
import Book from './Book';
import { StyledHeader, StyledInput, StyledLink, StyledText, ScrollableSection } from './styledSkins';

export const BookList = ({ bookList, isChecked, searchedKey, expandedBookID, setExpandedBookID, setSearchedKey, setToggleCheckVal }) => (
	<main>
		<h2>List of All Books</h2>
		<StyledInput 
			type="text"
			placeholder="Search a book here"
			value={searchedKey}
			onChange={e => setSearchedKey(e.target.value.toLowerCase())}
		/>
		<StyledHeader>
			<label htmlFor="show_unavailable_check">
				<input
					type="checkbox"
					id="show_unavailable_check"
					checked={isChecked}
					onChange={(e) => setToggleCheckVal(e)}
				/>
				Include Unavailable Books
			</label>
			<StyledLink primary to={URL_ADD_BOOK}>Add Book</StyledLink>
		</StyledHeader>
		<ScrollableSection>
			{bookList.length ? bookList.map(
				book => (
					<Book key={book.id} isExpanded={expandedBookID === book.id} {...book} onClick={setExpandedBookID} />
				)) : (
					<StyledText>
						Books are not available now. Try adding a new book or reset the filters.
					</StyledText>
				)
			}
		</ScrollableSection>
	</main>
);

export default BookList;