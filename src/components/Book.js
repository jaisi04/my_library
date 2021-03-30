import React from 'react';
import BookImg from '../assets/book.svg';
import { COLOR_AVAILABLE, COLOR_DANGER } from '../assets/colors';
import { URL_EDIT_BOOK } from '../assets/urls';
import { StyledLink, StyledSection, StyledBookText, StyledSubSection } from './styledSkins';

export const Book = ({ id, name, author, image, count, description, isExpanded, onClick }) => (
	<StyledSection id={id} faded={count <= 0} onClick={() => onClick(id)}>
		<StyledSubSection>
			<StyledBookText width="76%">{name}</StyledBookText>
			<StyledBookText width="76%" fs="20px">By {author}</StyledBookText>
			<img src={image || BookImg} alt="book_image" />
		</StyledSubSection>
		<StyledSubSection row>
			<StyledLink to={`${URL_EDIT_BOOK}/${id}`} onClick={(e) => e.stopPropagation()}>Edit Details</StyledLink>
			<StyledLink to="" primary>{!isExpanded ? 'View More' : 'Hide'}</StyledLink>
		</StyledSubSection>
		{isExpanded ? <StyledSubSection height="auto">
			<StyledBookText fs="16px" noMargin bgColor={count > 0 ? COLOR_AVAILABLE : COLOR_DANGER}>{count > 0 ? `In Stock: ${count}` : 'Will be in stock soon'}</StyledBookText>
			<StyledBookText fs="16px" noMargin>{description ? `About: ${description}` : `No Details`}</StyledBookText>
		</StyledSubSection> : null}
	</StyledSection>
);

export default Book;