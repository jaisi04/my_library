import React from 'react';
import BookImg from '../assets/book.svg';
import { URL_EDIT_BOOK } from '../assets/urls';
import { StyledLink, StyledSection, StyledBookText, StyledSubSection, StyledText } from './styledSkins';

export const Book = ({ id, name, auther, image, count, description, isExpanded, onClick }) => (
	<StyledSection faded={count <= 0} onClick={() => onClick(id)}>
		<StyledSubSection>
			<StyledBookText>{name}</StyledBookText>
			<StyledBookText fs="20px">By {auther}</StyledBookText>
			<img src={image || BookImg} alt="book_image" />
		</StyledSubSection>
		<StyledSubSection row>
			<StyledLink to={`${URL_EDIT_BOOK}/${id}`}>Edit Details</StyledLink>
			<StyledText>{!isExpanded ? 'View More' : 'Hide'}</StyledText>
		</StyledSubSection>
		{isExpanded ? <StyledSubSection>
			<p>{count > 0 ? `In Stock: ${count}` : 'Will be in stock soon'}</p>
			{description ? <p>{`About: ${description}`}</p> : <p>{`No Details`}</p>}
		</StyledSubSection> : null}
	</StyledSection>
);

export default Book;